import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import knowledgeBase from '@/data/knowledge-base.json' with { type: 'json' };
import fs from 'fs';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: 'gemini-3-flash-preview' });

export async function POST(request: NextRequest) {
	try {
		const { message } = await request.json();

		const experts = new Set(knowledgeBase.map((item: any) => item.advisor));

		const transcriptForExpert = (message: string) => {
			return message.toLowerCase().includes('theo')
				? fs.readFileSync('data/transcripts/theo.txt', 'utf8')
				: '';
		};

		const SYSTEM_PROMPT = `
    You have access to a knowledge base of coding experts. The experts are: ${Array.from(experts).join(', ')}.
    If the question is not related to coding, you should say that you are not sure and you should not try to answer it.
    If the user is asking for an advisor that is not in the knowledge base, you should say that you are not sure and you should not try to answer it.
    Here is the knowledge base of the advisors: ${JSON.stringify(knowledgeBase, null, 2)}.
    You should use the knowledge base to answer the question and add more context to the answer if needed. Do not just repeat the knowledge base, but use it to answer the question.

    ${transcriptForExpert(message) ? `Here is the transcript for the expert: ${transcriptForExpert(message)}` : ''}
    `;

		const userResponse = await model.generateContent(
			`${SYSTEM_PROMPT}\n\n User message: ${message}`,
		);
		console.log(JSON.stringify(userResponse.response, null, 2));
		const response = userResponse.response.text();

		return NextResponse.json({
			response: response,
		});
	} catch (error) {
		console.error('Chat API error:', error);
		return NextResponse.json(
			{ error: 'Failed to generate response' },
			{ status: 500 },
		);
	}
}
