//Not working
// FirstModule.service('personModel', 
		// function() {               
				// this.Person=function() {
						// this.name="John";
						// this.family="Do";
						// this.phoneNumber="0555555555";
				// }
		// }
// );

angular.module('practice').service('someCtrl',function() {
		this.getChapters = function() {
				return [
						{       
							id: 0,
							title: 'Chapter 1: So, What is AngularJS?',
							summary: 'What separates AngularJS from...'
						}, 
						{          
							id: 1,
							title: 'Chapter 2: HelloWorld',
							summary: 'Learn how to get up and running with...'
						} ];

				}
		}
);
