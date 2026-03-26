  Hey, my name is Brian and I'm super excited for you to start this course. I'm a senior software engineer who spent the last couple years building AI powered products for a few startups, one of which got acquired, and the other one was for finding TikTok influencers for major record labels. And I'm gonna show you a little bit about that at the end of the week.

But my intention through this is to help you cut through the noise and understand what it really takes practically as a software developer. To build AI powered products. So we're gonna take a look at how to build this advisory board through a chat interface. This is gonna be pretty cool, and I give you enough room to make it your own.

We're gonna learn how to download the data, feed it to a model like Gemini, and then get a response back. So for example. We're gonna use an advisory board full of YouTube creators like Theo Brown, the Primo Gen Me. If you can count me as a creator, Hey, why not? We're gonna use what these people think about certain software topics.

So when we ask our little chat interface here, this beautiful interface that I've created for you, when you ask it a question, it's gonna respond by using the thoughts and the transcripts, basically what these people have said to give you a response that is grounded. In that BA that is grounded in that information.

Really, really cool stuff. But before we get started, we have to start at the very basics, right? We have to make sure that you have everything set up. You have your API key, and we're gonna be using next JS type script and Google's Gemini flash model.

But I want you to, but I want you to understand that the frameworks, the languages, it doesn't matter, right? You're a software developer. You could build this in c Rust, Python. It really doesn't matter. In fact, one of the products I made at the last startup we wrote in Python, then we transferred to TypeScript, the other one we wrote in TypeScript and transferred over to Python.

Same exact stuff. The syntax changes. The concepts do not change at all. This is something you can literally apply to any coding language you want to use within reason, of course. But yeah, I don't want you to get too caught up in that kind of stuff. I want you to get caught up in the concepts and because you're a software developer.

Using this program, using this free course, I think you should be extending things, breaking them, rewriting them, and just seeing what you can do. This gives you a nice playground and I'm gonna show you some things that might not be obvious through these videos and just kind of walk you through how we're gonna build this.

But you can just use the text-based content to do this. You don't have to watch these videos. It may be useful to watch me do things, and you can always reach out if you're having any problems. Now that we got that outta the way, Let's start by doing the very first thing we need to do, which is supporting the most basic chat functionality we can have where a person types something in, they send it, and then we respond by sending that response or that request to Google's Gemini a p, by sending that request, that user query to Google's Gemini large language model, and then getting back the response.

This is simply just using an API. Super duper simple, but maybe you're not used to doing this, but the most basic, but the most basic skill you can have if you're gonna get into AI engineering or applied AI or whatever term you want to use, is how do you programmatically call a large language model?

You're probably used to using things like chat, GPT or Claude or whatever, right? Or you type something into the chat box and you get a response back. Now if we wanna host that functionality within our app, all we simply do is take that user request and then we send it to the large language model, whether it's Gemini or OpenAI or whatever.

And then we get back the response, very simple. And the first thing we're gonna do is make an API key. Now I'm at AI studio.google.com/api keys. Just create an I just create an API key. So I have one right here that I've already taken. And what you're gonna do is go into your project, go to do nv, and you're gonna put Gemini a P key equals whatever the name of that API Key is, I'm gonna erase this, so this is not usable anymore, so you can't steal it and like try to run up my bill also, this is the free tier we're using.

You may get rate limited. If you're using this really heavily, I would suggest putting like, you know, two to $3 in there just so you don't get rate limited. But I think you're gonna be fine for what we're gonna be doing. This isv, and this is at the root of the project. That's it. Right now we are using a next JS app.

This is not gonna be a next JS course at all. In fact, if you want to use Cursor or clawed or whatever, you should be using that. I'm on a branch called Instructor Starter. You should be on a branch that's something like student starter or something like that. Don't use the main branch. 'cause that'll have all the 'cause that'll have the solutions for everything.

And it just, that's not fun. It's not fun just reading over the code. The whole point is to make this your own. And I am. And I am gonna give you enough room that you can really extend this project as much or as little as you want. So first things first. Let's do NPMI to install all the stuff. We install all the packages and then we can do NPM Run Dev to actually start the project up.

We go to local host 3000 and we can type something in, like what? Would, uh, Theo say about ai, right? And right now it doesn't know, right? There's nothing that it knows. We don't know who Theo is. We don't have anything in here at all to enable the AI to actually respond. So let's find out how we do that. Now I've read the docs already and I know how to implement this, and so I've already done it, but I really encourage you to go ahead and read some of the docs in here because I think they can be really useful here. So we go to dashboard, we go to documentation, and it will tell you a little bit about how this works.

So the Gemini API has these docs in Python or JavaScript or whatever, right? It tells you which model to use. It can tell you the contents, and then you can just console log, right? These are okay to use. This is not a bad set of documentation. Um, we're doing this a little bit differently, and right here we say Gen ai.

We invoke a new Google generative ai, the library, we say, Hey, here's the Gemini API key. I have an exclamation point, meaning, hey, you must have this or else you will fail quickly. We'll do the model. We'll say, Hey, use this particular model. This model is currently supported on the free tier.

Uh, at the time that you may be watching this, maybe there's different models you want to explore. Super simple. Just replace whatever's in here with whatever model is available. I'm just using the model that they said in here is available. Now, oddly enough, if you're using Claw or Cursor, they may actually give you a model that doesn't exist.

