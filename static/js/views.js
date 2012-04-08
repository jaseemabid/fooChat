/*!
 * All views go here in fooChat.Views namespace
 */

fooChat.Views = {
	ContactView : B.View.extend({
		tagName: "li",
		model: fooChat.Models.Contact,
		// Pass the contents of the contact template through a templating
		// function, cache it for a single contact
		template: $('#template-contact').html(),
		// Re-render the contact entry
		render: function () {
			$(this.el).html(this.template.supplant(this.model.toJSON()));
			return this;
		},
		initialize: function () {
			this.model.bind('change', this.render, this);
			this.model.bind('destroy', this.remove, this);
		}
	}),
	MessageView : B.View.extend({
		tagName: "div",
		className : "well messageBox",
		model: fooChat.Models.Message,
		template: $('#template-message').html(),
		// Re-render the contact entry
		render: function () {
			$(this.el).html(this.template.supplant(this.model.toJSON()));
			return this;
		},
		initialize: function () {
			this.model.bind('change', this.render, this);
			this.model.bind('destroy', this.remove, this);
		}
	}),
	AddContactView : B.View.extend({
		tagName : "form",
		className : "well form-search",
		template : $('#template-addContact').html(),
		events : {
			"keypress input#newContact" : "addContact"
		},
		initialize: function () {
			this.render();
		},
		addContact : function(e) {
			if (e.keyCode != 13) return;
			e.preventDefault();
			var dom = this.$el.find('input#newContact');
			if (! dom.val() ) return;
			fooChat.contacts.create({username: dom.val()});
			dom.val('');
		},
		render: function () {
			$("div#sideBar").append($(this.el).html(this.template.supplant({})));
			return this;
		}
	}),
	AppView : B.View.extend({
		initialize: function () {

			fooChat.contacts.bind('add', this.addOneContact, this);
			fooChat.contacts.bind('reset', this.addAllContact, this);
			fooChat.contacts.bind('all', this.render, this);
			fooChat.contacts.fetch();

			var addContactInput = new fooChat.Views.AddContactView();

			fooChat.messages.bind('add', this.addOneMessage, this);
			fooChat.messages.bind('reset', this.addAllMessage, this);
			fooChat.messages.bind('all', this.render, this);
			fooChat.messages.fetch();
		},
		addOneContact: function (contact) {
			var view = new fooChat.Views.ContactView({model: contact});
			$('ul#contactsList').append(view.render().el);
		},
		addAllContact: function () {
			fooChat.contacts.each(this.addOneContact);
		},
		addOneMessage: function (message) {
			var view = new fooChat.Views.MessageView({model: message});
			$('div#messageBox').prepend(view.render().el);
			$('time.timeago').timeago();
		},
		addAllMessage: function () {
			fooChat.messages.each(this.addOneMessage);
		},

	}),
	LoginView : B.View.extend({
		initialize : function() {
			this.render();
		},
		render : function(){
			console.log("Render login UI here");
		}
	}),
	TopBarView : B.View.extend({
		template : $('#template-topBar').html(),
		events : {
		},
		initialize: function () {
			this.model = this.options;
			this.model.bind('change', this.render, this);
			this.render();
		},
		render: function () {
			$("body").prepend($(this.el).html(this.template.supplant(this.model.toJSON())));
			return this;
		}
	}),
};
