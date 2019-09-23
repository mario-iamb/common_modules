(function(){

	'use strict';

	const Module = require('../libraries/plugins/Module.js');

	const Nav = {
		init: function(){

			NodeList.prototype.forEach = Array.prototype.forEach;
			const mobile_menu = document.querySelector('.primary-nav__mobile');
			const main_menu = document.querySelector('.primary-nav__list');
			const menu_items = document.querySelectorAll('.primary-nav__list > ul > li');
			const sub_menu = main_menu.querySelectorAll('li.menu-item-has-children');
			const page_body = document.querySelector('body');
			const activeClass = 'active';
			const inactiveClass = 'off';
			let runInsert = false;
				
			const BackBtn = function(){
				const back_button = document.createElement('a');
				back_button.classList.add('back-btn', inactiveClass);
				back_button.href = '#';
				back_button.innerHTML = 'Back';

				if (!runInsert) {
					sub_menu.forEach(function(element) {
						element.insertBefore(back_button.cloneNode(true), element.firstChild);
					});

					runInsert = true;
				}

				sub_menu.forEach(function(element) {
					element.addEventListener('click', function (e) {
						if (e.target.classList.contains('back-btn')) {
							Module.addClass(e.target, inactiveClass);
							Module.removeClass(element.lastElementChild, activeClass);
							Module.removeClass(element, activeClass);

							menu_items.forEach(function(value) {
								Module.removeClass(value, inactiveClass);
							});

							e.stopPropagation();
							e.preventDefault();
						}
						else {}
					});
				});
			}

			const WindowResize = function(){
				if (window.innerWidth > 1024) {
					Module.removeClass(mobile_menu, activeClass);
					Module.removeClass(main_menu, activeClass);

					menu_items.forEach(function(value) {
						Module.removeClass(value, inactiveClass);
						Module.removeClass(value, activeClass);
					});

					sub_menu.forEach(function(value) {
						Module.removeClass(value.lastElementChild, activeClass);
						const BtnRemove = document.querySelectorAll('.back-btn')[0];
						if(BtnRemove){
							BtnRemove.parentNode.removeChild(BtnRemove);
						}
					});

					Module.removeClass(page_body, activeClass);

					runInsert = false; 
				}
			}

			mobile_menu.addEventListener('click', function(){
				Module.toggleClass(this, activeClass);
				Module.toggleClass(main_menu, activeClass);
				Module.toggleClass(page_body, activeClass); 
				BackBtn();
			});

			menu_items.forEach(function(element) {
				element.addEventListener('click', function(e) {
					const childList = element.querySelector('ul:not(.active)');
					
					if (window.innerWidth <= 1024 && childList){
						Module.addClass(element, activeClass);
						Module.addClass(element.lastElementChild, activeClass);
						Module.removeClass(element.firstElementChild, inactiveClass);

						const inactive_items = document.querySelectorAll(".primary-nav__list > ul > li:not(.active)");
						inactive_items.forEach(function(element) {
							Module.addClass(element, inactiveClass);
						});

						e.preventDefault(); 
					}
					else {}
				});
			});
			
			window.onresize = function() {
				WindowResize();
			};
		}
	}

	module.exports = Nav.init();

})();