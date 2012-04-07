/*!
 * All models go here in fooChat.Models namespace
*/

var now = (new Date()).toString();

fooChat.Models = {
	ActiveUser : Backbone.Model.extend({
		url: '/api/login',
		defaults : {
			uid : 0,
			fullname : 'to fooChat', // UI stuff :)
			username : 'foobar',
			hash : 0
		},
		initialize : function () {
			if(!this.get('uid')){
				console.log("do login stuff");
			}
		}
	}),
	Contact : Backbone.Model.extend({
		// Default attributes for the contact
		url : '/api/contacts/new',
		defaults: {
			username : "fooBar"
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
			timestamp: now
		},
		initialize: function () {
			var hash = Contacts.findHash(this.get('from'));
			this.set('hash',hash);
		}
	})
};
