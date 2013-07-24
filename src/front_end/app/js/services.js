'use strict';

demoApp.factory('AuthenticationService', function($http, $location) {
  return {
    login: function(credentials) {
      return $http.post('/auth/login', credentials);
    },
    logout: function() {
      return $http.get('/auth/logout');
    }
  };
});