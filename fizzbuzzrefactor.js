$(document).ready(function() {
	start(); 

	function start() {
		var fizzBuzzNum = insertNumber();
		notNumber(fizzBuzzNum);
		notDecimal(fizzBuzzNum);
	}

	function insertNumber() {
		var fizzBuzzNum = prompt("Please enter any number from 1 to 100!");
		return fizzBuzzNum;
	}

	function notNumber(fizzBuzzNum) {
		if (isNaN(fizzBuzzNum)) {
			alert("This is not a number! Please type in a number!");
			start(); 
		} else {
			fizzBuzz(fizzBuzzNum);
		}
	}

	function notDecimal(fizzBuzzNum){
		if (fizzBuzzNum % 1 != 0) {
			alert("This is a decimal, please type in a number!"); 
			start();
		} else {
			fizzBuzzNum(fizzBuzz);
		}
	}

	function fizzBuzz(fizzBuzzNum) {
		for(i = 1; i <= fizzBuzzNum; i++) {
			if (i % 3 === 0 && i % 5 === 0){
				$('.fizzbuzz').append("<li>Fizz Buzz</li>");	
			} else if (i % 3 === 0) {
				$('.fizzbuzz').append("<li>Fizz</li>");
			} else if (i % 5 === 0) {
				$('.fizzbuzz').append("<li>Buzz</li>");
			} else {
				$('.fizzbuzz').append("<li>" + i + "</li>");
			}
		}
	}
});

