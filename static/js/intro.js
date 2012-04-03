/*!
 * fooChat JavaScript Library v@VERSION
 * Requires jQuery v1.7.1 or higher
 * Requires Backbone.js 0.9.2 or higher
 * Requires twitter Bootstrap
 * Requires Underscore.js 1.3.1 or higher
 * Copyright (C) 2012, Jaseem Abid <jaseemabid@gmail.com>
 * @fileOverview Generic JavaScript code (helper functions)
 * @license GPLv2 or later
 */

/* The main fooChat library starts here */
(function ($, window, undefined) {
	"use strict";

	// Use the correct jQuery, document accordingly with window argument (sandbox)
	var document = window.document,
		navigator = window.navigator,
		location = window.location,
		fooChat = {}; // The main namespace object to be exposed.
