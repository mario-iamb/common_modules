(function(){

    'use strict';

    

    
	const TinySlider = {
		init: function(){
            
            NodeList.prototype.forEach = Array.prototype.forEach;
            const columnSlider = document.querySelectorAll('.my-slider');
            let tnsSlider;

            columnSlider.forEach(item => {
                tnsSlider = tns({
                    container: item,
                    items: 1,
                    slideBy: 'page',
                    autoplay: false,
                });
            });
            
		}
	}

	module.exports = TinySlider.init();

})();