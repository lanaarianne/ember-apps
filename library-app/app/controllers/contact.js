import Ember from 'ember';

export default Ember.Controller.extend({

  isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isMessageEnoughLong: Ember.computed.empty('message'),
  isNotMessageEnoughLong: Ember.computed.not('isMessageEnoughLong'),

  isValid: Ember.computed.and('isValidEmail', 'isNotMessageEnoughLong'),

  actions: {
    sendMessage: function() {
      var email = this.get('emailAddress');
      var message = this.get('message');

      alert('Sending your message in progress... ');

      var responseMessage = 'To: ' + email + ', Message: ' + message;
      this.set('responseMessage', responseMessage);
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }
});
