// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function (window, $, undefined) {
    "use strict";

    WinJS.UI.Pages.define("/pages/4_DomApiChanges/DomApiChanges.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.

            // Create the message dialog and set its content; it will get a default "Close" command since there aren't any other commands being added
            var msg = new Windows.UI.Popups.MessageDialog("Don't forget to set a breakpoint in the JavaScript file and step through each test.");

            // Show the message dialog
            msg.showAsync().done(function () {
                var el = function (id) { return document.getElementById(id); };

                try { el('li1').innerHTML = 'Test 1 Passed'; } catch (ex) { console.log(ex); }
                try { el('li2').innerHTML = '<div>Test 2 Passed</div>'; } catch (ex) { console.log(ex); }
                try { el('li3').innerHTML = '<div onclick="myFunction()">Test 3 Passed</div>'; } catch (ex) { console.log(ex); }
                try { el('li4').innerHTML = '<div><script> (function () { console.log("Test4"); })(); </script>Test 4 Passed</div>'; } catch (ex) { console.log(ex); }
                try { el('li5').innerHTML = '<div data-custom="Test5">Test 5 Passed</div>'; } catch (ex) { console.log(ex); }
                try { el('li6').innerHTML = '<div name="Test6">Test 6 Passed</div>'; } catch (ex) { console.log(ex); }
                try { el('li7').innerHTML = '<div id="Test7">Test 7 Passed</div>'; } catch (ex) { console.log(ex); }

                try { $('#li8').html('Test 8 Passed'); } catch (ex) { console.log(ex); }
                try { $('#li9').html('<div>Test 9 Passed</div>'); } catch (ex) { console.log(ex); }
                try { $('#li10').html('<div onclick="myFunction()">Test 10 Passed</div>'); } catch (ex) { console.log(ex); }
                try { $('#li11').html('<div><script> (function () { console.log("Test11"); })(); </script>Test 11 Passed</div>'); } catch (ex) { console.log(ex); }
                try { $('#li12').html('<div data-custom="Test12">Test 12 Passed</div>'); } catch (ex) { console.log(ex); }
                try { $('#li13').html('<div name="Test13">Test 13 Passed</div>'); } catch (ex) { console.log(ex); }
                try { $('#li14').html('<div id="Test14">Test 14 Passed</div>'); } catch (ex) { console.log(ex); }

                $('.tests').show('slow');
            });
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element, viewState, lastViewState) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in viewState.
        }
    });
})(window, jQuery);
