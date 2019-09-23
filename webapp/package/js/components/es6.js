(function(){

	'use strict';
	
	const Module = require('../libraries/plugins/Module.js');

    const Comments = {
		init: function(){

			const elementOne = document.getElementById('button_one');
			const elementTwo = document.getElementById('button_two');
			const elementThree = document.getElementById('button_three');
			const elementFour = document.getElementById('button_four');
			
			
			// Function that does not take a parameter and doesn’t return anything
			function sayHello () {
				console.log('Hello!');
			}

			// ES6/ES2015 - arrow function
			const sayBye = () => {
				console.log("Arrow function");
			}

			elementOne.addEventListener('click', function() {
				Module.publicMethod();
			});



			// Function that does take a parameter but doesn’t return anything.
			function ShowMessage (message) {
				console.log (message);
			}

			elementTwo.addEventListener('click', function() {
				ShowMessage ("Hello JS!");
			});


			// Function that takes a parameter and returns a value.
			function square(number) {
				return number * number;
			}

			elementThree.addEventListener('click', function() {
				console.log(square(2));
			});


			//Functions are first class objects 
			const squareArrow = (number) => {
				return number * number;
			}

			elementFour.addEventListener('click', function() {
				console.log(squareArrow(5));
			});

			// Immediately Invoked Function Expression
			//let messageAS = "I don't have a name";
			//console.log(messageAS);

		

		}
	}

	module.exports = Comments.init();

})();