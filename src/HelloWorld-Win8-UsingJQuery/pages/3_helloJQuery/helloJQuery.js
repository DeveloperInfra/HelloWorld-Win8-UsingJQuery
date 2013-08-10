// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function (window, $, undefined) {
    "use strict";

    WinJS.UI.Pages.define("/pages/3_helloJQuery/helloJQuery.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.

            // Retrieve the button and register our event handler.
            $('#helloButton').click(this.buttonClickHandler);

            // Retrieve the div that hosts the Rating control.
            var ratingControlDiv = document.getElementById('ratingControlDiv');
            // Retrieve the actual Rating control.
            // Note: Cannot use jQuery as winControl returns undefined.
            var ratingControl = ratingControlDiv.winControl;
            // Register the event handler.
            ratingControl.addEventListener('change', this.ratingChanged, false);
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element, viewState, lastViewState) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in viewState.
        },

        buttonClickHandler: function (eventInfo) {
            var userName = $('#nameInput').val();
            var greetingString = 'Hello, ' + userName + '!';
            $('#greetingOutput').text(greetingString);
        },

        ratingChanged: function (eventInfo) {
            var ratingString = 'You rate this ' + eventInfo.detail.tentativeRating + ' star(s)!';
            $('#ratingOutput').text(ratingString);
        }
    });
})(window, jQuery);
