/*!
 * All models go here in fooChat.Models namespace
*/

fooChat.Models = {
	Contact : Backbone.Model.extend({
		// Default attributes for the contact
		defaults: {
			// Ensure that each photo created has an `src`.
			fullName : "fooBar",
			hash: "fooBar"
		},
		initialize: function () {
			console.log("New Contact model");
		}
	})
};



