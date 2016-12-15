// copy of Duyen's main.js file.

var Botkit = require('botkit')
var slackToken = process.env.SLACK_TOKEN
var $ = require('jquery'); //npm install jQuery
var axios = require('axios')

// var Witbot = require('witbot')
// var witToken = process.env.WIT_TOKEN
// var witbot = Witbot(witToken)

// todo add custom modules for NLP - wit.ai

var controller = Botkit.slackbot({
    // reconnects to Slack RTM after failed connection
    retry: Infinity,
    debug: false
    // verbose logging
    // logLevel: 7
})

// connect the bot to a stream of messages + added 'send_via_rtm: true' to reenable bot is typing.
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

  bot.replyWithTyping(message,'How can I be of service, beep.');

});

// testing to see if bot types
//bot._send({ type: "typing", channel: message.channel });
controller.hears(['busy'],['direct_message','direct_mention','mention'],function(bot,message) {

  // bot.reply(message,'typing...');
  bot.replyWithTyping(message,'How can I be of service, now?');
});


controller.hears(['meetup'],['direct_message','direct_mention','mention'],function(bot,message) {

  bot.replyWithTyping(message,'getting that for you now...')
//
// // make AJAX request to meetup.com
  var settings = 'https://api.meetup.com/find/events?photo-host=public&sig_id=213030423&fields=node.js&sig=7d8006176172cdd0d15c32eb983a08cdecf59fed';
//  {
    //https://api.meetup.com/find/groups?photo-host=public&page=5&text=ruby&sig_id=213030423&sig=57a89afda3eacca17d99c58187ff73b692871527
// working searh for the text 'ruby'
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

//var querystring = require('querystring');
//axios.post('http://something.com/', querystring.stringify({ foo: 'bar' });

// // //https://api.meetup.com/find/groups?zip=11211&radius=1&category=25&order=members&&sign=true
// // // make an AJAX request to meet up api
    // var apiCall = function (settings) {
      axios.get(settings)
      .then(function(res) {
    //
        // var meetups = res.results; //results is the
        console.log(res);

        // meetups.forEach(function(meetup) {
        //
        //   var $row = $('<h2>').append($('<a>') // create an a tag
        //   .attr('target', '_blank')  // adding attributes to the a tag
        //   .attr('href', 'http://www.imdb.com/title/' + movie.imdbID)  // forming the link
        //   .text(movie.Title)); // create an a tag with text of movie title in it.
        //
        //   $('#list').append($row)
        //
        // })
      })
      .catch(function (error) {
      console.log(error);
      });
    // };
    // apiCall(settings);
});

// details to grab from meetup searches: maybe the first 5 indexes[0...4]
// // [{
//   "time":1481787000000, //time is in seconds from 1st Jan 1970 (Unix time)
//   "group":{
//   "name":"St Kilda 3182"
//   },
//   "link":"https://www.meetup.com/St-Kilda-3182/events/230764040/"
//   }] Use the name with the MU page to create a clickable link, and date of the next MU.

// Wit.ai integration code example:
// controller.hears('.*', 'direct_message,direct_mention', function (bot, message) {
//   witbot.process(message.text, bot, message)
// });
// witbot.hears('hi', 0.5, function (bot, message, outcome) {
//   bot.reply(message, 'Hi there!')
// });

// // on today's menu
// controller.hears(['lunch', 'menu'],['direct_message','direct_mention','mention'],function(bot,message) {
//
//   bot.reply(message,'The menu for today is Mexican burritos.');
//
// });
