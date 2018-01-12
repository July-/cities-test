(function() {
"use strict";
	
angular.module("mainApp", ['ui.router', 'ui.bootstrap', 'uiGmapgoogle-maps', 'angular-loading-bar'])
.constant('uuid', '297cb7d6-71c7-4315-b090-a71b2e9030fb')
.constant('apiUrl', 'http://95.213.207.35:18000/api/')
.config(['uiGmapGoogleMapApiProvider', function(GoogleMapApi) {
    GoogleMapApi.configure({
      key: 'AIzaSyANeDpyEvzr1dh2u10m3yViVkheFve0PSQ',
			language: 'ru-RU'
      // v: '3.20' //defaults to latest 3.X anyhow
      //libraries: 'weather,geometry,visualization'
    });
}])
.run(['$transitions', 'cfpLoadingBar',  function($transitions, cfpLoadingBar) {
	
	$transitions.onStart({}, function(transition) {
		cfpLoadingBar.start(); 
	});
			
	$transitions.onFinish({}, function(transition) {
			cfpLoadingBar.complete(); 
	});
}]);


})();