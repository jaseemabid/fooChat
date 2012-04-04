/*!
 * All collections go here in fooChat.Collections namespace
 */

fooChat.Collections = {
	ContactList: Backbone.Collection.extend({
		// Reference to this collection's model.
		model: fooChat.Models.Contact,
		url: '/couch/users/_design/contacts/_view/byUsername?key="irene"',
		parse: function (response) {
			return response.rows[0].value;
		}
	})
};

var Contacts = new fooChat.Collections.ContactList();
