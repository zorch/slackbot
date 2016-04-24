// import { Meteor } from 'meteor/meteor';
// import  SlackNode  from 'slack-node';
// import slack from 'slack/client';
// // {
// //    token: 'xoxb-35992647746-BXVnspq906WcNcdIdKHLKaiM', // Add a bot https://my.slack.com/services/new/bot and put the token
// //    name: 'dailyupdates'
// // }
// Meteor.startup(function() {
        
//   //       console.log(Meteor.settings);
//         var apiToken = "xoxb-35992647746-BXVnspq906WcNcdIdKHLKaiM";
//         var slackNode = new SlackNode(apiToken);

//         var apiToken = "xoxb-35992647746-BXVnspq906WcNcdIdKHLKaiM";
//         var slackNode = new SlackNode(apiToken);
//         console.log('slacknode', slackNode);

// 		slackNode.api("users.list", function(err, response) {
// 		  console.log('yeap');
// 		});

		

// 		// Initilizing Slack
// 		var token =  'xoxb-35992647746-BXVnspq906WcNcdIdKHLKaiM';
// 		var RtmClient = slack.RtmClient
// 		var rtm = new RtmClient(token);//, {logLevel: 'debug'}
// 		var bot;
// 		rtm.start();
// 		// Initializing slack

// 		var clientEvents = slack.CLIENT_EVENTS;
// 		var rtmEvents = slack.RTM_EVENTS;
// 		console.log(rtmEvents);
 
// 		rtm.on('loggedIn', function(user, team) {
// 		    bot = user;
// 		    console.log("Logged in as " + user.name
// 		        + " of " + team.name + ", but not yet connected");
// 		});
// 		console.log(rtmEvents.MESSAGE);
// 		rtm.on(rtmEvents.MESSAGE, function (message) {
// 			if (message.user == bot.id) return;
// 			slackNode.api('chat.postMessage', {
// 			  text: message.text,
// 			  username:'zorchBoot',
// 			  channel: message.channel
// 			}, function(err, response){
// 			  console.log(response);
// 			});
// 		});
//     });