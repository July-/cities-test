(function() {
'use strict';

angular.module('mainApp')
.controller('editDistrictModalController', editDistrictModalController);

editDistrictModalController.$inject = ['$uibModalInstance', 'district'];

function editDistrictModalController($uibModalInstance, district) {
	var ctrl = this;
	
	ctrl.districtData = {
		district_id: district.district_id,
		district_name: district.name,
		population: district.population
	}
	
	ctrl.ok = function () {
    $uibModalInstance.close(ctrl.districtData);
  };

	ctrl.cancel = function () {
    $uibModalInstance.dismiss();
  };
}

})();