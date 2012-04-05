/*!
 * All models go here in fooChat.Models namespace
*/

var now = (new Date()).toString();

fooChat.Models = {
	Contact : Backbone.Model.extend({
		// Default attributes for the contact
		defaults: {
			fullName : "fooBar",
			hash: "fooBar"
		},
		initialize: function () {
		}
	}),
	Message : Backbone.Model.extend({
		// Default attributes for the contact
		defaults: {
			// Ensure that each photo created has an `src`.
			msg : "fooBar message",
			from: "chatBot",
			hash: "00000000000000000000000000000000",
			timestamp: now
		},
		initialize: function () {
			var hash = Contacts.findHash(this.get('from'));
			this.set('hash',hash);
		}
	})
};
