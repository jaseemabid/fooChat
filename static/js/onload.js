/*!
 * The main fooChat code to be excecuted on page load.
 */

(function ($) {
	"use strict";
	$(document).ready(function () {

		var jaseem = {
			uid: 1234,
			fullname: 'Jaseem Abid',
			username: 'jaseemabid',
			hash: "40901f06ff8e7bb58e200630c613d647"
		};

		window.User = new fooChat.Models.ActiveUser(jaseem);
		window.App = new fooChat.Routers.BackboneApp();
		Backbone.history.start({
			root: "/fooChat"
		});

	});

}(jQuery));
