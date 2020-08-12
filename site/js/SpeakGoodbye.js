(function (window) {

    var array = new Array();
	
	array[0] = function (name) {
		console.log(speakword + " " + name);
	};

	array[1] = function (name) {
		console.log(speakword + " " + name);
	};

	array[2] = function (name) {
		console.log(speakword + " " + name);
	};

	array[3] = function (name) {
		console.log(speakword + " " + name);
	};

	array[4] = function (name) {
		console.log(speakword + " " + name);
	};


	var speakword = "Hello ";


	array[0]("Paul");
	array[1]("Frank");
	array[2]("Larry");
	array[3]("Paula");
	array[4]("Laura");
})(window);
