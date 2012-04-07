/*!
 * Apllication router go here in fooChat.Routers namespace
 */

fooChat.Routers = {

	BackboneApp : Backbone.Router.extend({
			routes: {
				'' : 'home',
				'blank': 'blank',
				'login' : 'login'
			},
			initialize : function () {
			},
			home: function() {
				fooChat.activeUser = new fooChat.Models.ActiveUser();
				fooChat.topBar =  new fooChat.Views.TopBarView(fooChat.activeUser);
				fooChat.app = new fooChat.Views.AppView();
			},
			login: function() {
				console.log("login");
			},
			blank: function() {
				console.log("blank");
			}
		})
};
