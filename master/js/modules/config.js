/**=========================================================
 * Module: config.js
 * App routes and resources configuration
 =========================================================*/

App.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', 'RouteHelpersProvider',
function ($stateProvider, $locationProvider, $urlRouterProvider, helper) {
    'use strict';

    // Set the following to true to enable the HTML5 Mode
    // You may have to set <base> tag in index and a routing configuration in your server
    $locationProvider.html5Mode(false);

    // default route
    $urlRouterProvider.otherwise('/app/singleview');

    // 
    // Application Routes
    // -----------------------------------   
    $stateProvider
        .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: helper.basepath('app.html'),
                controller: 'AppController',
                resolve: helper.resolveFor('modernizr', 'icons')
        })
        .state('app.singleview', {
                url: '/singleview',
                title: 'Single View',
                templateUrl: helper.basepath('singleview.html')
        })
        .state('app.submenu', {
                url: '/submenu',
                title: 'Submenu',
                templateUrl: helper.basepath('submenu.html')
        })
        ;
}]).config(['$ocLazyLoadProvider', 'APP_REQUIRES', function ($ocLazyLoadProvider, APP_REQUIRES) {
        'use strict';
        // Lazy Load modules configuration
        $ocLazyLoadProvider.config({
            debug: false,
            events: true,
            modules: APP_REQUIRES.modules
        });
}]).config(['$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
        function ( $controllerProvider, $compileProvider, $filterProvider, $provide) {
            'use strict';
            // registering components after bootstrap
            App.controller = $controllerProvider.register;
            App.directive  = $compileProvider.directive;
            App.filter     = $filterProvider.register;
            App.factory    = $provide.factory;
            App.service    = $provide.service;
            App.constant   = $provide.constant;
            App.value      = $provide.value;
}]).config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeBar = true;
        cfpLoadingBarProvider.includeSpinner = false;
        cfpLoadingBarProvider.latencyThreshold = 500;
        cfpLoadingBarProvider.parentSelector = '.wrapper > section';
}]).config(['$tooltipProvider', function ($tooltipProvider) {
        $tooltipProvider.options({appendToBody: true});
}])
;
