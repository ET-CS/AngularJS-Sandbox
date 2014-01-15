// ------------------
// Practice1_Ctrl.js
// ------------------
// Controller for Practice 1 on AngularJS
// By Rotem Yaakoby & Etay Cohen-Solal

// Basic controller
function SimpleCtrl($scope) {
	$scope.ctrlSays = "TO BE!!";
	$scope.lessons = 
		[
		 	{text:'learn angular', color:"red"},
		 	{text:'build an angular app', color:"blue"},
		 	{text:'read from controller', color:"green"}
		];
}