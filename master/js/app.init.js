/*!
 * 
 * Angle - Bootstrap Admin App + AngularJS
 * 
 * Author: @themicon_co
 * Website: http://themicon.co
 * License: http://support.wrapbootstrap.com/knowledge_base/topics/usage-licenses
 * 
 */

if (typeof $ === 'undefined') { throw new Error('This application\'s JavaScript requires jQuery'); }

// APP START
// ----------------------------------- 

var App = angular.module('angle', [
        'ngRoute',
        'ngAnimate',
        'ngStorage',
        'ngCookies',
        'ui.bootstrap',
        'ui.router',
        'oc.lazyLoad',
        'cfp.loadingBar',
        'ngSanitize',
        'ngResource',
        'ui.utils'
    ]);

App.run(["$rootScope", "$state", "$stateParams",  '$window', '$templateCache', function ($rootScope, $state, $stateParams, $window, $templateCache) {
    // Set reference to access them from any scope
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    // Scope Globals
    // ----------------------------------- 
    $rootScope.app = {
        name: 'Angle',
        description: 'Angular Bootstrap Admin Template',
        year: ((new Date()).getFullYear()),
        layout: {
            isFixed: true,
            isCollapsed: false,
            isBoxed: false,
            horizontal: false,
            isFloat: false,
            asideHover: false,
            theme: null
        },
        useFullLayout: false,
        hiddenFooter: false,
        offsidebarOpen: false,
        asideToggled: false,
        viewAnimation: 'ng-fadeInUp'
    };
}]);
