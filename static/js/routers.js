/*!
 * Apllication router go here in fooChat.Routers namespace
 */

fooChat.Routers = {

	fooChat: B.Router.extend({
		routes: {
			'': 'home',
			'blank': 'blank',
			'login': 'login',
			'register': 'register',
			'logout': 'logout'
		},
		initialize: function () {
			fooChat.activeUser = fooChat.activeUser || new fooChat.Models.ActiveUser();
			fooChat.activeUser.set(fooChat.config);
			fooChat.activeUser.on('change:uid', this.login, this);
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
			fooChat.activeUser = fooChat.activeUser || new fooChat.Models.ActiveUser();
			fooChat.topBar = new fooChat.Views.TopBarView(fooChat.activeUser);
			if (fooChat.activeUser.get('uid') !== 0) {
				this.navigate("/", true);
			} else {
				fooChat.loginView = new fooChat.Views.LoginView();
			}
		},
		register: function () {
			fooChat.activeUser = fooChat.activeUser || new fooChat.Models.ActiveUser();
			fooChat.topBar = new fooChat.Views.TopBarView(fooChat.activeUser);
			if (fooChat.activeUser.get('uid') !== 0) {
				this.navigate("/", true);
			} else {
				fooChat.registerView = new fooChat.Views.RegisterView();
			}
		},
		logout: function () {
			fooChat.activeUser.logout();
			this.navigate('/login', true);
		},
		blank: function () {
			console.log("blank");
		}
	})
};
