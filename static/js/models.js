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
		initialize: function () {

			if (this.get('uid') === 0 && localStorage["session"]) {
				var model = JSON.parse(localStorage["session"]);
				console.log("local storage model");
				console.log(model);
				this.set(model);
			}

		},
		login: function () {
			console.log("login with model uid : ");
			console.log(this.get('uid'));
			this.save("foo", "bar", {
				"success": function () {
					console.log("model save callback");
					localStorage["session"] = JSON.stringify(fooChat.activeUser.toJSON());
				}
			});
		},
		logout: function () {
			this.set(this.defaults);
			console.log("model logout");
			localStorage.clear();
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
