(function(){

    'use strict';

    var Module = {
    	init: function(){

			const addClass = function(elem, className){
				if (!elem.classList.contains(className)) {
					elem.classList.add(className);
				}
			}

			const removeClass = function(elem, className){
				if (elem.classList.contains(className)) {
					elem.classList.remove(className);
				}
			}
			
			const hasClass = function(elem, className){
				return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
			}

			const toggleClass = function(elem, className){
				let newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
				if (hasClass(elem, className)) {
					while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
						newClass = newClass.replace(' ' + className + ' ', ' ');
					}
					elem.className = newClass.replace(/^\s+|\s+$/g, '');
				} else {
					elem.className += ' ' + className;
				}
			}

			const publicMethod = function () {
                console.log('Public method');
			}
			
			const validateEmail = function(elem){
				let filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
				if (filter.test(elem)) {
					return true;
				} 
				else {
					return false;
				}
			}

			return {
				toggleClass: toggleClass,
				addClass: addClass,
				removeClass: removeClass,
				publicMethod: publicMethod,
				validateEmail: validateEmail
			};
    	}
	}

	module.exports = Module.init();

})();