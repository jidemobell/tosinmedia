/*********************************************************************************

	Template Name: Photoghor- Photography Portfolio Bootstrap 5 Template
	Description: A perfect template to build beautiful and unique photography/portfolio websites. It comes with nice and clean design.
	Version: 1.0

	Note: This is main js.

**********************************************************************************/

/**************************************************************
	
	STYLESHEET INDEXING
	|
	|
	|___ Sticky Header
	|___ Hero Slider Active
	|___ Testimonial Slider Active
	|___ Portfolio Topside
	|___ Portfolio Bottomside
	|___ Bootstrap4 Tooltip Active
	|___ Portfolio Filter & Popup Active
	|___ Header Menu Effect
	|___ Mobile Menu
	|___ Counter Active
	|___ Fullpage Active
	|
	|
	|___ END STYLESHEET INDEXING

***************************************************************/



(function ($) {
	'use strict';
	



	/* Sticky Header */
	$(window).on('scroll', function () {
		var scrollPos = $(this).scrollTop();
		if (scrollPos > 200) {
			$('.sticky-header').addClass('is-sticky');
		} else {
			$('.sticky-header').removeClass('is-sticky');
		}
	});





	/* Hero Slider Active */
	$('.hero-silder-active').slick({
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: false,
		easing: 'ease-in-out',
		dots: true,
		dotsClass: 'hero-pagination-dots',
		appendDots: $('.hero-pagination')
	});





	/* Testimonial Slider Active */
	$('.testimonial-slider').slick({
		slidesToShow: 2,
		autoplay: true,
		autoplaySpeed: 5000,
		easing: 'ease-in-out',
		dots: false,
		arrows: true,
		prevArrow: '<button class="testimonial-arrow-prev"><i class="fa fa-angle-left"></i></button>',
		nextArrow: '<button class="testimonial-arrow-next"><i class="fa fa-angle-right"></i></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});






	/* Portfolio Topside */
	$('.g-photo-topside').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		fade: true,
		asNavFor: '.g-photo-thumbs',
		dots: true,
		dotsClass: 'g-photo-dots',
		appendDots: $('.g-photo-pagination'),
		arrows: true,
		prevArrow: '<button class="g-photo-arrow-prev"><i class="fa fa-angle-left"></i></button>',
		nextArrow: '<button class="g-photo-arrow-next"><i class="fa fa-angle-right"></i></button>',
		appendArrows: $('.g-photo-arrows'),
		infinite: true,
		adaptiveHeight: true,
	});



	
	/* Portfolio Bottomside */
	$('.g-photo-thumbs').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		asNavFor: '.g-photo-topside',
		dots: false,
		centerMode: true,
		centerPadding: 0,
		focusOnSelect: true,
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000,
	});




	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	  return new bootstrap.Tooltip(tooltipTriggerEl)
	})



	/* Portfolio Filter & Popup Active */
	function portfolioFilterLightgallery(){
		var $gallery = $('.portfolios-wrapper');
		var $boxes = $('.portfolio-item');
		$boxes.hide();

		$gallery.imagesLoaded({
			background: true
		}, function () {
			$boxes.fadeIn();
			$gallery.isotope({
				itemSelector: '.portfolio-item',
				layoutMode: 'masonry',
				masonry: {
					columnWidth: 1,
				}
			});
		});

		$('.portfolio-filters button').on('click', function () {
			
			var filterValue = $(this).attr('data-filter');
			$gallery.isotope({
				filter: filterValue
			});
			$gallery.data('lightGallery').destroy(true);
			$('.portfolios-wrapper').lightGallery({
				selector: filterValue.replace('*', '') + ' .portfolio-zoom-button',
			});

			$('.portfolio-filters button').removeClass('is-checked');
			$(this).addClass('is-checked');

		});

		$('.portfolios-wrapper').lightGallery({
			selector: '.portfolio-item .portfolio-zoom-button'
		});
	}
	portfolioFilterLightgallery();





	/* Header Menu Effect */
	$('.header-navigation-trigger').on('click', function(){
		$(this).toggleClass('is-active');
		$('.main-navigation').toggleClass('is-visible');
	});




	/* Mobile Menu */
	$('nav.main-navigation').meanmenu({
		meanMenuClose: '<img class="black" src="img/icons/icon-close.png" alt="close icon"><img class="white" src="img/icons/icon-close-white.png" alt="close icon">',
		meanMenuCloseSize: '18px',
		meanScreenWidth: '991',
		meanExpandableChildren: true,
		meanMenuContainer: '.mobile-menu',
		onePage: true
	});
	




	/* Counter Active */
	$('.counter-active').counterUp({
		delay: 10,
		time: 1000
	});




	/* Fullpage Active */
	$('#fullpage').fullpage({
		menu: '.section-name',
		navigation: true,
		lockAnchors: false,
		navigationPosition: 'right',
		showActiveTooltip: false,
		anchors:['first-section', 'second-section', 'third-section', 'fourth-section', 'fifth-section'],
		verticalCentered: false,
		responsiveWidth: 991,
		scrollOverflow: true,
		scrollBar: false,
		scrollingSpeed: 400,
		easingcss3: 'ease-out',
		autoScrolling: true,
		fitToSection: false,
		animateAnchor: false,
		recordHistory: true,
		keyboardScrolling: true,
		touchSensitivity: 5,
		normalScrollElementTouchThreshold: 5,
		onLeave: function(index, nextIndex, direction){
            if(nextIndex > 1 && direction =='down'){
                $('.header').addClass('is-sticky');
            } else if(nextIndex === 1) {
                $('.header').removeClass('is-sticky');
            }
        }
	});



})(jQuery);
