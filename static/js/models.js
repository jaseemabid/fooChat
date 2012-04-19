/*!
 * All models go here in fooChat.Models namespace
 */

var now = (new Date()).toString();

fooChat.Models = {
	ActiveUser: B.Model.extend({
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
			this.url = '/api/user/login/';
			this.save("foo", "bar", {
				"success": function () {
					localStorage["session"] = JSON.stringify(fooChat.activeUser.toJSON());
				}
			});
		},
		register: function () {
			this.url = '/api/user/register/';
			this.save("foo", "bar", {
				"success": function (response) {
					if (response.get('success') === "true" || response.get('success') === true) {
						fooChat.appRouter.navigate('/login', true);
					}
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
			type: "message",
			message: "fooBar message",
			from: {
				"username": "",
				"uid": "0"
			},
			to: {
				"username": "",
				"uid": "0"
			},
			timestamp: (new Date()).getTime(),
			read: false
		},
		initialize: function () {
			var hash = fooChat.contacts.findHash(this.get('from')) || fooChat.activeUser.get('hash');
			this.set('hash', hash);
		}
	})
};
