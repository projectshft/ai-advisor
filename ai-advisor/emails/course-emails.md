# 5-Day AI Developer Course - Daily Emails

---

## Day 1: Your First API Call

**Subject:** Day 1: Let's actually talk to an AI (not just read about it)

Hey!

I'm excited for you and can't wait to see what you build in the next 5 days.

Today we're doing the most basic thing you can possibly do with AI: make an API call. You type something in, it goes to Gemini, Gemini sends something back. Super duper simple.

But here's the thing - this is the foundation. Every fancy AI product you've seen? It's this, plus more stuff on top. So let's nail this first.

**[Start Day 1 →]({{DAY_1_LINK}})**

You should be on the student-starter branch, not main. Main has all the answers and that's no fun.

Also - you're a software developer. Break things. Extend things. Make it weird. That's the whole point.

Oh, and connect with me on LinkedIn if you haven't already: [linkedin.com/in/brianjenney](https://linkedin.com/in/brianjenney). Yes, I know. But it's still weirdly the best place to get hired and I post AI stuff that might actually be useful.

– Brian

---

## Day 2: System Prompts (aka How to Not Be Chipotle)

**Subject:** Day 2: Your AI is too helpful. Let's fix that.

You're back. Nice.

Remember how Chipotle's chatbot was helping people solve linked lists? Yeah, don't be Chipotle.

Today we add system prompts - basically telling the AI who it is, what it should do, and what it should absolutely NOT do. Think of it like SRP (Single Responsibility Principle) but for your prompts.

We're gonna make our advisor actually stay in its lane. No more answering questions about the weather in France when it should be talking about code.

**[Start Day 2 →]({{DAY_2_LINK}})**

Pro tip: if you're paying for tokens, every dumb question someone asks costs you money. Guardrails aren't just nice - they save you cash.

– Brian

---

## Day 3: RAG (Retrieval Augmented Generation)

**Subject:** Day 3: Your AI is about to get a knowledge base

Still here? Respect.

Today we do RAG - Retrieval Augmented Generation. Fancy words for "give the AI some data it doesn't already have."

Here's the deal: these models have a training cutoff. They don't know what Theo said last week. They don't know your company's vacation policy. If you want them to know stuff, you gotta tell them.

We're gonna add a knowledge base with thoughts from some YouTubers - Theo Brown, Primo Gen, and yeah, me too (I had to pick someone, why not). Now when you ask "what does Theo think about testing?" - it actually knows.

**[Start Day 3 →]({{DAY_3_LINK}})**

Think about your information architecture. How will the LLM find the right piece of data? Structure matters.

– Brian

---

## Day 4: YouTube Transcripts (Real Data from the Web)

**Subject:** Day 4: We're scraping YouTube now

We're in the home stretch.

Today we grab actual transcripts from YouTube using a Python script in Google Colab. No special keys needed. Just video IDs.

Now your AI advisor can answer questions based on what these creators _actually said_ - not just what you wrote in a JSON file.

Quick heads up: we'll talk about vector databases and chunking today. We won't build one (that's a bigger topic), but you should know they exist. When you have thousands of transcripts, you can't just dump everything into the prompt. Context windows have limits.

**[Start Day 4 →]({{DAY_4_LINK}})**

Remember Finding Nemo? The fish that couldn't remember anything past 5 minutes? That's your chatbot right now if you're not passing history. Something to think about.

– Brian

---

## Day 5: What's Next (+ A Real Product)

**Subject:** Day 5: You built something. Now what?

Final day. You made it.

Look - what you built might not feel that complex. And that's kind of the secret. This stuff IS software development. It's just a new type of API with some quirks.

Today I'm gonna show you a real product I built - a TikTok influencer finder for record labels like Rock Nation and Universal. It uses all the same concepts you learned, just at scale. Millions of data points, vector databases, the whole thing.

**[Start Day 5 →]({{DAY_5_LINK}})**

Here's my ask: extend this thing. Add more transcripts. Try a vector database. Break it. Show it to your team. Do a hackathon at work.

The developers that know this stuff? There aren't many of them yet. That's leverage.

If you want to go deeper, check out the Applied AI Accelerator at parity.io. It's where we teach the production-level stuff with actual humans in the loop.

Either way - reach out on LinkedIn or brian@parity.io. I genuinely want to see what you build.

– Brian

---

## Placeholder Links

Replace these in your email system:

- `{{DAY_1_LINK}}` - Day 1: Your First API Call
- `{{DAY_2_LINK}}` - Day 2: System Prompts
- `{{DAY_3_LINK}}` - Day 3: RAG with Knowledge Base
- `{{DAY_4_LINK}}` - Day 4: YouTube Transcripts
- `{{DAY_5_LINK}}` - Day 5: What's Next
