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
				this.home();
			},
			home: function() {
				console.log("home");
				var App = new fooChat.Views.AppView();
			},
			blank: function() {
				console.log("blank");
			}
		})
};
