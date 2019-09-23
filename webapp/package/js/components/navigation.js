(function(){

	'use strict';

	const Module = require('../libraries/plugins/Module.js');

	const Nav = {
		init: function(){

			NodeList.prototype.forEach = Array.prototype.forEach;
			// const mobile_menu = document.querySelector('.primary-nav__mobile');
			// const main_menu = document.querySelector('.primary-nav__list');
			// const menu_items = document.querySelectorAll('.primary-nav__list > ul > li');
			// const sub_menu = main_menu.querySelectorAll('li.menu-item-has-children');
			// const page_body = document.querySelector('body');
			const newMobileMenu = document.querySelector('.newheader__mobile');
			const newMenuList = document.querySelector('.primary-nav');
			const activeClass = 'active';
			const inactiveClass = 'off';
			let runInsert = false;

			newMobileMenu.addEventListener('click', function(){
				Module.toggleClass(this, activeClass);
				Module.toggleClass(newMenuList, activeClass);
			});
		}
	}

	module.exports = Nav.init();

})();