(function(){

    'use strict';
    
    const Module = require('../libraries/plugins/Module.js');

	var forms = {
		init: function(){
            
            NodeList.prototype.forEach = Array.prototype.forEach;
            const contactForm = document.getElementById('contact-us');
            const requiredFields = document.querySelectorAll('input.required, textarea.required');
            const emailField = document.getElementById('email');
            const inputError = 'error-field';

            requiredFields.forEach(function(element){
                element.addEventListener('focus',function(){
                    Module.removeClass(element.parentElement, inputError);
                });
            });
            
            if (contactForm) {
                contactForm.addEventListener('submit', function(e){
                    let invalidFields = 0;
                    const emailValue = document.getElementById('email').value;
    
                    requiredFields.forEach(function(element){
                        if (element.value == ''){
                            Module.addClass(element.parentElement, inputError);
                            invalidFields++;
                        }
                    });
    
                    if (invalidFields > 0){
                        e.preventDefault();
                    }
    
                    else if (Module.validateEmail(emailValue) == false){
                        emailField.nextElementSibling.innerHTML = 'Please enter a valid email address';
                        Module.addClass(emailField.parentElement, inputError);
                        e.preventDefault();
                    }
                    else {
                        return
                    }
                });
            }
		}
	}

	module.exports = forms.init();

})();