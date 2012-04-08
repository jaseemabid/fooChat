/*!
 * All collections go here in fooChat.Collections namespace
 */

fooChat.Collections = {
	ContactList: B.Collection.extend({
		// Reference to this collection's model.
		model: fooChat.Models.Contact,
		url: '/couch/foochat/_design/byUserId/_view/contacts?key="{uid}"',
		parse: function (response) {
			return response.rows[0].value;
		},
		initialize: function (objects, args) {
			this.url = this.url.supplant(args.toJSON());
		},
		findHash: function (username) {
			var hash = this.where({
				"username": username
			});
			if (hash.length > 0) {
				return hash[0].get('hash');
			} else {
				return 0;
			}
		}
	}),
	MessageList: B.Collection.extend({
		// Reference to this collection's model.
		model: fooChat.Models.Message,
		url: '/couch/foochat/_design/byUserId/_view/inbox?key="{uid}"',
		parse: function (response) {
			return response.rows[0].value;
		},
		initialize: function (objects, args) {
			this.url = this.url.supplant(args.toJSON());
		}
	})
};
