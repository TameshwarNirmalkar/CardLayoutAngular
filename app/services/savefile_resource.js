(function(){
	'use strict';
	angular.module('infobipapp')
	.factory('MainResourceGateway', ['$resource', MainResourceGateway]);

	function MainResourceGateway($resource) {
		var regionDataResource = $resource('./app/services/mockupdata.json', {}, {
			getRegionData: {method: 'GET'}
		});

		return {
			getRegionData: regionDataResource.getRegionData
		};
	}

	
})();