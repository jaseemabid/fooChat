/*!
 * All views go here in fooChat.Views namespace
 */

fooChat.Views = {
	ContactView: B.View.extend({
		tagName: "li",
		model: fooChat.Models.Contact,
		// Pass the contents of the contact template through a templating
		// function, cache it for a single contact
		template: $('#template-contact').html(),
		// Re-render the contact entry
		events: {
			"click": "filterMessage"
		},
		render: function () {
			$(this.el).html(this.template.supplant(this.model.toJSON()));
			return this;
		},
		initialize: function () {
			this.model.bind('change', this.render, this);
			this.model.bind('destroy', this.remove, this);
		},
		filterMessage: function () {
			//console.log("Filtering for ", this.model.get('username'));
			fooChat.activeUser.set('from', this.model.get('username'));
		}
	}),
	MessageView: B.View.extend({
		tagName: "div",
		className: "well messageBox",
		model: fooChat.Models.Message,
		template: $('#template-message').html(),
		// Re-render the contact entry
		render: function () {
			console.log("message view render");
			$(this.el).html(this.template.supplant(this.model.toJSON()));
			return this;
		},
		remove: function () {
			console.log($(this.el));
			$(this.el).slideUp();
			return this;
		},
		initialize: function () {
			this.model.bind('change', this.render, this);
			this.model.bind('destroy', this.remove, this);
			fooChat.messages.bind('reset', this.remove, this);
			fooChat.activeUser.bind('change:from', function () {
				fooChat.messages.reset();
				fooChat.messages.initialize([], fooChat.activeUser);
				fooChat.messages.fetch();
			}, this);
		}
	}),
	LoginView: B.View.extend({
		tagName: "form",
		className: "well form-vertical",
		id: "loginForm",
		template: $('#template-login').html(),
		events: {
			"click button": "login"
		},
		initialize: function () {
			this.render();
		},
		login: function (e) {
			fooChat.activeUser.set('username', this.$el.find('#username').val());
			fooChat.activeUser.set('password', this.$el.find('#password').val());
			fooChat.activeUser.set('id', null); // prevent PUT for POST
			fooChat.activeUser.login();
		},
		render: function () {
			$('ul#dashBoard').remove();
			$('div#sideBar').html('');
			$("div#messageBox").html('').append($(this.el).html(this.template.supplant({})));
			return this;
		}
	}),
	RegisterView: B.View.extend({
		tagName: "form",
		className: "well form-vertical",
		id: "registerForm",
		template: $('#template-register').html(),
		events: {
			"click button": "register"
		},
		initialize: function () {
			this.render();
		},
		register: function (e) {
			fooChat.activeUser.set('fullname', this.$el.find('#email').val());
			fooChat.activeUser.set('username', this.$el.find('#username').val());
			fooChat.activeUser.set('password', this.$el.find('#password').val());
			fooChat.activeUser.set('email', this.$el.find('#email').val());
			fooChat.activeUser.set('id', null); // prevent PUT for POST
			fooChat.activeUser.register();
		},
		render: function () {
			$('ul#dashBoard').remove();
			$('div#sideBar').html('');
			$("div#messageBox").html('').append($(this.el).html(this.template.supplant({})));
			return this;
		}
	}),
	AddContactView: B.View.extend({
		tagName: "form",
		className: "well form-search",
		template: $('#template-addContact').html(),
		events: {
			"keypress input#newContact": "addContact"
		},
		initialize: function () {
			this.render();
		},
		addContact: function (e) {
			if (e.keyCode !== 13) {
				return;
			}
			e.preventDefault();
			var dom = this.$el.find('input#newContact');
			if (!dom.val()) {
				return;
			}
			fooChat.contacts.create({
				username: dom.val()
			});
			dom.val('');
		},
		render: function () {
			$("div#sideBar").append($(this.el).html(this.template.supplant({})));
			return this;
		}
	}),
	AddMessageView: B.View.extend({
		tagName: "textarea",
		className: "input-xlarge",
		id: "newMessage",
		attributes: {
			"rows": "3"
		},
		events: {
			"keypress": "addMessage"
		},
		initialize: function () {
			this.render();
		},
		addMessage: function (e) {
			if (e.keyCode !== 13) {
				return;
			}
			e.preventDefault();
			if (!this.$el.val()) {
				return;
			}
			fooChat.messages.create({
				"message": this.$el.val(),
				"from": {
					"username": fooChat.activeUser.get('username'),
					"uid": fooChat.activeUser.get('uid')
				},
				to : {
					"username" : fooChat.activeUser.get('from')
				}
			});
			this.$el.val('');
		},
		render: function () {
			$("div#messageBox").html('').append($(this.el));
			return this;
		}
	}),
	AppView: B.View.extend({
		initialize: function () {

			fooChat.contacts.bind('add', this.addOneContact, this);
			fooChat.contacts.bind('reset', this.addAllContact, this);
			fooChat.contacts.bind('all', this.render, this);
			fooChat.contacts.fetch();

			new fooChat.Views.AddContactView();
			new fooChat.Views.AddMessageView();

			fooChat.messages.bind('add', this.addOneMessage, this);
			fooChat.messages.bind('reset', this.addAllMessage, this);
			fooChat.messages.bind('all', this.render, this);
			fooChat.messages.fetch();
		},
		addOneContact: function (contact) {
			var view = new fooChat.Views.ContactView({
				model: contact
			});
			$('ul#contactsList').append(view.render().el);
		},
		addAllContact: function () {
			$('div#sideBar').prepend($('<ul>').attr({
				id: 'contactsList'
			}).addClass('nav nav-tabs nav-stacked'));
			fooChat.contacts.each(this.addOneContact);
		},
		addOneMessage: function (message) {
			var view = new fooChat.Views.MessageView({
				model: message
			});
			if (fooChat.messages.length > 5) {
				fooChat.messages.at(0).destroy();
			}
			$('#newMessage').before(view.render().el);
			$('time.timeago').timeago();
		},
		addAllMessage: function () {
			fooChat.messages.each(this.addOneMessage);
		}

	}),
	TopBarView: B.View.extend({
		tagName: "div",
		className: "navbar",
		template: $('#template-topBar').html(),
		events: {},
		initialize: function () {
			this.model = this.options;
			this.model.bind('change', this.render, this);
			this.render();
		},
		render: function () {
			$('div.navbar').remove();
			$("body").prepend($(this.el).html(this.template.supplant(this.model.toJSON())));
			return this;
		}
	})
};
