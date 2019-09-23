(function(){

	'use strict';  
	
	var APP = {
		init: function(){
			//require('./components/es6');
			//require('./components/navigation');
			// require('./components/form-validation');
			// require('./components/carousel');
			// require('./components/selectFx');

			// require('./components/objects');
			// require('./components/class-patterns');
			require('./components/classes');


			// require('./components/tabs');
			// require('./components/tiny-slider');
		}
	};

	var MY_APP = Object.create(APP);
		MY_APP.init();

}());