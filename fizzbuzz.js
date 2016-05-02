count = function(start, end) {
	// create a variable for our output
	var output = buzzer(fizzer(fizzbuzzer(start)));

	//modify output to look like what we want
	for(var i = start; i < end; i += 1) {
		//code to be repeated goes here
		output = output + " " + buzzer(fizzer(fizzbuzzer(i + 1)))
		}

	//return to output, e.g " 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15"
	return output;
};
fizzer = function(num) {
	return (0 === num % 3) ? "fizz" : num
};
buzzer = function(num) {
	return (0 === num % 5) ? "buzz" : num
};
fizzbuzzer = function(num) {
	return (0 === num % 3 && 0 === num % 5) ? "fizzbuzz" : num 
};
module.exports = {
	count: count,
	fizzer: fizzer,
	buzzer: buzzer,
	fizzbuzzer: fizzbuzzer
};