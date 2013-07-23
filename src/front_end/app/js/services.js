'use strict';

demoApp.factory('AuthenticationService', function($location) {
  // these routes map to stubbed API endpoints in config/server.js
  return {
    login: function(credentials) {
	  if(credentials.username === "dustin") {
		  $location.path('/home');
	  }
      //return $http.post('/login', credentials);
    },
    logout: function() {
    	$location.path('/login');
      //return $http.post('/logout');
    }
  };
});