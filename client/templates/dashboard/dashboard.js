
Template.dashboard.onCreated(function helloOnCreated() {
  // counter starts at 0
    Meteor.call('save.all', {}, function(err){
    	if(err)
    		console.log(err);
    })

});

Template.dashboard.helpers({
  Channels: function(){
    return Channels.find().fetch();
  },
  Users: function(){
    return Users.find().fetch();
  }
});

Template.dashboard.events({
  // 'click button'(event, instance) {
  //   // increment the counter when button is clicked
  //   instance.counter.set(instance.counter.get() + 1);
  // },
});
