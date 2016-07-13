/**
 * Created by Tameshwar Nirmalkar on 10/07/16.
 */
(function() {

	angular.module('infobip.productlist',[])
		.directive('productList', function($timeout) {
			return {
				restrict: 'E',
				scope: {
					deleteaction: "&deleteAction",
					printaction: "&printAction",
					openaction: "&openAction",
					plist: "=pList",
					classapply: "&classApply"
				},
				templateUrl: 'app/directive/productlist.template.html',
				link: linkFunction
			}
			
			function linkFunction(scope, element, attrs) {
				scope.$watch('plist', function(newValue) {
				    if (newValue !== undefined) {
				        console.log(scope.plist);
				    }
				});
				scope.cssFilter = function(msgtype){
					if(msgtype === 1){
						return 'fa fa-money';
					}
					else if(msgtype === 2){
						return 'fa fa-film';
					}
					else if(msgtype === 3){
						return 'fa fa-group';
					}
					else if(msgtype === 4){
						return 'fa fa-lock';
					}
					else{
						return 'fa fa-envelope';
					}
				}
			}
		});
})();
