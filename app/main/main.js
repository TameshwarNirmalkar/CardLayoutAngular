(function(){

	'use strict';

	angular.module('infobipapp',['ui.router', 'infobip.productlist', 'infobipapp.services', 'main.controller'])
		.config(['$stateProvider','$urlRouterProvider', routeConfig])
		.run(['$templateRequest', runConfig]);

		function routeConfig($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.otherwise('/');
			$stateProvider
		        .state('home', {
		            url: '/',
		            //templateUrl: 'app/main/main.temp.html',
		            templateUrl: 'app/main/directory.temp.html',
		            controller: 'MainController as maincntrl'
		        })
		        
		}
		/*Run config*/
		function runConfig($templateRequest) {
		    var urls = [];
		    angular.forEach(urls, function(url) {
		      $templateRequest(url);
		    });
		}


})();