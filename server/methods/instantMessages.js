import  SlackNode  from 'slack-node';
import slack from 'slack/client';
var apiToken = "xoxb-35992647746-BXVnspq906WcNcdIdKHLKaiM";
var slackNode = new SlackNode(apiToken);

Meteor.methods({
  	'save.all': function(obj) {
        
  		slackNode.api("users.list",  Meteor.bindEnvironment(function(err, user) {
  			_.each(user.members, function(u){
	  			if(!u.is_bot && u.id != 'USLACKBOT' && Users.find( { id: u.id } ).count() === 0)
					Users.insert({id: u.id, name: u.name, active: false });
  			})
  			
		}));

		slackNode.api("channels.list",  Meteor.bindEnvironment(function(err, channel) {
  			_.each(channel.channels, function(c){
	  			if(!c.is_bot && Channels.find( { id: c.id } ).count() === 0)
					Channels.insert({id: c.id, name: c.name, active: false });
  			})
  			
		}));
   		
  	},
  	'start.app': function(){
		var RtmClient = slack.RtmClient
		var rtm = new RtmClient(apiToken);//, {logLevel: 'debug'}

		// Initializing slack bot
		rtm.start();

		var clientEvents = slack.CLIENT_EVENTS;
		var rtmEvents = slack.RTM_EVENTS;
		
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
  	}
})