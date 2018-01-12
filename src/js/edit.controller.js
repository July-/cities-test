(function() {
'use strict';

angular.module('mainApp')
.controller('editController', editController);

editController.$inject = ['citieslist', 'DataService', '$uibModal', '$rootScope'];

function editController(citieslist, DataService, $uibModal, $rootScope) {
	var ctrl = this;
	
	ctrl.citiesList = citieslist.data.result;
	
	ctrl.refreshCities = function() {
		DataService.citiesList()
		.then(function(response) {
			if (response.data.result) {
				ctrl.citiesList = response.data.result;
			}
		},
    function (error) {
			console.log(error); 
		});  
	};
	
	ctrl.addCity = function(city, lat, lon) {
		DataService.addCity(city, lat, lon)
		.then(function(response) {
			console.log(response); 
			if (response.data.result) {
				ctrl.addCityForm.$setPristine();
				ctrl.refreshCities();
				$rootScope.$broadcast('newAlert', {message: 'Город '+city+' добавлен', type: 'success'});
			}
		},
    function (error) {
			console.log(error); 
		});  
	};
	
	ctrl.addDistrictToCity = function(city) {
		var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'templates/newdistrictdialog.html',
        controller: 'newDistrictModalController',
				controllerAs: 'ctrl',
        size: 'small'
    });

    modalInstance.result.then(function (newDistrict) {
      ctrl.commitNewDistrict(newDistrict, city);
    }, function () {
        
    });
	};
	
	ctrl.commitNewDistrict = function(newDistrict, city) {
		DataService.addDistrict(newDistrict, city)
		.then(function(response) {
			console.log(response); 
			if (response.data.result) {
				ctrl.refreshCities();
				$rootScope.$broadcast('newAlert', {message: 'Район '+newDistrict.name+' добавлен', type: 'success'});
			}
		},
    function (error) {
			console.log(error); 
		});  
	};
	
	ctrl.editCity = function(city) {
		var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'templates/editcitydialog.html',
        controller: 'editCityModalController',
				controllerAs: 'ctrl',
        size: 'small',
				resolve: {
					city: function() {
						return city;
					}
				}
    });

    modalInstance.result.then(function (city) {
      ctrl.commitEditCity(city);
    }, function () {
        
    });
	};
	
	ctrl.commitEditCity = function(city) {
		DataService.editCity(city)
		.then(function(response) {
			console.log(response); 
			if (response.data.result) {
				ctrl.refreshCities();
				$rootScope.$broadcast('newAlert', {message: 'Город изменен.', type: 'success'});
			}
		},
    function (error) {
			console.log(error); 
		});  
	};
	
	ctrl.deleteCity = function(city) {
		DataService.deleteCity(city)
		.then(function(response) {
			console.log(response); 
			if (response.data.result) {
				ctrl.refreshCities();
				$rootScope.$broadcast('newAlert', {message: 'Город удален.', type: 'success'});
			}
		},
    function (error) {
			console.log(error); 
		});  
	};
	
	ctrl.editDistrict = function(district) {
		var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'templates/editdistrictdialog.html',
        controller: 'editDistrictModalController',
				controllerAs: 'ctrl',
        size: 'small',
				resolve: {
					district: function() {
						return district;
					}
				}
    });

    modalInstance.result.then(function (district) {
      ctrl.commitEditDistrict(district);
    }, function () {
        
    });
	};
	
	ctrl.commitEditDistrict = function(district) {
		DataService.editDistrict(district)
		.then(function(response) {
			console.log(response); 
			if (response.data.result) {
				ctrl.refreshCities();
				$rootScope.$broadcast('newAlert', {message: 'Район изменен.', type: 'success'});
			}
		},
    function (error) {
			console.log(error); 
		});  
	};
	
	ctrl.deleteDistrict = function(district) {
		DataService.deleteDistrict(district)
		.then(function(response) {
			console.log(response); 
			if (response.data.result) {
				ctrl.refreshCities();
				$rootScope.$broadcast('newAlert', {message: 'Район удален.', type: 'success'});
			}
		},
    function (error) {
			console.log(error); 
		});  
	};
	
}


})();