/*!
 * Apllication router go here in fooChat.Routers namespace
 */

fooChat.Routers = {

	fooChat: B.Router.extend({
		routes: {
			'': 'home',
			'blank': 'blank',
			'login': 'login'
		},
		initialize: function () {
			fooChat.activeUser = fooChat.activeUser || new fooChat.Models.ActiveUser();
			fooChat.activeUser.on('change:uid',this.logout , this)
		},
		home: function () {

			fooChat.activeUser = fooChat.activeUser || new fooChat.Models.ActiveUser();
			if (fooChat.activeUser.get('uid') === 0) {
				fooChat.appRouter.navigate('/login', true);
				return;
			}

			fooChat.contacts = new fooChat.Collections.ContactList([], fooChat.activeUser);
			fooChat.messages = new fooChat.Collections.MessageList([], fooChat.activeUser);
			fooChat.topBar = new fooChat.Views.TopBarView(fooChat.activeUser);
			fooChat.app = new fooChat.Views.AppView();
		},
		login: function () {
			fooChat.loginView = new fooChat.Views.LoginView();
			fooChat.activeUser = fooChat.activeUser || new fooChat.Models.ActiveUser();

			fooChat.activeUser.fetch({
				"success": function (model, response) {
					fooChat.appRouter.navigate('/', true);
				},"error" : function (model, response) {
					console.error("fooChat.activeUser.fetch error");
				}
			});
		},
		logout : function () {
			this.navigate('/login',true);
		},
		blank: function () {
			console.log("blank");
		}
	})
};
