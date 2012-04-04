/*!
 * All models go here in fooChat.Models namespace
*/

var now = (new Date()).toString();

fooChat.Models = {
	Contact : Backbone.Model.extend({
		// Default attributes for the contact
		defaults: {
			// Ensure that each photo created has an `src`.
			fullName : "fooBar",
			hash: "fooBar"
		},
		initialize: function () {
		}
	}),
	Message : Backbone.Model.extend({
		// Default attributes for the contact
		defaults: {
			// Ensure that each photo created has an `src`.
			msg : "fooBar message",
			from: "chatBot",
			hash: "40901f06ff8e7bb58e200630c613d647",
			timestamp: now
		},
		initialize: function () {
		}
	})
};
