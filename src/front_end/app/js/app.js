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

demoApp.run(function($rootScope, $location, AuthenticationService){
	var routesThatRequireAuth = ['/home'];

	// add a global listener
	$rootScope.$on('$routeChangeStart', function(event, next, current) {
		debugger;
		if(_(routesThatRequireAuth).contains($location.path()) && !AuthenticationService.isLoggedIn()) {
			$location.path('/login');
		};
	});
});