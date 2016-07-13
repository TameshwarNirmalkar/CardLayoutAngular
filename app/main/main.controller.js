(function() {
	'use strict';
	angular
		.module('main.controller', [])
		.controller('MainController', ['$scope', '$timeout', 'MainServices', MainController])
		;


	function MainController($scope, $timeout, MainServices) {
		var vm = this;
		MainServices.getProductListData().then(function(result){
			vm.listdata = result.data.data;
		})
		
		vm.open = function(pname){
			MainServices.openAction(pname);
		};

		vm.delete = function(ind){
			MainServices.deleteAction(ind);
		};

		vm.print = function(pname){
			MainServices.printAction(pname);
		};

		vm.cssStyleChange = function(mtype){
			MainServices.cssChange(mtype);	
		};

		return vm;
	}	


})();
