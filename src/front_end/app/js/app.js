'use strict';

var demoApp = angular.module('appModule', [ 'ngResource' ]);

demoApp.config(function($routeProvider) {

	$routeProvider.when('/home', {
		templateUrl : 'views/home.html',
		controller: 'HomeController'
	}).when('/login', {
		templateUrl : 'views/login.html',
		controller: 'LoginController'
	}).otherwise({
		redirectTo : '/login'
	});
});