This is why it's so important to read the docs when you're working with these AI tools because they move so quickly and the training data for open ai, Claude is usually a couple years in the past that they generally won't know the most current model for these things. And so you do need to go to the documentation more so than if you were just doing a typical React project.

So now we have the Genai library. We say, here's the model that we are using, right? We're using the Genai library to say, give me this generative model now. We have this post request. Now quickly, here's how a next JS app works. We have this API folder, which is our API, right? Then we have different routes.

We're gonna only be using the chat route. We have chat, so if you go to API slash chat. The route is what will handle requests coming in on that particular route. API slash chat, and this is where you actually handle that logic. We have a post request, so anybody that makes a post request to that route will listen for it.

We send in the message, we've already taken care of that front end part for you. And the front end is this funny looking as 400 style. Feel free to change that up and do whatever you want with it. I thought it looked cool. If you wanna share it on LinkedIn or social media. It kind of looks kind of funny, kind of quirky, which I think is kind of cool.

So my, maybe if you wanna share this or shout us out or shout me out or get some. Or get some engagement on what you're doing, you know, feel free to tag me or whatever. And I'm, I'm happy to, to respond and, and help you get some momentum on LinkedIn as well. So this is very simple, right? We take a message that a person sends and then all we do is do cons, you know, user response.

Um, and then we say AWAI model. Do generate content. Message and then what we do, we get the text back. Now, here's what I think is much more interesting to look at. Let's look at the string offi version of that response, because this can feel a little bit magical in some ways where you're saying, Hey, generate content.

You pass in a message and then just gives you back some text. But what's happening under the hood? It's simply an API call. It's just a library wrapped around an API call, and you'll see a lot of products out there, a lot of AI products that essentially are these wrappers, they're just chat wrappers.

I don't think there's anything inherently wrong with this, but this is the simplest version of how to use AI in a web app. Just taking a user's response and just dumping it directly. Into that model and then getting back the response. So let's check this out. We'll save this, and then we'll say Here, instead of just saying respon, instead of responding with a to-do, we will respond with the user response.

And we don't need to do that. We just say, user response, blah, blah, blah, blah. Oh, we'll say response. We'll take the response right here and we'll say response. And we are good to go. We'll get rid of these to-dos here so we just don't have a bunch of junk hanging out here and we'll be okay to go. That is our, really, our first task.

That is the very first thing we must do is just learn how to interact with these things, and I put some console logging in there. Because I think it's important. You don't want these to be black boxes. Right. We'll refresh this and then we'll say something like, what is the weather in France in spring?

Like, I dunno, something useless, right? We'll send this while this is sending, we'll go here and let's take a look in here and see what we get back and see what this string, offi, JSON stuff is. Interesting. Right? We get some metadata about the number of tokens used saying, Hey, basically how many tokens, how much work was involved in returning this response?

You'll usually be charged by tokens, right? Tokens are not free. In this case, they are, because we're using this free version of that model. So we get some more information back about what's going on. We get some text back, we get some formatted text, and so this is just an API response, right? Nothing that magical is happening here.

This is just another API that you will use in your system, but this time, instead of returning back JSON, you're returning back a bunch of text and now you have this spring in France, blah, blah, blah, blah, blah, blah. Very boring, very useless. But now we have the first step down. Now we can use this as a foundation to build more.

So between now and tomorrow, I would suggest looking over some of these documentations because. I would suggest maybe looking at other documentations for like open AI for Anthropic. Maybe for grok. I think that's probably one of the lamest models out there, but it's good to know how all these kind of work, because they all kind of work the same.

I don't really use Gemini very often. In fact, I only use it. For these types of free courses, because it's free. OpenAI is kind of the McDonald's, it's kind of the most mainstream model version out there, and so that's what I usually use, but it doesn't have a free tier. But if you know how one works, you kind of know how all of them work.

They all have a little bit of their own quirks and their own little slight variations of their implementation, but it's really all the same. So now that we've got that done tomorrow we're gonna come back and learn a little bit about the art of system prompts. I didn't wanna say prompt engineering, but for all intents and purposes, we are gonna learn a little bit about the art of.

Quote unquote, prompt engineering. Don't roll your eyes too much. There is some good knowledge that we're gonna get outta that. It's gonna help us move towards building this AI advisory board that's gonna be super cool and get to use data that you are going to scrape from the web and then store in our, and then store in our apps so you can get some really high quality responses from people that you otherwise might not be able to interact with.

Anyways, hope you found that useful, and I'll see you tomorrow.

Day 2

Hey, welcome back. Remember yesterday we started off with a really basic project. We take a user's query and we simply give that to Gemini and say, Gemini, take that and then give us a response. We show it back on the screen. This is what's called an LLM wrapper. This is the most basic form of AI engineering or applied AI you can have.

So let's step it up a notch and make our system work in a much more. And make our system work in a much more customized way. A way to do this is to add a system prompt, basically a set of instructions that are run before you even get to the user's query. For example, if we wanted to have this. System Act as an AI advisor, maybe saying, Hey, we wanna know about AI stuff, about applied AI engineering, and I want really specific instructions and advice on doing that.

Well, that's general knowledge, right? So you could actually get back quite a lot of really general knowledge if you just tell this LLM, Hey, who am I? What am I doing? Gimme a persona, gimme some instructions. Tell me what I should be doing. And the easiest way to do that is to just create a prompt. We'll just put system, const, system prompt and say you are an AI mentor that understands rag agents and other advanced concepts.

