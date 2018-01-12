(function() {
'use strict';

angular.module('mainApp')
.controller('homeController', homeController);

homeController.$inject = ['citieslist', '$scope', '$timeout', 'uiGmapLogger', '$http','uiGmapGoogleMapApi'];

function homeController(citieslist, $scope, $timeout, uiGmapLogger, $http, uiGmapGoogleMapApi) {
	var ctrl = this;
	ctrl.toggleSort = false;
	
	ctrl.citiesList = citieslist.data.result;
	console.log(ctrl.citiesList);
	
	ctrl.places = [];
	for (var i=0; i<ctrl.citiesList.length; i++){
		var curObject = {};
		curObject.id = parseInt(ctrl.citiesList[i].city_id);
		curObject.latitude = parseFloat(ctrl.citiesList[i].lat);
		curObject.longitude = parseFloat(ctrl.citiesList[i].lon);
		curObject.title = ctrl.citiesList[i].city_name;
		ctrl.places.push(curObject);           
	};
	
	ctrl.populationSum = function(city) {
		var population = 0;
		if (city.districts.length) {
			for (var i=0; i<city.districts.length; i++){
				population += parseInt(city.districts[i].population);
			} 
		}
		return population;
	};
	
	ctrl.map = {
        center: {
          latitude: 55.755773,
          longitude: 37.617761
        },
				pan: true,
        zoom: 5,
        refresh: false,
        options: {
          disableDefaultUI: true
        },
        events: {},
        bounds: {},
        polys: [],
        draw: undefined
      };
	
	
	uiGmapGoogleMapApi.then(function(maps) {
		
      
  });
	
}


})();