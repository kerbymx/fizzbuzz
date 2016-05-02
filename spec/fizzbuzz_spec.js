var fb = require('../fizzbuzz');

describe("A fizzbuzz program", function() {
	
	it("can count from 1 to 15", function() {
		expect(fb.count(1, 15)).toBe("1 2 3 4 5 6 7 8 9 10 11 12 13 14 15");
	});
	it("Changes multples of 3 to fizz", function() {
		expect(fb.fizzer(3)).toBe('fizz')
		expect(fb.fizzer(6)).toBe('fizz')
		expect(fb.fizzer(9)).toBe('fizz')
		expect(fb.fizzer(12)).toBe('fizz')
	});
	it("Changes multples of 5 to buzz", function() {
		expect(fb.buzzer(5)).toBe('buzz')
		expect(fb.buzzer(10)).toBe('buzz')
	});
	it("Changes multples of 3 and 5 to be fizbuzz", function() {
		expect(fb.fizzbuzzer(15)).toBe('fizzbuzz')
	});
	it("Does not change nonmultiples of 3 or 5 to either fizz or buzz",
	 function() {
	 	expect(fb.fizzer(1)).toBe(1)
	 	expect(fb.fizzer(2)).toBe(2)
	 	expect(fb.fizzer(4)).toBe(4)
	 });
});