And, and then I'm, I have an actual, um, constraint I want to add in here and say you only, you only. You only answer questions related to coding. You only use type script in your responses for. Code examples so that those are my constraints, right? In a system prompt, you want to keep it pretty tight because you don't want to have so many different variations and paths.

It's a lot of cognitive overload, and you can get degraded responses by doing that. So if you follow the single responsibility principle, SRP, it's a really good way to think about prompts and even agents, which we won't really talk about in the next five days. But essentially what we're building. It's a type of agent, right?

Programmatically giving a response back based on a user's query. You could kind of call this an agent, even though technically it's not really truly an agent. But for all intents and purposes, this is acting like an agent, right? It's our AI advisor agent, if you want to call it that. I think that's fine.

So your system prompter says, what am I doing? What is my responsibility? Do I need any other information? Do I need any kind of context that I need to have in order to make this response? And in this case, yes. I don't want you to just give me a generic response. I want for every single time that I make a request, I want you to know that, hey, you're an AI mentor.

You're gonna talk about these things. If I ask about the weather in France, you're gonna say, Nope, I'm not gonna answer that. And you only use TypeScript because I'm a TypeScript developer And I want examples in the coding language that I'm the most familiar with.

And lastly, I'm gonna say if. If the question is not related to coding, you should say that you're not sure and should not try to answer it. Now, I encourage you to make this your own. The system prompt actually does quite a lot of heavy lifting in some apps and to be honest, there are chat wrappers.

There are companies that are quite literally selling versions of. This. And if you saw what happened with Chipotle recently, they didn't do this too well because people were able to use their chat bot to ask about things like, well, how can you solve a linked list? Chipotle should not be helping you solve linked lists.

Right? They should have had a much more, they should have had a much stronger system prompt that wouldn't have allowed people to ask those kinds of silly questions. We are not gonna fall in that same trap that Chipotle did. We're gonna say, Hey, this is not related to coding. Don't answer it. Right. Why would you wanna do that?

Because if people are asking irrelevant nonsense questions, you're gonna be ultimately paying for that. If you are paying for open ai, all those tokens and things that people ask are not free. Right. So you'll be paying for that. Ultimately. We do not want to do that. Let's save this and let's give this a whirl.

We will try something nonsensical. Like tell me about. France's wine selection. I don't know anything about France or wine, but whatever just popped into my head. Let's see what it says.

And it says, oh, Francis Uhoh didn't look like it. Followed our instructions. And because I forgot something pretty important here, which is to actually add it in here, right? We have the system prompt. So let's actually add the system prompt in here. We say, Hey, generate content. It needs to know the system prompt, and then it has to have the user message.

we can also add a little thing here. It says, user. Message. Right? And it just helps it format the response. So we have the system prompt. We don't even need to say system prompt. We can just start off with the system prompt. And then we have a couple line breaks here, and then we say, here's the user message.

And their message. That's kind of it. I think now we should be able to avoid that kind of thing. So I'm gonna try this one more time. I'm gonna send again and let's see what it does this time. I am not sure. Tell me about Francis Wine selection. How about, tell me about using Pine Cone, uh, as a Vector db.

Let's see what it says now.

Look at this really good response here. It says prerequisites and it tells me about TypeScript. Oh, this is perfect, right? So this is actually semi useful right now. It tells me about how to upsert vectors and vector databases. It's all in TypeScript. I ask, it's something ridiculous about Francis says, I'm not sure.

We could improve that for sure. We could say, instead of saying, you know, I'm not sure you could say, I only answer questions about X, Y, and Z, right? So you can really refine this to make it your own, but ultimately, like don't get so caught up in like prompt engineering hacks or all these different frameworks out there.

These frameworks certainly are valuable and can be really helpful. But just remember SRP, single Responsibility principle. What am I doing? How should I do it? What do I need to know to give you the response that you would find useful? Now, this is still super duper generic and we are going to improve this by quite a lot by adding some relevant data.

To it so it can answer things very, very specific that our AI advisory board might think. And we're gonna inject some information from our AI advisory board into our system prompt coming up soon. That's gonna help it give us really, really good tailored responses.

Now, one kind of major issue that I want to at least bring up and have you think about on your own if you want to enable this, is the fact that right now we're essentially starting from scratch. Every single time a user makes a request. Do you remember that movie Finding Nemo, where there was that Phish that couldn't remember anything past like five minutes ago?

This is kind of like that. Every time a user creates a message, like we start here, we get the message they just put in, and then we say, here's the system prompt. And then we add that system prompt in their message together and we say, now give me a response back. But what if they have like a follow-up question?

We don't maintain the history of their chat in here. Which would be really useful, right? Maybe they say, great, what about this? Now, without context, without having that history of messages, you would only get that immediate first message or you would only get the most recent message in here, which is not always what you want.

In fact, it's rarely what you want. You usually want to maintain some sort of history of the chat, right? If you're talking to chat GBT or Claude, you have a history, a context of all those messages that you have for the sake of time, and also because this is a very small course to get you just barely started.

We're not gonna go into that here, but this is something you could look up with. But this is something I encourage you to look up because this model does enable that. And you can do things like start chat and you could have the history and you could put the role, the user would say this, and then here's the, you can add all this in here if you want, and you could add the last.

Five messages, the last four, some arbitrary number. So you have some sort of like running memory of what was said, and this helps the model create better responses. But for our purposes, we're only ever gonna look at the current message. That's all we're gonna work on. But I definitely want to encourage you to extend this as much as you want.

