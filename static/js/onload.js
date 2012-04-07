/*!
 * The main fooChat code to be excecuted on page load.
 */

(function ($) {
	"use strict";
	$(document).ready(function () {

		new fooChat.Routers.BackboneApp();
		Backbone.history.start({
			root: "/fooChat"
		});

	});

}(jQuery));
