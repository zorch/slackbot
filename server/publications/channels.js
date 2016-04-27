Meteor.publishComposite("Channels", function () {
    return {
    	find: function() {
      		return Channels.find({});
    	}
    }
  });