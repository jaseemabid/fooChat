/*!
 * All models go here in fooChat.Models namespace
 */

var now = (new Date()).toString();

fooChat.Models = {
	ActiveUser: B.Model.extend({
		url: '/api/user/login/',
		defaults: {
			uid: 0,
			fullname: "to fooChat",
			email: "",
			password: "",
			username: "",
			hash: 0,
			from: "",
		},
		initialize: function () {

			if (this.get('uid') === 0 && localStorage["session"]) {
				var model = JSON.parse(localStorage["session"]);
				this.set(model);
			}

		},
		login: function () {
			this.save("foo", "bar", {
				"success": function () {
					console.log("model save callback");
					localStorage["session"] = JSON.stringify(fooChat.activeUser.toJSON());
				}
			});
		},
		logout: function () {
			this.set(this.defaults);
			localStorage.clear();
		}
	}),
	Contact: B.Model.extend({
		// Default attributes for the contact
		url: '/api/contacts/new/',
		defaults: {
			username: "fooBar"
		},
		initialize: function () {}
	}),
	Message: B.Model.extend({
		url: '/api/message/new/',
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
