
angular.module('practiceApp', []);	//Without this nothing works!

var practiceConfig = function($routeProvider) {
  $routeProvider
  
           .when('/seeFirstTemplate', {        
            controller: 'firstController',      
             templateUrl: 'views/someTemplateView1.html'
           })
           .when('/seeSecondTemplate', {      
            controller: 'secondController',      
             templateUrl: 'views/someTemplateView2.html'
           })
		   .otherwise({ redirectTo: '/seeFirstTemplate' });
   ; } ; 
   
   
angular.module('practiceApp', []).config(practiceConfig);

