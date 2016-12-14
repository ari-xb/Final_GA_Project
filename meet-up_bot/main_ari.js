// copy of Duyen's main.js file.

var Botkit = require('botkit')
var slackToken = process.env.SLACK_TOKEN
var $ = require('jQuery'); //npm install jQuery
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

// connect the bot to a stream of messages
controller.spawn({
  token: slackToken
  }).startRTM(function(err) {
  if (err) {
    throw new Error('Error connecting to slack: ', err)
  }
  console.log('Connected to slack');
});

// bot listens to...
controller.hears(['hello'],['direct_message','direct_mention','mention'],function(bot,message) {

  bot.reply(message,'How can I be of service, beep.');

});

controller.hears(['meetup'],['direct_message','direct_mention','mention'],function(bot,message) {

  bot.reply(message,'getting that for you now...');

});
//
// // make AJAX request to meetup.com
// var settings = {
//   url: 'https://api.meetup.com',  // required
//   data: { zip: 11211,
//         radius: 1,
//         category: 25,
//         order: members,
//         sign: true }, // to go after the query string '?s='
//   method: '/find/groups',  // default optional
//   datatype: 'json'  // usually auto detected
// }
// //https://api.meetup.com/find/groups?zip=11211&radius=1&category=25&order=members&&sign=true
// // make an AJAX request to meet up api
// $.ajax(settings).done(function(res) {
//
//   var meetups = res.results; //results is the
//   console.log(meetups);
//
//   // meetups.forEach(function(meetup) {
//   //
//   //   var $row = $('<h2>').append($('<a>') // create an a tag
//   //   .attr('target', '_blank')  // adding attributes to the a tag
//   //   .attr('href', 'http://www.imdb.com/title/' + movie.imdbID)  // forming the link
//   //   .text(movie.Title)); // create an a tag with text of movie title in it.
//   //
//   //   $('#list').append($row)
//   //
//   // })
// });

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
//
// // user confirms
// controller.hears(['yes', 'confirm'],['direct_message','direct_mention'],function(bot,message) {
//
//   bot.reply(message,'Mexican burritos on the way ;)');
//   // TODO add user to the list
//
// });
//
// // user declines
// controller.hears(['no'],['direct_message','direct_mention'],function(bot,message) {
//
//   bot.reply(message,'Perhaps you can join us tomorrow.');
//   // TODO remove user from the list
//
// });
