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
	AppView : Backbone.View.extend({
		initialize: function () {

			Contacts.bind('add', this.addOne, this);
			Contacts.bind('reset', this.addAll, this);
			Contacts.bind('all', this.render, this);

			Contacts.fetch();
		},

		addOne: function (contact) {
			var view = new fooChat.Views.ContactView({model: contact});
			$('ul#contactsList').append(view.render().el);
		},
		addAll: function () {
			Contacts.each(this.addOne);
		},
	})

};
