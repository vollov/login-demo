'use strict';

//demoApp.controller('BooksController', function ($scope, BookResource) {
//	$scope.books = BookResource.query();
//});

demoApp.controller('LoginController', function ($scope, $location) {
	$scope.credentials = { username: "", password: ""};
	
	$scope.login = function() {
		if($scope.credentials.username === "dustin") {
			$location.path('/home');
		}
		//console.log($scope.credentials.username);
	};
});

demoApp.controller('HomeController', function ($scope) {
});