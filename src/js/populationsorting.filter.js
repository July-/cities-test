(function() {
'use strict';

angular.module('mainApp')
.filter('populationSorting', function() {
  return function(items) {  
    items.sort(function(a,b){
			population1 = 0;
			population2 = 0;
			if (a.districts.length) {
				for (var i=0; i<a.districts.length; i++){
					population1 += parseInt(a.districts[i].population);
				} 
			}
			if (b.districts.length) {
				for (var i=0; i<b.districts.length; i++){
					population2 += parseInt(b.districts[i].population);
				} 
			}
      if (population1 > population2)
        return 1;
      if (population1 < population2)
        return -1;         
			return 0; 
		});
  }
});

})();