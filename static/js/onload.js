/*!
  * The main fooChat code to be excecuted on page load.
*/

(function ($) {
	$(document).ready(function () {
		var contactList = new fooChat.Collections.ContactCollection();
		contactList.fetch();
	});

}(jQuery));
