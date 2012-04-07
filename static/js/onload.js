/*!
  * The main fooChat code to be excecuted on page load.
*/

(function ($) {
	"use strict";
	$(document).ready(function () {
		window.User = new fooChat.Models.ActiveUser();
		window.App = new fooChat.Routers.BackboneApp();
		Backbone.history.start({root: "/fooChat"});

	});

}(jQuery));