This is supposed to give you a baseline for how to do this, not give you a full end-to-end course on that. That's what we do in parity in our applied ai. That's what we do within parity in our applied AI course, where we teach all this stuff in a whole lot more. Anyway, hope you found this really useful and helpful, and definitely make this your own.

And then tomorrow we're gonna extend this and make this much more complex in a really, really cool way.

Day 3

 

Welcome to day three, and before we jump into code, I think it's important that we go over what is rag, what is Retrieval, augmented generation, because we're gonna, IM. Because we're gonna support a very, very naive way of doing rag here with basically a flat file That has some data about some YouTube influencers that we want to talk to. We wanna get their opinions on coding and things like that. So we say, Hey, Theo Brown, what do you think about testing? Hey Brian Ginny, what do you think about career advice for junior developers? Hey, primo gen, what do you think about using Vim or whatever?

And we're gonna extend this and make this even more complex even better soon. But before we get into that, I think it's important to, at a high level, understand what is rac. It's basically. Giving an AI model, a large language model, some relevant data at the right time to make a decision. Now, this is really important.

This data piece is the most important because the data is stuff that it wouldn't normally have access to. If you asked chat, GBT, what is our company policy on vacation, it's gonna say, I don't know. Right? I have no clue what your company policy on vaca, why would I know that? Right? So you need to provide the information for it.

This is retrieval augmented generation. You say, Hey, go retrieve some information first before you make that claim and then generate the response. How does it retrieve that information? We're gonna go over that tomorrow, actually. But today, just know that it needs to retrieve the information somehow. You can pass it in through the system prompt.

You can have a much more complex way of doing it by first running some sort of database query, maybe in sql, maybe in a vector database, which we'll get into tomorrow. And then you can look at these documents, the relevant documents that are relevant to the person's. That are relevant to the person's query, you can say, oh, we have like five or six documents or four documents on vacation policies.

You take all those documents, you return them back to the model. It takes that question, it takes those documents, and then it returns you a response. Most AI models, most of these large language models that you're using have been have a training cutoff date of around two years ago, meaning they don't know what happened today in the news.

They don't know about your particular company. They don't know about information that's on the web that they, they, that they just don't have access to. So if you can find interesting data and then feed it to that model, you have something really, really interesting. And by the way, this AI advisory board concept was actually taken directly from a student in Pars City who built this.

He built a more productionized version of this where he was thinking, Hey, I wanna talk to business advisors like Alex or Moey, or.

Or Sahil Bloom, or a couple other people, right? He had a few of these advisors in this board and he got all their transcripts and he put them into a vector database for easy retrieval. And then when you asked a question like, Hey, how should I run a. My, how should I run a campaign for getting more customers into our, you know, top of funnel or something like that?

It could look up answers directly from these people based on the thousands of transcripts and the hundreds of hours of content they've done, and then give very, very targeted responses and targeted feedback to you. You can't just do this with open ai, right? It doesn't have access to all that stuff. It doesn't have access to the hundreds of thousands of hours of YouTube content that Alex EY has made since that training cutoff date.

So you'll have to find a way to do that. Now, a company that actually is doing this is DoorDash. Now, there's many companies doing this. By the way, RAG is the most popular use case for using ai. It's the most obvious and boring way to do it, but that's why most big companies are using rag, but it's often not really talked about.

It's not as sexy as building agents and things like that, but this is the stuff that companies are paying for and they're using. So DoorDash is actually using this because they have drivers out there on the road and they do need to know the company policies about things like, Hey, the ice cream melted in the car.

What should I do? They don't have a human, you can call for the hundreds of thousands or millions of drivers out there. So instead they have taken. All their policies from different countries, municipalities, all these different places, massive amount of information, right?

And they've stored it in a vector database so that way when a person, a driver, asks about what they should do with that spilled ice cream, they can quickly go in there and get a response that is grounded in actual information based on their real company policies. Give it back to the ai, and now the AI can tell you, Hey, here's your company policy.

You actually have to lick all the ice cream off the seat. That's just the DoorDash rules. Sorry we didn't make the rules, or we did actually make the rules. You're screwed, But anyway, that is a real use case for RAG and there's tons of other use cases out there. Spotify is doing it. Companies you never heard of are doing it.

A lot of AI automation agencies are building some form of rag. It is the most popular B2B use case business to business. If you don't know what B2B means.

And now we are gonna make a very, very naive poor man's version of Rag. We have this knowledge base where I've taken liberty of getting some YouTubers that I think are cool, that I think are awesome people. Primo Gen, Theo, and myself.

I mean, I think I'm pretty decent, I guess, too, but I had to find somebody, so why not me? I know me and I know what I would say about these things, so I just added me in here as well. But we have Theo Brown, Theo's a famous YouTuber and Primo Gen as well.

These guys are at the top of the YouTube tech genre. They talk a lot about coding type script, modern web applications, VIM thoughts on ai, So I structured this data in a way that an AI should be able to find it pretty easily. I put the advisor here, the topic, the idea is not really that important here, but it's just here just in case keywords. And then finally, the content. The content is what this will ultimately use in order to generate the response.

This other information is essentially to help it look up. And this is the really important thing you have to think about when you're structuring your data for a large language model. If you're saying, Hey, what does Primo think about, you know. Using Vim or something like that. Well, how is it gonna know how to find primo again, I need to somehow put that in the information here.

