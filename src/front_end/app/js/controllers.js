'use strict';

//demoApp.controller('BooksController', function ($scope, BookResource) {
//	$scope.books = BookResource.query();
//});

demoApp.controller('LoginController', function ($scope, $location) {
	window.scope = $scope;
	$scope.credentials = { username: "", password: ""};
	
	$scope.login = function() {
		if($scope.credentials.username === "dustin") {
			$location.path('/home');
		}
		//console.log($scope.credentials.username);
	};
});

demoApp.controller('HomeController', function ($scope, $location) {
	$scope.title = "Senator";
	$scope.message = "Mouse Over these images to see a directive at work";
	
	$scope.logout = function() {
		$location.path('/login');
	};
});