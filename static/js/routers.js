/*!
 * Apllication router go here in fooChat.Routers namespace
 */

fooChat.Routers = {

	BackboneApp : Backbone.Router.extend({
			routes: {
				'': 'home',
				'blank': 'blank',
				'login' : 'login'
			},
			initialize: function() {
			//	this.home();
			},
			home: function() {
				var App = new fooChat.Views.AppView();
			},
			login: function() {
				console.log("login");
			},
			blank: function() {
				console.log("blank");
			}
		})
};
