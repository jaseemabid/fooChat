/*!
 * All collections go here in fooChat.Collections namespace
 */

fooChat.Collections = {
	ContactList: Backbone.Collection.extend({
		// Reference to this collection's model.
		model: fooChat.Models.Contact,
		url: '/couch/foochat/_design/byUserId/_view/contacts?key=%223d123352c8c4c8866f5158acc6000366%22',
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
		url: '/couch/foochat/_design/byUserId/_view/inbox?key=%223d123352c8c4c8866f5158acc6000366%22',
		parse: function (response) {
			return response.rows[0].value;
		}
	}),
};

var Contacts = new fooChat.Collections.ContactList();
var Messages = new fooChat.Collections.MessageList();