So the advisor primo, here are the keywords. Here's the stuff that he's talking about. Here is what he thinks about this specific topic, because if I just jammed this all into one. Massive document, it'd be a little bit hard for it to make sense of, well, which one should I look at? How do I know I should look at primo gen?

Where do I even find that if I put everything in content, for example, like Primo Gen thinks X, Y, and Z, it's gonna be a lot more difficult for that large language model to look that information up. So having a configuration like this where you have basically just an array full of object. Is an okay way to start.

This is okay. If you have like some information that's unlikely to change and you just wanna flat file and say, Hey, look this up before making a decision. And it's usually really good at digging through this kind of stuff and saying, oh, okay,

I understand that this is the name of the advisor. I understand. Here's the keywords and here's the actual content I should be using based on the user's query. So if the person says, Hey, what does Primo Gen think about Vim? Well, it should look in here and then it should give you this content, or it should use this content to make its response.

So this is a bit of an art and a science. Like you should just make it easy for the LLM to understand where to look to find the right information. And if you're not getting the responses you'd like, it's likely because the information architecture isn't right. So this is a pretty naive way to do it, but I think this is actually pretty good.

We have all the information it really needs to know to generate that response. So let's see how we can actually enable this.

So let's remove our system prompt here and say, you,

you have access to a knowledge base of coding experts. The experts are, and then we could do something. We could actually do this. And we could get all the experts here, we could make this, we wanna make this system prompt really good so it can like, dig through here really efficiently. So we could put experts equals, uh, new set and we could look in the knowledge base.

We can, let's first import the knowledge base, so import the knowledge base with type JSON. This is cool. This is a cool new thing in node js where you can get the file and then import it as JSO. So we don't have to do any weird JSON parsing or anything. We'd say, Hey, look in the knowledge base, get the advisors.

Here's all the experts. The experts are, and we could say, you know, these experts. Okay.

And we say if the question's not related to coding, do not try to answer it.

If the user is asking for an advisor that is not in the knowledge base, you should say you're not sure, not try to answer it. This keeps the scope really tight. Again, SRP, single responsibility principle, but not only that, we're adding guardrails so that way people can't ask ridiculous things like how to solve a linked list Or what does Mr. Beast think about hamburgers or something ridiculous like that.

And then lastly, we say here, here is the knowledge base. J Sify the knowledge base, because you just add a big object in here. It's not gonna. It's gonna turn. It's because if you just add a big object in here, it's not gonna be able to read that. You need to turn it into a string, right? We turn it into a string.

We say, here is your knowledge base of the advisors. Bingo. Bingo. Now we simply generate content. We say, here's the system prompt. The system prompt has all this additional context. This is that retrieval augmented generation where we kind of did the retrieval. Pro, we kind of did the retrieval manually and just kind of statically, enc coded it in here.

That's not ideal, but it's good enough for right now. And I'm gonna show you how to make this a little bit more complex and a little bit better. Tomorrow when we come back, we're gonna actually get some live data off the web and we're gonna inject that into here in the right time if we need it. But right now this is okay.

I think this is actually pretty cool. So let's go back in here. Let's see if this works. I'm gonna refresh the screen. I'm gonna say, what does Prime think about Vim? I'm gonna say Prime. I don't know if that's gonna work, but let's see if we, if we get primo again, response back in here. Hey, look at this.

Your tool should be invisible. Learn your editor deeply. Not because Vim is objectively better. It is. This is, this is pretty funny. Now, we should never just trust the large language model. We should verify that that's actually what he thinks. I'm gonna go back to the knowledge base and I'm gonna look at this.

Look at this. It says, tools should be, this is pretty cool. So like it, it directly quoted. The Primo on Vim. Very, very cool. So what does Prime think about Vim? What does Brian think about testing?

Brian says, test what matters. Not everything needs a hundred percent coverage. This is okay. I noticed that it's a little bit too singly in its single responsibility principle, so it should not just like verbatim say the thing, it should, you know, try to actually answer the question so it could, you know, we could improve this prompt

by saying you should use the knowledge base to answer this question and add more. Context to the answer if needed. do not. Just repeat the knowledge base, but use it to answer the question so we can improve this system prompt to then have a better response. Let's do this one last time to see if we get a better response this time.

Now we have something that looks a lot better. So this tells you what I think about testing based on that knowledge base. Now we have something that is getting closer and closer to a practical and useful app than just passing a message back and forth to Gemini. That's not really useful. Now we have something cool and we're gonna make this much cooler.

By getting some data from YouTube using Python tomorrow.

 

Day 4

All right. Today we're gonna be using something called CoLab. Now this is a product from Google. Basically, you can run a Python tra. Basically you can run a Python script in here without having to set up Python locally on your machine. And we're just gonna take a script that I've already written for. For you, that's gonna allow you to download transcripts from YouTube using the library, YouTube transcripts, API.

You don't need any special keys to do this. This is really cool. You can just take a video, ID pass it in, and then boom, you get the transcript. So let's start off with just, how do you set this up? First thing you're gonna wanna do is take this. This is in download transcripts, collab dot pi. Right

now you're gonna go into your CoLab. You should make an account. This is all free stuff. You can run it here. You can run it anywhere that you can run Python transcripts. If you wanna run this on your machine, feel free. It doesn't really matter .

Now in this first cell here, I'm gonna just say, Hey, install the API, and then in here we have all the logic to actually get the transcript. And the only thing that you need to do, the only thing you got to do is change the video Id. Now I'm using this video here about no JS memory from Theo Brown, and this is the id, right?

