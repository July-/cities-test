(function() {
'use strict';

angular.module('mainApp')
.controller('newDistrictModalController', newDistrictModalController);

newDistrictModalController.$inject = ['$uibModalInstance'];

function newDistrictModalController($uibModalInstance) {
	var ctrl = this;
	
	ctrl.districtData = {
		name: '',
		population: ''
	}
	
	ctrl.ok = function () {
    $uibModalInstance.close(ctrl.districtData);
  };

	ctrl.cancel = function () {
    $uibModalInstance.dismiss();
  };
}

})();