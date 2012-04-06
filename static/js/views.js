/*!
 * All views go here in fooChat.Views namespace
 */

fooChat.Views = {
	ContactView : Backbone.View.extend({
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
	MessageView : Backbone.View.extend({
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
	AddContactView : Backbone.View.extend({
		el : $('input#newContact'),
		tagName: "div",
		events : {
			"keypress" : "addContact"
		},
		initialize: function () {
		},
		addContact : function(e) {
			if (e.keyCode != 13) return;
			e.preventDefault();
			if (! this.$el.val()) return;
			Contacts.create({fullName: this.$el.val()});
		}
	}),
	AppView : Backbone.View.extend({
		initialize: function () {

			Contacts.bind('add', this.addOneContact, this);
			Contacts.bind('reset', this.addAllContact, this);
			Contacts.bind('all', this.render, this);
			Contacts.fetch();

			var addContactInput = new fooChat.Views.AddContactView();

			Messages.bind('add', this.addOneMessage, this);
			Messages.bind('reset', this.addAllMessage, this);
			Messages.bind('all', this.render, this);
			Messages.fetch();
		},
		addOneContact: function (contact) {
			var view = new fooChat.Views.ContactView({model: contact});
			$('ul#contactsList').append(view.render().el);
		},
		addAllContact: function () {
			Contacts.each(this.addOneContact);
		},
		addOneMessage: function (message) {
			var view = new fooChat.Views.MessageView({model: message});
			$('div#messageBox').prepend(view.render().el);
			$('time.timeago').timeago();
		},
		addAllMessage: function () {
			Messages.each(this.addOneMessage);
		},

	})

};
