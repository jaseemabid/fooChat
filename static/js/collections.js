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
		},
		findHash : function (username) {
			return this.where({"username": username})[0].get('hash');
		}
	}),
	MessageList: Backbone.Collection.extend({
		// Reference to this collection's model.
		model: fooChat.Models.Message,
		url: '/couch/messages/_design/messages/_view/inbox?group=true&key="6befa6914123b2993c39146350002cbc"',
		parse: function (response) {
			return response.rows[0].value;
		}
	}),
};

var Contacts = new fooChat.Collections.ContactList();
var Messages = new fooChat.Collections.MessageList();
