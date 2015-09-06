/**=========================================================
 * Module: browser.js
 * Browser detection
 =========================================================*/

(function() {
    'use strict';

    App.service('browser', Browser);

    function Browser() {
      return window.jQBrowser;
    }

})();
