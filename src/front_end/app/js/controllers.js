'use strict';

//demoApp.controller('BooksController', function ($scope, BookResource) {
//	$scope.books = BookResource.query();
//});

demoApp.controller('LoginController', function ($scope, $location, AuthenticationService) {
	window.scope = $scope;
	$scope.credentials = { email: "", password: ""};
	
	$scope.login = function() {
		AuthenticationService.login($scope.credentials).success(function() {
			$location.path('/home');
		});
		//console.log($scope.credentials.username);
	};
});

demoApp.controller('HomeController', [ '$scope', '$location', 'AuthenticationService', function (a,c,b) {
	a.title = "Senator";
	a.message = "Mouse Over these images to see a directive at work";
	
	a.logout = function() {
		b.logout().success(function() {
			c.path('/login');
		});
	};
}]);