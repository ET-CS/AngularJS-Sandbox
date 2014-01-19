
angular.module('practice').service('someModel',function() {
		this.someData =   [
									{       
										name:"John1",
										family:"Doe1",
										phoneNumber:'01111111'
									},
									
									{       
										name:"John2",
										family:"Doe2",
										phoneNumber:'02222222'
									},
							];
									
		this.someFunction= function() { 
					return [
									{       
										nameOfOperator:"John1",
										operation:"Go To work1"
									},
									
									{       
										nameOfOperator:"John2",
										operation:"Go To work2"
									},
							];

	  }			
});
    

//Notice: These will give the next error: 'Unknown provider: someModelProvider <- someModel':

//									{       
//										this.name:"John3"
//									},
									
//									or
//									{       
//										this.name="John3"
//									},

//									or
//									phoneNumber:02222222 instead of '02222222'									
									
//									or
//									this.someFunction= return [

