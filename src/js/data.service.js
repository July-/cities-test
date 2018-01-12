(function() {
'use strict';

angular.module('mainApp')
.service('DataService', DataService);

DataService.$inject = ['$http', 'uuid', 'apiUrl'];

function DataService($http, uuid, apiUrl) {
	
	var service = this;
	
	service.backendUrl = 'php/filemanager.php';
	
	service.baseReq = {
		url: apiUrl,
		method: 'POST',
		data: {"method": "", "jsonrpc":"2.0", "id":1, "params": 
				{
					"key": uuid

				}
		}
	};
	
	service.citiesList = function () {
		var req = JSON.parse(JSON.stringify(service.baseReq));
		req.data.method = "get_cities";
		//console.log(req);
		return $http(req);
	};
	
	service.addCity = function(city, lat, lon) {
		var req = JSON.parse(JSON.stringify(service.baseReq));
		req.data.method = "create_city";
		req.data.params.name = city;
		req.data.params.lat = lat;
		req.data.params.lon = lon;
		return $http(req);
	};
	
	service.editCity = function(city) {
		var req = JSON.parse(JSON.stringify(service.baseReq));
		req.data.method = "set_city";
		req.data.params.city_id = city.city_id;
		req.data.params.name = city.city_name;
		req.data.params.lat = city.lat;
		req.data.params.lon = city.lon;
		return $http(req);
	};
	
	service.addDistrict = function(newDistrict, cityKey) {
		var req = JSON.parse(JSON.stringify(service.baseReq));
		req.data.method = "create_district";
		req.data.params.city_id  = cityKey;
		req.data.params.name = newDistrict.name;
		req.data.params.population  = newDistrict.population;
		return $http(req);
	};
	
	service.deleteCity = function(cityKey) {
		var req = JSON.parse(JSON.stringify(service.baseReq));
		req.data.method = "delete_city";
		req.data.params.city_id  = cityKey;
		return $http(req);
	};
	
	service.editDistrict = function(district) {
		var req = JSON.parse(JSON.stringify(service.baseReq));
		req.data.method = "set_district";
		req.data.params.district_id = district.district_id;
		req.data.params.name = district.district_name;
		req.data.params.population = district.population;
		return $http(req);
	};
	
	service.deleteDistrict = function(districtKey) {
		var req = JSON.parse(JSON.stringify(service.baseReq));
		req.data.method = "delete_district";
		req.data.params.district_id  = districtKey;
		return $http(req);
	};
	
}


})();