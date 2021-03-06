﻿// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/1_helloWorld/helloWorld.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.

            // Retrieve the div that hosts the Rating control.
            var ratingControlDiv = document.getElementById('ratingControlDiv');
            // Retrieve the actual Rating control.
            var ratingControl = ratingControlDiv.winControl;
            // Register the event handler.
            ratingControl.addEventListener('change', this.ratingChanged, false);

            // Retrieve the button and register our event handler.
            var helloButton = document.getElementById('helloButton');
            helloButton.addEventListener('click', this.buttonClickHandler, false);
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element, viewState, lastViewState) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in viewState.
        },

        buttonClickHandler: function (eventInfo) {
            var userName = document.getElementById('nameInput').value;
            var greetingString = 'Hello, ' + userName + '!';
            document.getElementById('greetingOutput').innerText = greetingString;
        },

        ratingChanged: function (eventInfo) {
            var ratingString = 'You rate this ' + eventInfo.detail.tentativeRating + ' star(s)!';
            document.getElementById('ratingOutput').innerText = ratingString;
        }
    });
})();
