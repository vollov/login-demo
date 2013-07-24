'use strict';

demoApp.factory('SessionService', function(){
	return {
		get: function(key){
			return sessionStorage.getItem(key);
		},
		set: function(key,value){
			return sessionStorage.setItem(key, value);
		},
		unset: function(key){
			return sessionStorage.removeItem(key);
		}
	};
});

demoApp.factory('AuthenticationService', function($http, $location, SessionService) {
	var cacheSession = function(){
		SessionService.set('authenticated', true);
	};
	
	var uncacheSession = function(){
		SessionService.unset('authenticated');
	};
	
	// these routes map to stubbed API endpoints in config/server.js
	return {
		login : function(credentials) {
			var login = $http.post('/api/login', credentials);
			login.success(cacheSession);
			return login;
		},
		logout : function() {
			var logout = $http.get('/api/logout');
			logout.success(uncacheSession);
			return logout;
		},
		isLoggedIn : function() {
			return SessionService.get('authenticated');
		}
	};
});
