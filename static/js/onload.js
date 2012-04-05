/*!
  * The main fooChat code to be excecuted on page load.
*/

(function ($) {
	"use strict";
	$(document).ready(function () {
		window.App = new fooChat.Routers.BackboneApp();
		Backbone.history.start({pushState: true, root: "/"})
	});

}(jQuery));
