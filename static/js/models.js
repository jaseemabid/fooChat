/*!
 * All models go here in fooChat.Models namespace
 */

var now = (new Date()).toString();

fooChat.Models = {
	ActiveUser: B.Model.extend({
		url: '/user/login/',
		defaults: {
			uid: 0,
			fullname: "to fooChat",
			email: "",
			password: "",
			username: 'foobar',
			hash: 0
		},
		initialize: function () {},
		login : function() {
			console.log("uid is");
			console.log(this.get('uid'));
			if(this.get('uid') === 0) {
				this.save();
			}
		},
		logout : function() {
			this.set(this.defaults);
		} 
	}),
	Contact: B.Model.extend({
		// Default attributes for the contact
		url: '/contacts/new/',
		defaults: {
			username: "fooBar"
		},
		initialize: function () {}
	}),
	Message: B.Model.extend({
		url: '/message/new/',
		// Default attributes for the contact
		defaults: {
			// Ensure that each photo created has an `src`.
			message: "fooBar message",
			from: "chatBot",
			timestamp: now
		},
		initialize: function () {
			var hash = fooChat.contacts.findHash(this.get('from')) || fooChat.activeUser.get('hash');
			this.set('hash', hash);
		}
	})
};
