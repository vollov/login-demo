'use strict';

//demoApp.controller('BooksController', function ($scope, BookResource) {
//	$scope.books = BookResource.query();
//});

demoApp.controller('LoginController', function ($scope, AuthenticationService) {
	window.scope = $scope;
	$scope.credentials = { username: "", password: ""};
	
	$scope.login = function() {
		AuthenticationService.login($scope.credentials);
		//console.log($scope.credentials.username);
	};
});

demoApp.controller('HomeController', [ '$scope', 'AuthenticationService', function (a,b) {
	a.title = "Senator";
	a.message = "Mouse Over these images to see a directive at work";
	
	a.logout = function() {
		b.logout();
	};
}]);