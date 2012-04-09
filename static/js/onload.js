/*!
 * The main fooChat code to be excecuted on page load.
 */

(function ($) {
	"use strict";
	$(document).ready(function () {

		fooChat.appRouter = new fooChat.Routers.fooChat();
		Backbone.history.start({
			root: "/fooChat"
		});

	});

}(jQuery));
