(function(){

    'use strict';
    
    const Module = require('../libraries/plugins/Module.js');

	var JSObjects = {
		init: function(){
            
            let user = {        
                name: "John",   
                age: 30,
                gender: 'male'         
            };

            console.log(user);

            // SQUARE BRACKETS
            user.isAdmin = true;
            delete user.age;
            user["likes birds"] = true;

            let plane = "likes flying";
            user[plane] = false;



            // COMPUTED PROPERTIES
            let key = prompt("What do you want to know about the user?", "gender");
            alert( user[key] );




            // PROPERTY VALUE SHORTLAND
            function makeUser(name, age) {
                return {
                  name,
                  age
                  // ...other properties
                };
            }

            let newUser = makeUser('Mario', 31);
            console.log(newUser);
            
            


            // EXISTANCE CHECK
            // true means "no such property"
            let thirdUser = {
                age:34,
                name: 'Andrew'
            };
            console.log(thirdUser.noSuchProperty === undefined); // true, thirdUser.noSuchProperty doesn't exists
            console.log("age" in thirdUser); // true, thirdUser.age exists
            console.log('blabla' in thirdUser); // false, thirdUser.blabla doesn't exist




            // THE “for…in” LOOP
            let loopUser = {
                name: 'Romas',
                age: 51,
                isAdmin: true,
                "likes flying": true
            };

            for(let key in loopUser) {
                console.log(key); //name, age, isAdmin, likes flying
                console.log(loopUser[key]); // Romas, 51, true, true
            }




            // COPYING BY REFERENCE
            let referenceUser ={
                name: 'Jonas'
            };

            let admin = referenceUser;
            admin.name = 'Pete';
            console.log(referenceUser.name); // 'Pete', changes are seen from the "referenceUser" reference




            // CLONING object
            const newObject = {
                name: 'Luke',
                age: 26
            };

            const CloneNewObject = {}; // empty new object

            for (let key in newObject) {
                CloneNewObject[key] = newObject[key];
            }

            CloneNewObject.name = 'New Luke';
            console.log(newObject); // Luke, 26
            console.log(CloneNewObject); // New Luke, 26
            



            // MERGING & ASSIGN object
            const firstObj = {
                name: 'Ian'
            };

            let permissions1 = { canView: true };
            let permissions2 = { canEdit: true };

            Object.assign(firstObj, permissions1, permissions2);
            console.log(firstObj);



            // ASSIGN & LOOP 
            const secObj = {
                name: 'Chris',
                age: 31,
                size: {
                    height: 182,
                    width: 50
                }
            };

            console.log(secObj.size.width); //50



            // DESTRUCTURING object
            const person = {
                first: 'Wes',
                last: 'Bos',
                country: 'Canada',
                city: 'Hamilton',
                twitter: '@wesbos'
              };

            const { first, last } = person;

            console.log(first);
            console.log(last);


            const wes = {
                first: 'Wes',
                last: 'Bos',
                links: {
                  social: {
                    twitter: 'https://twitter.com/wesbos',
                    facebook: 'https://facebook.com/wesbos.developer',
                  },
                  web: {
                    blog: 'https://wesbos.com'
                  }
                }
            };

            const { twitter, facebook } = wes.links.social;
            console.log(twitter, facebook); // logs the 2 variables 

            

            // OBJECT METHODS
            // Functions that are stored in object properties are called “methods”.
            // A function that is the property of an object is called its method.
            // Methods allow objects to “act” like object.doSomething()
            // We’ve got a method sayHi of the object MyNewUser.

            let MyNewUser = {
                name: "John",
                age: 30
            };

            MyNewUser.sayHi = function() {
                console.log('User says hello');
            }

            MyNewUser.sayHi();


            // Method shorthand
            let MyOldUser = {
                sayHi() {
                    console.log('short method');
                }
            };

            MyOldUser.sayHi();


            // 'THIS' in METHODS
            let UserTen = {
                name: "Mario",
                age: 30,
              
                sayHi() {
                  console.log(this.age);
                }
            };

            UserTen.sayHi(); // 30

              
            // ARROW FUNCTION AND 'THIS'
            let userONE = {
                firstName: "Andrew",
                sayHi() {
                  let arrow = () => console.log(this.firstName);
                  arrow();
                }
            };

            userONE.sayHi(); // Andrew



            // CONSTRUCTOR
            // used to create many similar objects, like multiple users or menu items and so on.
            function User(name) {
                this.name = name;
                this.isAdmin = false;
            }
              
            let MyUser = new User("Jack");
            console.log(MyUser.name); // Jack


            // Methods in constructor
            // Using constructor functions to create objects
            function User(name) {
                this.name = name;
              
                this.sayHi = function() {
                  console.log( "My name is: " + this.name );
                };
            }

            let john = new User("John");
            john.sayHi(); // My name is John

		}
	}
 
	module.exports = JSObjects.init();

})();