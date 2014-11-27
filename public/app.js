// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/team', {
            templateUrl : 'pages/team.html',
            controller  : 'teamController'
        })

        .when('/get-started', {
            templateUrl : 'pages/get-started.html',
            controller  : 'getStartedController'
        })
});

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {
});

scotchApp.controller('teamController', function($scope) {
});

scotchApp.controller('getStartedController', function($scope) {
});