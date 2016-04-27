Meteor.publishComposite("Users", function () {
    return {
    	find: function() {
      		return Users.find({});
    	}
    }
  });