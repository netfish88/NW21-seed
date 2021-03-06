/**
 * HOMER - Responsive Admin Theme
 * Copyright 2015 Webapplayers.com
 *
 */

function configState($stateProvider, $urlRouterProvider, $compileProvider) {

    // Optimize load start with remove binding information inside the DOM element
    $compileProvider.debugInfoEnabled(true);

    // Set default state
    $urlRouterProvider.otherwise("/dashboard");
    $stateProvider

        // Dashboard - Main page
        .state('dashboard', {
            url: "/dashboard",
            templateUrl: "views/dashboard.html",
            data: {
                pageTitle: 'Dashboard',
            }
        })

        // Analytics
        .state('analytics', {
            url: "/analytics",
            templateUrl: "views/analytics.html",
            data: {
                pageTitle: 'Analytics',
            }
        })

        // Team
        .state('projects', {
            url: "/projects",
            templateUrl: "views/projects.html",
            data: {
                pageTitle: 'Projects',
            }
        })

}

angular
    .module('homer')
    .config(configState)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });