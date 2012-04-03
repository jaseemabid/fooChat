/*!
 * All views go here in fooChat.Views namespace
 */

fooChat.Views = {

	ContactView : Backbone.View.extend({
		el: $('ul#contactsList'),
		tagName:	"li",
		// Pass the contents of the contact template through a templating
		// function, cache it for a single contact
		template: _.template($('#template-contact').html()),
		// Re-render the contact entry
		render: function () {
			$(this.el).html(this.template(this.model.toJSON()));
			return this;
		},
		// The DOM events specific to an item.
		events: {
			"click img" : "toggleViewed"
		},
		// The ContactView listens for changes to its model, re-rendering. Since there's
		// a one-to-one correspondence between a **Contact** and a **ContactView** in this
		// app, we set a direct reference on the model for convenience.
		initialize: function () {
			_.bindAll(this, 'render');
			this.model.bind('change', this.render);
			this.model.bind('destroy', this.remove);
		},
		// Toggle the `"viewed"` state of the model.
		toggleViewed: function () {
			this.model.viewed();
		}
	})
};
