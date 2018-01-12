(function() {
'use strict';

angular.module('mainApp')
.controller('editCityModalController', editCityModalController);

editCityModalController.$inject = ['$uibModalInstance', 'city'];

function editCityModalController($uibModalInstance, city) {
	var ctrl = this;
	
	ctrl.cityData = {
		city_id: city.city_id,
		city_name: city.city_name,
		lat: city.lat,
		lon: city.lon
	}
	
	ctrl.ok = function () {
    $uibModalInstance.close(ctrl.cityData);
  };

	ctrl.cancel = function () {
    $uibModalInstance.dismiss();
  };
}

})();