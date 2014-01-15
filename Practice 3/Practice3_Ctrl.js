// ------------------
// Practice2_Ctrl.js
// ------------------
// Controller for Practice 3 on AngularJS
// By Rotem Yaakoby & Etay Cohen-Solal


angular.module('practice', []);	//Without this nothing works!

// Implicit np-app name controller
angular.module('practice').controller('someCtrl',
	['$scope',function($scope,personModel)
	{
		$scope.scopeSays = "TO BE!!";
	}]);

/*
angular.module('FirstModule').controller('someCtrl',['$scope','personModel',function($scope,personModel)
					        {
							
							
							 $scope.chapters =  = personModel.getChapters();     
  
						 	
							 $scope.PersonName="personModel.name";
							$scope.PersonFamily=personModel.family;
							$scope.PersonNumber=personModel.phoneNumber;
							
							 $scope.PersonName=personModel.Person.name;
							 $scope.PersonFamily=personModel.Person.family;
							 $scope.PersonNumber=personModel.Person.phoneNumber;
							
							}

]);
*/