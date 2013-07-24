'use strict';

demoApp.factory('AuthenticationService', function($http, $location) {
  // these routes map to stubbed API endpoints in config/server.js
  return {
    login: function(credentials) {
      return $http.post('/api/login', credentials);
    },
    logout: function() {
      return $http.get('/api/logout');
    }
  };
});