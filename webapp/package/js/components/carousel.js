(function(){

    'use strict';

    var $ = require('jquery');
    var slick = require('../libraries/plugins/slick');
	
	var Carousel = {
		init: function(){
            
            var ImageCarousel = $('.carousel__card-media');
            var sliderOne = $('.sliderOne__card');

            ImageCarousel.on('click',function(){
                console.log('clicked');
            });

            $('.carousel__card-media').slick({
                dots: true,
                arrows: false,
                speed: 400,
                infinite: true,
                //adaptiveHeight: true,
                fade: true,
                autoplay: false,
                //autoplaySpeed: 6000,
                pauseOnHover: false
            });

            
            if (sliderOne.find('.slide').length > 1) {
                sliderOne.slick({
                    dots: true,
                    arrows: false,
                    speed: 400,
                    infinite: true,
                    fade: true,
                    autoplay: false,
                    pauseOnHover: false
                });
            }
		}
	}

	module.exports = Carousel.init();

})();