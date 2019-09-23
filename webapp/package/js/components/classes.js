(function(){

	'use strict';
	
    const Classes = {
		init: function(){

            // OLD way
            function User(name) {
                this.name = name;
            }
              
            User.prototype.sayHi = function() {
                console.log(this.name);
            }
              
            let user = new User("Mario");
            user.sayHi();


            // CLASS syntax
            class NewUser {

                constructor(name) {
                  this.name = name;
                }
              
                sayHello() {
                  console.log(this.name);
                }
            }
              
            let MyUser = new NewUser("Jonas");
            MyUser.sayHello();
		}
	}

	module.exports = Classes.init();

})();