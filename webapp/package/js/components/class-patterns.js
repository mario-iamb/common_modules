(function(){

	'use strict';
	
    const ClassPatterns = {
		init: function(){

            // Functional class pattern
            function User(name, birthday) {
                // only visible from other methods inside User
                function calcAge() {
                  return new Date().getFullYear() - birthday.getFullYear();
                }
              
                this.sayHi = function() {
                  console.log(`${name}, age:${calcAge()}`);
                };
            }
              
            let user = new User("John", new Date(2000, 0, 1));
            user.sayHi(); // John, age:17


            // PROTOTYPE-BASED classes
            // The constructor MyUser only initializes the current object state.
            // Methods are added to MyUser.prototype.
            // widely known agreement that internal properties and methods are prepended with an underscore "_"
            function MyUser(name, birthday) {
                this._name = name;
                this._birthday = birthday;
            };

            MyUser.prototype._calcAge = function() {
                return new Date().getFullYear() - this._birthday.getFullYear();
            };

            MyUser.prototype.sayHello = function() {
                console.log(`${this._name}, age:${this._calcAge()}`);
            };

            let Newuser = new MyUser("Romas", new Date(1951, 0, 1));
            Newuser.sayHello();




            

            // PROTOTYPE-BASED inheritance for classes
            function Animal(name) {
                this.name = name;
            }

            Animal.prototype.eat = function() {
                console.log(`${this.name} eats.`);
            };

            // Same Rabbit as before
            function Rabbit(name) {
                this.name = name;
            }
            
            Rabbit.prototype.jump = function() {
                console.log(`${this.name} jumps!`);
            };

            Rabbit.prototype.__proto__ = Animal.prototype;
            let rabbit = new Rabbit("White Rabbit");
            rabbit.eat();
            rabbit.jump();



		}
	}

	module.exports = ClassPatterns.init();

})();