I went to a video. I look in the URL, and then I take the ID here, and then I'm gonna run this whole thing here. I'm gonna run all of these and it's going to download that. Now, in the meantime, I think it's important to talk a little bit about rag at a little bit of a lower level than what we've talked about previous days.

We've, we've enabled a very, very naive version of rag by just having a flat file, and now we're gonna add some more information in the form of a transcript. This is when things take a bit of a turn. Right Now we can be like, Hey, we actually have what this person said in a recent video. I encourage you to use videos from whoever you like.

Maybe it's me. Maybe it's Primo Gen. Maybe it's Theo. Maybe it's a completely different topic outside of here, but you can get the video IDs. You can get these transcripts, but what you're gonna probably notice, or maybe you're thinking is these transcripts can be really, really long, right? What if I wanted to have.

A thousand transcripts. What if I wanted to have this running all the time and downloading tons of transcripts? Can I just pass all that in to the Gemini API? No, you can't. You can't do that at all. And so there is a solution for doing this, which is outside the scope of this particular program here. But we do this in the Applied AI course of, but we do this in our applied AI cohort, of course.

'cause this is really important where you can use something called a vector database where you take something like a user's query, say, Hey, what does the user say about, you know, VIM, for example. You would take a really large document, right? This transcript here, and this transcript might be thousands of lines, hundreds of lines, and instead of just dumping the whole transcript into a database, what you would do is you would chunk it, you would break it up into pieces, so you break that entire document up into different pieces, 1, 2, 3, 4, a hundred pieces.

What you would do then is then transform these pieces. These are just. Texts, right? This is just text and you turn this text into a vector. The vector is a series of numbers, 512 numbers, 1,536 numbers, 3072 numbers, an amazing amount of numbers that encode and capture the meaning. Now, the way the meaning is captured is proprietary, meaning these companies don't really tell us, Hey, what does each number mean?

It's just a way to encode the meaning because a machine ultimately has to read these numbers and decide, Hey, what is the meaning here? Right? What do all these numbers mean? We might never know, right? There's 512 at the minimum, you know, 3072 at the max, or some ungodly amount of numbers that no human can really wrap their heads around.

That will basically encode capture the meaning in a series of numbers, a vector. Now when you ask, Hey, what does Primo think about? Whatever, whatever. Well, that too gets encoded into a series of numbers, right? And then in the Vector database, what it will do is then look at, hey, are there some numbers that are kind of similar to these numbers, right?

They asked about Vim. Oh, we actually have a vector that is similar to what they asked about Vim. Maybe we have five vectors that are similar to what they asked about Vim. These aren't exact matches. These aren't like keyword matches. It's like the meaning if I say, Hey, you know. If we had a vector database full of food and I said something like, tell me about peanut butter and jelly.

It might gimme back a vector that has something about peanut butter, one about jelly, one about children's lunches, one about elementary school lunches. It'll gimme back like the best X number of matches, right? Can say, Hey, uh, these are kind of close to what you said. This is why vector databases are so unique.

You don't get a single match. You might get 5, 10, 20, 30 different matches and it can look something. Like this, and it can look something like this where I have a bunch of vectors in a database. These are transcripts from my YouTube videos that I've actually uploaded into a Vector database so it can help me write more transcripts in my voice.

And this has around. And this doesn't have that many vectors in here, but here's all the vectors in here, and you can see that each one has some metadata attached to it. It has the text, right? It has the text, the title. There are 16 chunks related to this video, this YouTube id, and the vector is 512 numbers.

Long, right? If I copied the vector to the clipboard and I put it somewhere, you know, you could see this, uh, vector here. We could put it here, I guess. And just to just see what it looks like. Just in case you're curious. That's what the vector looks like, a big, long series of numbers. Right. So we take that and then if I make a question, if I a.

If I ask a question, that question would be vectorized turned into numbers, and then we would look in this space and say, Hey, what numbers are close to that one? Using some mathematical concepts like cosign, similarity dot product, basically some linear algebra stuff that you probably learned in high school, whatever that it would use at scale, and also, you know, more complex stuff under the hood that it would use to determine what vectors are close to that, and then return those back to you and then you could use those to generate a response.

Anyways, that's outside the scope of this particular five day course, but this is something we go in depth into in our applied AI cohort. Let's go back to our notebook here and see what happened here. Look at this. We saved a transcript. I go into transcripts here where it's saved, and then I can simply download this.

I will open this up. I'll copy this whole thing here. I'll go back into cursor and now I'm gonna add it here. Now, I've already done this. I've added a transcripts folder under data, and I've named this Theo, TXT, right? I have that already here. You can add this here too. The naming is gonna be important.

Again, we think about the information architecture. How are we going to have our large language model? Look up that particular transcript, how's it gonna know where to find it? If we named it something like, you know, no JS txt, that could work. But think about our use case. Our use case is we want to talk to a certain influencer about a certain thing, so we could even have Theo and then break up.

We could even have Theo as a folder potentially, and then have sub-folders about particular topics. If we really wanted to make this information architecture much more complex and really apply to a lot of different use cases, we're gonna do a much more naive way of doing this. And just say, you know, for each person we'll have maybe just one transcript, right?

Because this is not gonna be super scalable the way we're doing this. But we also have what's called a context window problem. We can't just dump this entire transcript. We can't just dump multiple transcripts. Into our system responses is gonna be way too long. A context window is essentially what is the limit of text you can dump into a chat.

