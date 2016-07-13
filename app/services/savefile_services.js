(function(){
	'use strict';
	angular.module('infobipapp.services',[])
		.factory('MainServices', ['$timeout', '$http', MainServices]);

		function MainServices($timeout, $http) {
			function getProductListData(){
				return $http.get('./app/services/mockupdata.json');
			}
			function openAction(pname){
				$.toaster({ message : pname, title : 'Open Action', priority : 'warning' });
			}
			function printAction(pname){
				$.toaster({ message : pname, title : 'Open Action', priority : 'success' });
			}
			function deleteAction(ind){
				$.toaster({ message : ind, title : 'Open Action', priority : 'danger' });
			}
			function cssChange(type){
				if(msgtype === 1){
					return 'fa-money';
				}
				else if(msgtype === 2){
					return 'fa-film';
				}
				else if(msgtype === 3){
					return 'fa-group';
				}
				else if(msgtype === 4){
					return 'fa-lock';
				}
				else{
					return 'fa-envelope';
				}
			}
			return {
				getProductListData: getProductListData,
				openAction: openAction,
				deleteAction: deleteAction,
				printAction: printAction,
				cssChange: cssChange
			}
		}
	
})();