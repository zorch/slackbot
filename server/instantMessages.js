import  SlackNode  from 'slack-node';
import slack from 'slack/client';
var apiToken = "xoxb-35992647746-BXVnspq906WcNcdIdKHLKaiM";
var slackNode = new SlackNode(apiToken);
bot = {}; 
Meteor.methods({
  	'send.message': function(obj) {
        
  		console.log(obj);
   		
  	},
  	'start.app': function(){
		slackNode.api("users.list", function(err, response) {
			if(err)
				return console.log(err);
			 
			  		var RtmClient = slack.RtmClient
					var rtm = new RtmClient(apiToken);//, {logLevel: 'debug'}

					// Initializing slack bot
					rtm.start();

					var clientEvents = slack.CLIENT_EVENTS;
					var rtmEvents = slack.RTM_EVENTS;
					// console.log(rtmEvents);
					rtm.on(rtmEvents.MESSAGE, function (m) {
						if (m.bot_id) return;
						slackNode.api('chat.postMessage', {
							text: m.text,
							username:'dailyUpdates',
							channel: m.channel
						}, function(err, response){
							// console.log(response);
						});
					});

					// New Member joined Team
					rtm.on(rtmEvents.TEAM_JOIN, function (u) {
						if (u.is_bot) return;
						slackNode.api('chat.postMessage', {
							text: u.text,
							username:'dailyUpdates',
							channel: u.channel
						}, function(err, response){
							console.log(response);
						});
					});

					// When user its correctly connected to server
					rtm.on(rtmEvents.HELLO, function (u) {
						if (u.is_bot) return;
						slackNode.api('chat.postMessage', {
							text: u.text,
							username:'dailyUpdates',
							channel: u.channel
						}, function(err, response){
							console.log(response);
						});
					});
		});

		
  	}
})