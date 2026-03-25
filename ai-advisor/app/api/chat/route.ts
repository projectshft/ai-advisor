import { NextRequest, NextResponse } from 'next/server';
import { StateGraph, START, END, MemorySaver } from '@langchain/langgraph';
import { ChatGoogleGenerativeAI } from '@langchain/google-genai';
import { z } from 'zod';

// =============================================================================
// STATE - Defines the shape of data flowing through the graph (Zod schema)
// =============================================================================

const graphStateSchema = z.object({
	messages: z
		.array(z.object({ role: z.string(), content: z.string() }))
		.describe('Conversation history'),
	intent: z
		.enum(['quote', 'payment', 'clarification'])
		.optional()
		.describe('Classified intent of the user request'),
	customerInfo: z
		.object({
			name: z.string().optional(),
			phone: z.string().optional(),
			address: z.string().optional(),
			accountId: z.string().optional(),
		})
		.optional()
		.describe('Collected customer information'),
	response: z.string().optional().describe('Final assistant response'),
});

type GraphState = z.infer<typeof graphStateSchema>;

// LLM
const model = new ChatGoogleGenerativeAI({
	model: 'gemini-2.0-flash',
	apiKey: process.env.GEMINI_API_KEY,
});

// =============================================================================
// NODES - Each function is a node in the graph that processes state
// =============================================================================

async function classifyIntent(state: GraphState): Promise<Partial<GraphState>> {
	const lastMessage = state.messages[state.messages.length - 1];

	const classificationPrompt = `You are an intent classifier for a roofing company chatbot.
Classify the following customer message into ONE of these categories:
- quote: Customer wants a quote or estimate for roofing work (repairs, replacements, inspections)
- payment: Customer wants to make a payment on their existing roof service/account
- clarification: The message is unclear, off-topic, or needs more information

Customer message: "${lastMessage.content}"

Respond with ONLY the intent category (quote, payment, or clarification).`;

	const response = await model
		.withStructuredOutput(
			z.object({ intent: z.enum(['quote', 'payment', 'clarification']) }),
		)
		.invoke(classificationPrompt);

	return { intent: response.intent };
}

// Handles quote requests: Collects customer info and schedules follow-up
async function handleQuote(state: GraphState): Promise<Partial<GraphState>> {
	const lastMessage = state.messages[state.messages.length - 1];

	const quotePrompt = `You are a helpful roofing company assistant. A customer is requesting a quote.

Customer message: "${lastMessage.content}"
Customer info we have: ${JSON.stringify(state.customerInfo || {})}

Generate a friendly response that:
1. Acknowledges their request for a quote
2. Asks for any missing information we need (name, phone, address, type of roofing work)
3. Let them know a specialist will follow up within 24 hours

Keep the response concise and professional.`;

	const response = await model.invoke(quotePrompt);

	return {
		response: response.content as string,
		messages: [
			...state.messages,
			{ role: 'assistant', content: response.content as string },
		],
	};
}

// Handles payment requests: Provides payment options and collects account info
async function handlePayment(state: GraphState): Promise<Partial<GraphState>> {
	const lastMessage = state.messages[state.messages.length - 1];

	const paymentPrompt = `You are a helpful roofing company assistant. A customer wants to make a payment.

Customer message: "${lastMessage.content}"
Customer info we have: ${JSON.stringify(state.customerInfo || {})}

Generate a friendly response that:
1. Thanks them for wanting to make a payment
2. Asks for their account ID or the address where work was done (if not provided)
3. Provides payment options: online portal (www.acmeroofing.com/pay), phone (555-ROOF-PAY), or in-person
4. Mentions they can also set up autopay

Keep the response concise and professional.`;

	const response = await model.invoke(paymentPrompt);

	return {
		response: response.content as string,
		messages: [
			...state.messages,
			{ role: 'assistant', content: response.content as string },
		],
	};
}

// Fallback node: Asks user to clarify when intent is unclear or off-topic
async function handleClarification(
	state: GraphState,
): Promise<Partial<GraphState>> {
	const lastMessage = state.messages[state.messages.length - 1];

	const clarifyPrompt = `You are a helpful roofing company assistant. The customer's message was unclear or off-topic.

Customer message: "${lastMessage.content}"

Generate a friendly response that:
1. Politely acknowledges their message
2. Asks them to clarify what they need help with
3. Offers examples: quotes for roofing work or making payments on their account

Keep the response concise and friendly.`;

	const response = await model.invoke(clarifyPrompt);

	return {
		response: response.content as string,
		messages: [
			...state.messages,
			{ role: 'assistant', content: response.content as string },
		],
	};
}

// Routes to the appropriate handler based on classified intent
function routeAfterClassification(state: GraphState): string {
	switch (state.intent) {
		case 'quote':
			return 'handleQuote';
		case 'payment':
			return 'handlePayment';
		default:
			return 'handleClarification';
	}
}

const checkpointer = new MemorySaver();

const roofingGraph = new StateGraph({ stateSchema: graphStateSchema }).compile({
	checkpointer,
});

// API Route
export async function POST(request: NextRequest) {
	try {
		const { message, threadId } = await request.json();

		if (!message) {
			return NextResponse.json(
				{ error: 'Message is required' },
				{ status: 400 },
			);
		}

		const config = {
			configurable: {
				thread_id: threadId || `thread_${Date.now()}`,
			},
		};

		const result = await roofingGraph.invoke(
			{ messages: [{ role: 'user', content: message }] },
			config,
		);

		console.log('result', result);

		return NextResponse.json({
			response: result.response,
			intent: result.intent,
			threadId: config.configurable.thread_id,
		});
	} catch (error) {
		console.error('Chat error:', error);
		return NextResponse.json(
			{ error: 'Failed to process request' },
			{ status: 500 },
		);
	}
}
