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
		initialize: function () {},
		home: function () {
			fooChat.activeUser = new fooChat.Models.ActiveUser();
			if(fooChat.activeUser.get('uid') === 0 ) {
				fooChat.appRouter.navigate('/login', true);
				return;
			}
   			//fooChat.activeUser.set({'uid':'3d123352c8c4c8866f5158acc6000366'}); // jaseemabid's
			//fooChat.activeUser.set({'uid': '3d123352c8c4c8866f5158acc60010d7'}); // swvist's
			fooChat.contacts = new fooChat.Collections.ContactList([], fooChat.activeUser);
			fooChat.messages = new fooChat.Collections.MessageList([], fooChat.activeUser);
			fooChat.topBar = new fooChat.Views.TopBarView(fooChat.activeUser);
			fooChat.app = new fooChat.Views.AppView();
		},
		login: function () {
			console.log("login");
			fooChat.activeUser = new fooChat.Models.ActiveUser();
			fooChat.loginView = new fooChat.Views.LoginView();
		},
		blank: function () {
			console.log("blank");
		}
	})
};
