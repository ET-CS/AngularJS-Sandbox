
angular.module('practice').service('someModel',function() {
		this.someString = "Hi! Where you found me?";
		
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

	  };
	  
	  this.someAnimalsData = [
	   									{       
											name:"dog",
											action:"bark",
											wiki: "http://en.wikipedia.org/wiki/Bark_(sound)"
										},
										
										{       
											name:"lion",
											action:"roar",
											wiki: "http://en.wikipedia.org/wiki/Roar_(utterance)"
										},
								];

	  this.getAnimals = function() { return this.someAnimalsData; };
});
    

//Notice: These will give the next error: 'Unknown provider: someModelProvider <- someModel':

//									{       
//										this.name:"John3"
//									},
									
//									or
//									{       
//										this.name="John3"
//									},

// ET: for me the above with the '=' works. the ":" is wrong syntax. it's for dict i think (like someData).

//									or
//									phoneNumber:02222222 instead of '02222222'									
// not legal syntax for variable.


//									or
//									this.someFunction= return [
// this mixes put inside variable with return. wrong syntax. it's like writing in java:
// String someStr = return "Hello"; 
