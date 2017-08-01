
var Botkit = require('botkit')
var slackToken = process.env.SLACK_TOKEN
var $ = require('jquery'); //npm install jQuery
var axios = require('axios')
const Storage = require('./bot_storage');

// var Witbot = require('witbot')
// var witToken = process.env.WIT_TOKEN
// var witbot = Witbot(witToken)

// todo add custom modules for NLP - wit.ai
// Also need to host this online(Beep Boop, is an option) so anyone can use it.

var controller = Botkit.slackbot({
    // reconnects to Slack RTM after failed connection
    retry: Infinity,
    debug: false
    // verbose logging
    // logLevel: 7
})

// connect the bot to a stream of messages + added 'send_via_rtm: true' to re-enable bot is typing.
controller.spawn({
   token: slackToken,
   send_via_rtm: true
  }).startRTM(function(err) {
  if (err) {
    throw new Error('Error connecting to slack: ', err)
  }
  console.log('Connected to slack');
});

// bot listens to...
controller.hears(['hello'],['direct_message','direct_mention','mention'],function(bot,message) {

  bot.replyWithTyping(message,`Hi! :wave: how can I be of service, <@${message.user}>?`);

});

// testing to see if bot types
//bot._send({ type: "typing", channel: message.channel });
controller.hears(['busy'],['direct_message','direct_mention','mention'],function(bot,message) {

  // bot.reply(message,'typing...');
  bot.replyWithTyping(message,`Yes, <@${message.user}> I am very busy, but I can always make time for you:grinning:`);
  console.log(message.user);
});


controller.hears(['meetup'],['direct_message','direct_mention','mention'],function(bot,message) {
// first initiate meetup seach

  bot.replyWithTyping(message,'OK, what keyword would you like to search for?')
});

controller.hears(['css'],['direct_message','direct_mention','mention'],function(bot,message) {
// 2nd grab search keyword prams

  bot.replyWithTyping(message,'OK, around which Postcode should I search?')
});

controller.hears(['3000'],['direct_message','direct_mention','mention'],function(bot,message) {
// 3rd grab zip/postcode - default is 5 miles of that postcode

  bot.reply(message,'getting that for you now...')

// 4th display the first 5 search results(or less)

        bot.replyAndUpdate(message,{ "attachments" : [
              {
                "color": "#ed1c40",
                "pretext": "Top 5 meet-ups: Keyword: css, within 5 miles of Melbourne",
                "author_name": "1",
                "title": "MelbCSS", //"name":
                "title_link": "https://www.meetup.com/MelbCSS/", // "link":
                "thumb_url" : "http://photos1.meetupstatic.com/photos/event/7/c/7/6/thumb_415231862.jpeg", //"group_photo":{ "thumb_link":
                "text": "Next Meet-up: Wed Feb 1, 6:00 PM"
            	},{
                "color": "#ed1c40",
                "author_name": "2",
                "title": "Melbourne Compass & Sass Group",
                "title_link": "https://www.meetup.com/Melbourne-Compass-Sass-Meetup/",
                "thumb_url" : "http://photos2.meetupstatic.com/photos/member/4/e/f/4/thumb_161420212.jpeg",
                "text": "Next Meet-up: TBA"
            	},{
                "color": "#ed1c40",
                "author_name": "3",
                "title": "Ruby and Rails Melbourne",
                "title_link": "https://www.meetup.com/Ruby-On-Rails-Oceania-Melbourne/",
                "thumb_url" : "http://photos4.meetupstatic.com/photos/event/2/c/3/a/thumb_271451322.jpeg",
                "text": "Next Meet-up: Wed Jan 11, 6:00 PM"
            	},{
                "color": "#ed1c40",
                "author_name": "4",
                "title": "Female Coders Lab (Melbourne)",
                "title_link": "https://www.meetup.com/Female-Coders-Lab-Melbourne/",
                "thumb_url" : "http://photos3.meetupstatic.com/photos/event/3/d/a/9/thumb_440055785.jpeg",
                "text": "Next Meet-up: Thu, Jan 12, 2017 6:00 PM"
            	},{
                "color": "#ed1c40",
                "author_name": "5",
                "title": "Women Who Code Melbourne",
                "title_link": "https://www.meetup.com/Women-Who-Code-Melbourne/",
                "thumb_url" : "http://photos3.meetupstatic.com/photos/event/b/7/4/c/thumb_431686924.jpeg",
                "text": "Next Meet-up: TBA"
            	  }
            ]})});

//
// make AXIOS request to meetup.com
//   var settings = 'https://api.meetup.com/find/groups?photo-host=public&zip=3000&page=5&text=css&country=australia&sig_id=213030423&radius=5&sig=587a5330ff0818f016888e69fe29791eaf28b7f3';
//  {
//     //https://api.meetup.com/find/groups?photo-host=public&page=5&text=ruby&sig_id=213030423&sig=57a89afda3eacca17d99c58187ff73b692871527
// working search for the text 'ruby'
//    baseURL: 'https://api.meetup.com/',
//    url: "/find/groups",  // required
//   data: {
//         zip: '11211',
//         radius: '1',
//         category: '25',
//         order: 'members',
//         sig_id: '213030423',
//         sig: '37c9d3f7211569dbf5599b620ba6eefb88794478'
//       }, // added Authed Signed URL.
//   method: 'get',  // default optional
//   dataType: 'json'  // usually auto detected
// }
//
// var querystring = require('querystring');
// axios.post('http://something.com/', querystring.stringify({ foo: 'bar' });
//
// https://api.meetup.com/find/groups?zip=11211&radius=1&category=25&order=members&&sign=true
//  make an AJAX request to meet up api
// var apiCall = function (settings) {
//       axios.get(settings).then(function(res) {
//         var firstName = res[0]value


        // console.log(results);

        // var meetups = res.results; //results is the
        // console.log(res);

        // colour of meetup 'Red' #ed1c40
        // meetups.forEach(function(meetup) {
        //
        //   var $row = $('<h2>').append($('<a>') // create an a tag
        //   .attr('target', '_blank')  // adding attributes to the a tag
        //   .attr('href', 'http://)  // forming the link
        //   .text(movie.Title)); // create an a tag with text of movie title in it.
        //
        //   $('#list').append($row)
        //
        // })

//     }).catch(function (error) {
//           console.log(error);
//     });
    // apiCall(settings);
// details to grab from meetup searches: maybe the first 5 indexes[0...4]
// https://api.meetup.com/find/groups?photo-host=public&zip=3000&page=5&text=css&country=australia&sig_id=213030423&radius=5&sig=587a5330ff0818f016888e69fe29791eaf28b7f3
// [
//    {
//   "next_event":{
//    "time":1484118000000
//    } - time is in seconds from 1st Jan 1970 (Unix time)
//   "name":"St Kilda 3182"
//   "link":"https://www.meetup.com/St-Kilda-3182/events/230764040/"
//   }


//  ] Use the name with the MU page to create a clickable link, and date of the next MU.

// Wit.ai integration code example:
// controller.hears('.*', 'direct_message,direct_mention', function (bot, message) {
//   witbot.process(message.text, bot, message)
// });
// witbot.hears('hi', 0.5, function (bot, message, outcome) {
//   bot.reply(message, 'Hi there!')
// });
