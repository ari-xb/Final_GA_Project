# FINAL GA PROJECT - Slack Meet-up Bot

![alt text](http://i.imgur.com/klFxsAu.png "Slack meetup bot screen shot")

Have you been at work and wondered what meet-ups might be on? Well what if you could check without leaving slack? Introducing the @meet-up_bot for Slack.

|In JavaScript first I had to write out possible conversations with the bot and it's responses. Then grab input data from the user to use in the Meet-up API call to run a search. Once the API response is received then to display the first 5 results and only relevant data from the JSON file. The data is displayed using Slack's inbuilt 'attachments' feature, which has limited options and a set layout.|
| :------------------------------------:|
| [User stories](https://) |
| [Wireframes](https://) |
| Node.js (To use the Bot-Kit NPM, made things easier) |
|Beep Boop (Hosting of the Bot) |
|Meetup API (Data to display search results)|
|Slack RTM (Front End Interaction with the Bot)|
|Slack API (Integration)|
|JavaScript (To write the Bot app)|

Issues:
The connection to the Meet-up API is not working every time.
Unresolved (NLP) Natural Language Processing with Wit.ai.

Future features:
Change the search radius(currently 5 miles)
(NLP) Natural Language Processing with Wit.ai

Installation instructions:

Invite the bot to your Slack channel with /invite @meet-up_bot
Simply type the keywords Hello, Busy, or Meetup.
When you type 'meetup', just follow the prompts to run a search.