You can't put the whole Bible in there. Context windows are getting larger, but they do have a limit, and it also muddies up the response if it's looking at all this information and trying to give you a good response. You want to give it as little information as it needs. You don't wanna give it way more information than it needs.

So if somebody asks about Primo, we don't want to tell them about. Theo's thoughts on node js, right? If somebody asks about Brian, we don't want to give them Theo's thoughts on node js, so we need to make some sort of logic that says, Hey, when do we. When do we add Theo's thoughts on node js? Well, we could just make sure that if the person asked about Theo that we are then giving them the node js transcript.

That is one pretty naive and simple way to do it, and that's fine to do for now. So we could just have this little check cons. Needs transcript equals the message. We'll say, Hey, if the message includes Theo, um, actually just that the message includes Theo, that's it. Uh, return. If it's true it needs the transcript, um, then we'll do Fs uh, FS sync from the FS module.

We'll import fs, I think import FS from SF file system. So we'll say, cool, if they need the transcript. And we could even do this, we could, you know, we could take that outta here and we could just make this simple. Um, if the message includes Theo, then we will read from that file and we'll give it back. If not, we'll just give an empty string, right?

Um, and we'll just put constant transcript, transcript from expert, and it'll either be an empty string or it will be whatever is in here. This is okay. I think there's obviously ways to improve this for sure. And, um, we could do this, you know, transcript, transcript for me message. So if there's a transcript, we include it.

If not just empty string, right? Not a bad way of doing this. I think this is Okay. So just to go over what's going on here. We look at the message, we say, Hey, does this message include Theo Theo's the one person that we have a transcript for? Cool. We'll read that transcript and we will add it to our system prompt.

If there's no such transcript, we simply return an empty string and we don't need to even. Worry about the transcript. So now we have the information from this transcript, and you can extend this. You could have ones from Theo, from Primo, from Brian, and you could extend this. And I would encourage you to do that.

Maybe you want to do something outside of YouTube, text sphere stuff maybe you want to do about business or knitting or sewing or sharks or whatever floats your boat, right? So you can do that and you could make this. Information architecture, even more verbose. You could have transcripts, you could have the name of the person, and then you could have their thoughts on certain topics.

And you could organize this in a way where you're only giving that particular piece to the large language model when it needs it, rather than giving all this information because you're gonna run up against that context window and you're just gonna get worse and worse results. So I think this is actually pretty decent.

Let's, let's take a look at this and see how this works. Okay. What does Theo think about node js runtime? I don't know. Let's see. Let's see what happens here. And I would even say, let's do some console logging and, and, and make sure we're actually getting that piece of text that we expect here. But let's see.

Looks like we can actually look in here. So we can look in here. And we can see text Pine Cone is a blah, blah, blah, blah, blah, blah. Let's go all the way down and let's take a look at the most recent message and see what we passed in. That's the cool part. Look at this. So blah, blah, blah, blah, blah, based on, and we, and then we have Theo's perspective on node js.

So we actually did pass in the transcript. We can see here that we passed in the entire transcript, and we can see here that we actually have something based on the provided knowledge base and transcript. This is super cool. So now we have a way to think, Hey, what does Theo think about this? Theo has so many videos that if you really wanted to do this without the help of ai, you would just be looking through his videos, non freaking stop and trying to find like, where did he say this one thing about this one thing that one time?

This is actually a pretty valuable tool, so I encourage you to extend this and add more and more and more transcripts and figure out how you can make this. Better and better by only getting the information that you want at that certain time. But essentially, this is a pretty cool example of using retrieval augmented generation with something that an open AI model, or anthropic model or grok, whatever, just doesn't have access to it.

Doesn't know what Theo said last week, or what PRI Magen said last week. Now you do and you could package this up and put it in this beautiful interface like we have here. And then you can actually have a product that you could use or other people could use that they find valuable. So now we've built something pretty cool, in my opinion.

Tomorrow though, I do wanna show you something that I think is really gonna get your Nogging jogging, right? I built a pretty cool product for an AI startup for TikTok influencers, and I wanna reveal. How that works behind the scenes, just so you have a little bit of intuition and a little bit more knowledge about what is possible and the kind of work that AI engineers are actually doing.

Because it's not really out there on YouTube land yet. There's not a lot of people that are showing what they're actually building. But I really want to, I think it's gonna be not only fun, but it's gonna help you understand, oh, that's what it really is, and give you a stronger foundation if you want to continue going down this path and the kind of work that you're likely gonna be doing.

I cannot wait. See you tomorrow.

Hey, over the last four days, you built something pretty cool and I hope you're proud of the work that you've done. And even though it might not feel that complex, which I think is kind of the secret when it comes to building these tools with AI, is that it just is software development. It's just a new type of API.

There are a couple pitfalls you want to avoid, and now maybe you've been exposed to things like vector databases, rag retrieve, augmented generation, and now you have your brain. And now and now. And now and now and now.

And now you have some other areas that you can explore to extend what you've already done. And once you extend these things, you can make some pretty cool stuff. And I'm gonna show you really briefly a project that I made, not really a project, a product that I made for a startup.

Now, this is the original beta version that was used by Rock Nation and Universal when they wanted to try to find artists based on. When they wanted to try to find, when they wanted to try to find TikTok creators, they could help them promote songs. So we'll use Bad Bunny here, and this is using a lot of the same concepts that you've learned just at a larger scale.

