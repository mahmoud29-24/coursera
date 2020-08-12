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



	var speakword = "Goodbye ";


	array[0]("John");
	array[1]("Jen");
	array[2]("Jason");
	array[3]("Jim");
	
})(window);