(function() {
'use strict';

angular.module('mainApp')
.config(routeConfig);


routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function routeConfig ($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/');
  
  $stateProvider
    
		.state('home', {
			url: '/',
			templateUrl: 'templates/home.html',
			controller: 'homeController as homesctrl',
			resolve: {
				citieslist: ['DataService', function (DataService) {
					return DataService.citiesList();
				}]
			}
		})
		
		.state('edit', {
			url: '/edit',
			templateUrl: 'templates/edit.html',
			controller: 'editController',
			controllerAs: 'editctrl',
			resolve: {
				citieslist: ['DataService', function (DataService) {
					return DataService.citiesList();
				}]
			}
		});
}
})();