So basically, we ingested millions of pieces of data, stored lots of this in a Vector database, and then.

And then extract things from a user's questions in a form they fill out to understand which creators might be best for them. So for example, in the genre reggaeton, I'll give a budget of $1,200 per influencer. I'll put in Mexico and Columbia as areas where we want to reach our audience. And then I'll put lip sync pages, the types of pages.

That we want to try to get. Basically, this is a way of simply just getting some context and we'll then build a creator strategy. We'll call this, you know, test whatever. We'll build a creator strategy and while this is going on in the background. This is doing a lot of SQL queries. It's looking up things in a vector database.

It's extracting all the different information from there, and then looking at all the information we have in this vector database, putting it into the response, and then returning something that a user can actually use to help find influencers. This is not so much different than what you've built. In fact, it's just.

In fact, it's in fact, it's in fact, it's just expanding on the concepts that you've already learned. And when we go back here, this takes a while to run. Actually, this is one of the problems we had with this, but it takes a while because of doing a lot of complex operations. And then it'll finally find people that you can then pay to be part of your TikTok creator music campaign.

And then you can see, and then you can see what we get back from a, for a budget of, and then you can see what we get back for a budget of $1,200. We see the different target reach from Mexico, Argentina, we see the different creators that we can find here, and we see the prices for these creators as well, and how to find that.

We can click into their videos or whatever and go to TikTok and like learn more about them. We can go to TikTok and say, oh, who is this person here? Oh, she does. This and that, and here are some videos from her. Would she work for this campaign? Sure, why not? And then I can expand this, like increase the budget to 10 K or something like that and then it would increase the budget to 10 K.

This is the kind of really interesting stuff you can do when you create.

This is the sort of really interesting stuff you can do. Now, this is a demo version. Obviously it's not working exactly as I expect it to, which always happens during demos. But yeah, this is a real product being used by real record companies, not this particular one. This is a demo that I feel comfortable showing, not the one that's actually out in production because I've also.

Left that company since then. But again, this is the kind of stuff that people are building with this. I've built this and I helped build a supplier finder for people that work at large Fortune 500 and Fortune 100 companies to find suppliers through a very complex internet search with a team of really cracked developers, I can say.

So this stuff is hard to hire for. I also designed the engineering inter. I also designed the AI engineer interviewing process for this particular company, and you would not believe how difficult it was to find people that not only knew retrieval augmented generation, but how to build things with agents, the pitfalls, how to observe and test them, how to make sure that they.

How to make sure that these things wouldn't fail out there in the wow. There's just not a lot of people that know this stuff right now, which is why I built the Applied AI Accelerator program. It's a program that's gonna teach you not just the fundamentals, but the stuff that people are actually hiring for and help you develop an opinion.

Talk to leadership. Basically know how to promote yourself as an AI engineer within your own organization, or take those exact same skills and go to high and go to fast growth, high-paced AI startups that are desperately seeking people that know this stuff. In all reality, the stuff that you've learned over the last four days now is kind of a lot.

In fact, it's a good foundation that you can go further. And build your own product. If you really want to get into the nitty gritty and become the AI person on your team, then go to, then I'd highly encourage you to join a, then I'd highly encourage you to join our A. Then I'd highly encourage you to join the Applied AI Accelerator.

This is a program where we go in depth where there's humans in the loop, where you're talking with me and other senior engineers and other guest speakers that we have come in monthly and then actually find. To learn and see how people that are really building these systems work through them. I don't know of any other program like this right now, and I don't know if this window is gonna be open forever.

Right? Because at some point this kind of stuff will become table stakes in the same way that knowing cloud service providers like Versal or AWS, or even knowing things like React kind of just became expected. I do see that in the near future, knowing things like how to build agents, how to structure a rag database.

How to structure a vector database, how to add observability and evaluations to your agents. I think all these things are gonna become table stakes as more and more companies build out agents. You may think the market is saturated right now, but in reality, there's very few companies that are building these the right way and even fewer developers that know this stuff.

At all. So whether or not you go any further, I hope you just keep that in mind that hey, you have a really interesting skillset just with this tiny bit of information right here that a lot of developers aren't gonna know about. So share this with your company. Share this with your teammates. Tell them, Hey, here's some ways we can think about doing this.

Here's how Rack can work for us. Maybe we don't even need a vector database. Maybe we actually can just do like kind of this naive way of doing it for this small use case. Do a hackathon at work where you can introduce and socialize these kinds of ideas. This is how you gain a lot of leverage in this very interesting time because there are people that are working on how do I get better at prompting these tools and just writing more code.

And then there are people that are thinking, how do I make the infrastructure and the products that are gonna sell and make our company a lot of money, and knowing how to do this. Is how you get into that level up here. While most developers, the majority are gonna be operating down here, I think this time has a lot of leverage, a lot of opportunity, even though there's a lot of fear and uncertainty at the same time.

Anyway, rant over. I sincerely appreciate you taking the time to do this program. If you have any feedback or you want to share what you've done, you can reach out directly to me on LinkedIn or you can just email me@brianatparity.io. 'cause I would genuinely like to see. What you've built. If you've extended this or you figured out how to use a vector database or you're confused about some aspect to this, just let me know because I think it'd be really cool to see what you're building.

Anyway, hope you had a great time doing this. I certainly had a fun time walking through this and making this beautiful as 400 inspired screen and hopefully I'll see you around in the future. Have a good one. Bye-bye.
