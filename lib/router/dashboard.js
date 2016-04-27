Router.route('/', {
  name: 'dashboard',
  data: function () {
    return Meteor.subscribe("Channels");
    return Meteor.subscribe("Users");
  }
});
