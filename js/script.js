
// Autogenerated, do not edit. All changes will be undone.
// @supeerrookie

var $ = jQuery.noConflict();
$(document).ready(function($) {

	var loadBgImg = false;
	var getHomepages = false;
	var $winWidth = $(window).width();
	var $winHeight = $(window).height();

	$(function(){
	    var windowH = $(window).height();
	    var wrapperH = $('.fullheight').height();

	    if(windowH > wrapperH) {                            
	        $('.fullheight').css( {'height':($(window).height())+'px'});
	    }

	    $(window).resize(function(){
	        var windowH = $(window).height();
	        var wrapperH = $('.fullheight').height();
	        var differenceH = windowH - wrapperH;
	        
	        var newH = wrapperH + differenceH;
	        var truecontentH = $('.fullheight').height();

	        if(windowH > truecontentH) {
	            $('.fullheight').css('height', (newH)+'px');
	        }

	    })
	});

	// function cekLoader(){
	// 	if( loadBgImg == true ){ 	
	// 		var xx2 = setTimeout( function(){
	// 			$('#loading').removeClass('active');
	// 			$('.banner').addClass('active');
	// 			$('.banner .layer').addClass('active');
	// 			$('.banner .layer .layer-text-tagline > h3').addClass('animated');
	// 			clearTimeout(xx2);
	// 		},2000);	
	// 	}
	// }

	// $('.bgimg-loaded').bgLoaded({
	// 	doneAllLoaded : function(){
	// 		loadBgImg = true;
	// 		cekLoader();			
	// 	}
	// });
	
	// $(function() {
	// 	var header = $('.header');
	// 	var url = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
	// 	if(url == 'alamsutera' || url == 'contact' || url == 'news' || url == 'detail'){
	// 		header.addClass('black');
	// 		scrollTop();
	// 	}else{
	// 		header.removeClass('black');
	// 		scrollTop();
	// 	}

	// 	var $black = document.getElementById("black");
	// 	if($black){
	// 		header.addClass('black');
	// 		scrollTop();
	// 	}	
	// });

	$(function() {
		var time = 7;
		var $bar,
		    $slick,
		    isPause,
		    tick,
		    percentTime;

		$slick = $('.slider');

		$slick.slick({
		    draggable: true,
		    adaptiveHeight: false,
		    dots: true,
		    mobileFirst: true,
		    pauseOnDotsHover: true,
		    infinite: true,
			fade: true,
			dots: false,
			cssEase: 'linear',
			arrows: true,
			nextArrow: '<div  class="slick-next slick-arrow"><i class="fa fa-chevron-circle-right fa-3x"></i></div>',
	  		prevArrow: '<div  class="slick-prev slick-arrow"><i class="fa fa-chevron-circle-left fa-3x"></i></div>',
		});

		$bar = $('.slider-progress .progress');

		function startProgressbar() {
		    resetProgressbar();
		    percentTime = 0;
		    isPause = false;
		    tick = setInterval(interval, 10);
		}

		function interval() {
		    if (isPause === false) {
		        percentTime += 1 / (time + 0.1);
		        $bar.css({
		            width: percentTime + "%"
		        });
		        if (percentTime >= 100) {
		            $slick.slick('slickNext');
		            startProgressbar();
		        }
		    }
		}

		function resetProgressbar() {
		    $bar.css({
		        width: 0 + '%'
		    });
		    clearTimeout(tick);
		}

		startProgressbar();

	});

	

    $(function() {
		$( "#hamburger" ).click(function() {
			$( "ul.res" ).slideToggle( 300, function() {

			});
		});
	});

	$(function() {

		$('#collapse').on('shown.bs.collapse', function() {
			$('#hamburger').addClass('open');
			$('body').addClass('body_locked');
		}).on('hidden.bs.collapse', function() {
			$('#hamburger').removeClass('open');
			$('body').removeClass('body_locked');
		});

	});

	$(function() {
	


	})


	$( function() {
	
	    $('.top-nav ul li > .menu a').click(function(e) {
	    	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		      if (target.length) {
		        $('html,body').animate({
		          scrollTop: target.offset().top
		        }, 500);
		        return false;
		      }
		    }
	       
	    });


	});



	$( function() {
		var $grid = $('.grid').imagesLoaded( function() {
			$grid.masonry({
			    itemSelector: '.grid-item',
			    percentPosition: true,
			    columnWidth: '.grid-sizer'
			}); 
		});

		var $newGrid = $('.grid');
		$newGrid.masonry({
		    itemSelector: '.grid-item',
		    percentPosition: true,
		    columnWidth: '.grid-sizer'
		}); 
	});

    $( function() {
		$(".fancybox").fancybox({

	        openEffect: 'none',
	        closeEffect: 'none',
	        width: 400,
	        height: 300,
	        autoDimensions: true,
	        overlayShow       : true,
		    centerOnScroll   : true,
	        tpl: {
		        next: '<a class="fancybox-nav fancybox-next" href="javascript:;"><span><i class="fa fa-chevron-circle-right fa-2x " aria-hidden="true"></i></span></a>',
	  			prev: '<a class="fancybox-nav fancybox-prev" href="javascript:;"><span><i class="fa fa-chevron-circle-left fa-2x " aria-hidden="true"></i></span></a>',
	  			closeBtn: '<a class="fancybox-item fancybox-close" href="javascript:;"><span><i class="fa fa-times fa-2x " aria-hidden="true"></i></span></a>'
	  		}
	    });

	    $(".fancybox.iframe").fancybox({

	        openEffect: 'none',
	        closeEffect: 'none',
	        width: 960,
	        height: 600,
	        autoDimensions: true,
	        overlayShow       : true,
		    centerOnScroll   : true,
	        tpl: {
		        next: '<a class="fancybox-nav fancybox-next" href="javascript:;"><span><i class="fa fa-chevron-circle-right fa-2x " aria-hidden="true"></i></span></a>',
	  			prev: '<a class="fancybox-nav fancybox-prev" href="javascript:;"><span><i class="fa fa-chevron-circle-left fa-2x " aria-hidden="true"></i></span></a>',
	  			closeBtn: '<a class="fancybox-item fancybox-close" href="javascript:;"><span><i class="fa fa-times fa-2x " aria-hidden="true"></i></span></a>'
	  		}
	    });

	});

    $(function() {

    	$(".slick-amenities").slick({
			infinite: false,
		    slidesToShow: 1,
			slidesToScroll: 1,
			// fade: true,
			cssEase: 'linear',
			speed: 800,
			arrows: true,
			nextArrow: '<div class="slick-next slick-arrow"><i class="fa fa-chevron-circle-right fa-3x"></i></div>',
		  	prevArrow: '<div class="slick-prev slick-arrow"><i class="fa fa-chevron-circle-left fa-3x"></i></div>'
		});

		$('.news-slick').slick({
		    infinite: false,
			slidesToShow: 3,
			slidesToScroll: 3,
			autoplay: false,
			speed: 1400,
			arrows: true,
			nextArrow: '<div class="slick-next slick-arrow"><i class="fa fa-chevron-circle-right fa-3x"></i></div>',
	  		prevArrow: '<div class="slick-prev slick-arrow"><i class="fa fa-chevron-circle-left fa-3x"></i></div>'
		});

		$('.promo-slick').slick({
		    infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: false,
			speed: 1000,
			arrows: true,
			nextArrow: '<div  class="slick-next slick-arrow"><i class="fa fa-chevron-circle-right fa-3x"></i></div>',
	  		prevArrow: '<div  class="slick-prev slick-arrow"><i class="fa fa-chevron-circle-left fa-3x"></i></div>',
	  		responsive: [{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					autoplay: true
				}
			}, {
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					speed: 1500,
					arrows: false,
					autoplay: true
				}
			}]
		});

	});


    $(function() {
		$( ".layer-text > i.down-toggle" ).click(function() {
			$( "body" ).animate({
		        scrollTop: parseInt($("#content").offset().top)
		    }, 1000);
		});
	});


    $(function() {
	    jQuery.validator.addMethod("mobilephone", function (phone_number, element) {
			phone_number = phone_number.replace(/\s+/g, "");
	    	return this.optional(element) || phone_number.length > 8 &&
	        phone_number.match(/^08\d{9,10}$/);
		}, "Valid Phone Number Please");

		  jQuery.validator.addMethod("phone", function (phone_number, element) {
			phone_number = phone_number.replace(/\s+/g, "");
	    	return this.optional(element) || phone_number.length > 8 &&
	        phone_number.match(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/);
		}, "Valid Phone Number Please");


		$('#contact_form').validate({
			rules:{firstname:{required: true}, lastname:{required: true}, email:{required: true, email:true},  ofphone:{required: false, phone: false}, mphone:{required: true, mobilephone:true}, subject:{required: true}, msg:{required: true} },
		    messages: { firstname: "Your Firstname Please", lastname: "Your Lastname Please",
		     	email: "Your Email Please",
		    },

		    errorElement: "span",
		    errorClass: "help-block",

		    highlight: function (element, errorClass, validClass) {
		        $(element).closest('.row').addClass('has-error');
		    },

		    unhighlight: function (element, errorClass, validClass) {
		        $(element).closest('.row').removeClass('has-error');
		    },

		    // errorPlacement: function (error, element) {
		    //     element.attr("span", error.text());
		    // },

			submitHandler: function(form) {
		        $.ajax({
		            url: './inc/send_mail.php',
		            type: form.method,
		            data: $(form).serialize(),
		            success: function(response) {
		            	if(response == 'true'){
		            		$('#answers').html('<i class="fa fa-refresh fa-spin fa-fw"></i> Sending Data');
		               		setTimeout(function() {
							  window.location.href = "thank-you.html";
							  $('#answers').html('');
							}, 2500);

		            	}if(response == 'false'){
		            		$('#answers').html('Fail to send request. Please try again in few minutes.');
		                	$('#contact_form').trigger('reset');
		            	}
		            }            
		        });
		    }

		});
	});

	$(function() {

		  var $window           = $(window),
		      win_height_padded = $window.height() * 1.1,
		      isTouch           = Modernizr.touch;

		  if (isTouch || $.browser.mobile) { $('.revealOnScroll').addClass('animated'); }

		  $window.on('scroll', revealOnScroll);

		  function revealOnScroll() {
		    var scrolled = $window.scrollTop(),
		        win_height_padded = $window.height() * 1.1;

		    // Showed...
		    $(".revealOnScroll:not(.animated)").each(function () {
		      var $this     = $(this),
		          offsetTop = $this.offset().top;

		      if (scrolled + win_height_padded > offsetTop) {
		        if ($this.data('timeout')) {
		          window.setTimeout(function(){
		            $this.addClass('animated ' + $this.data('animation'));
		            $('#contact_form').trigger('reset');
		          }, parseInt($this.data('timeout'),10));
		        } else {
		          $this.addClass('animated ' + $this.data('animation'));
		        }
		      }
		    });
		    // Hidden...
		   $(".revealOnScroll.animated").each(function (index) {
		      var $this     = $(this),
		          offsetTop = $this.offset().top;
		      if (scrolled + win_height_padded < offsetTop) {
		        
		      }
		    });
		  }

		  revealOnScroll();
	});

});

function scrollTop(){
	$(window).scroll(function() {
		var header = $('.header');
		var Alogo = $('.logo a');
		var scroll = $(window).scrollTop();
			if (scroll >= 100) {
				header.addClass('active');
				Alogo.addClass('active');
			} else {
				header.removeClass('active');
				Alogo.removeClass('active');

			}
	});
}
// function createMaps() {
// 	var $maps = document.getElementById('maps');
// 	if( $maps ){
// 		map = new GMaps({
// 		  div: '#maps',
// 		  lat: -6.221981, 
// 		  lng: 106.648857,
// 		  title: 'THE LANA APARTEMENT',
// 		  zoom: 16,
// 		  mapTypeId: google.maps.MapTypeId.ROADMAP
		  
// 		});
// 		marker = map.addMarker({
//           lat: -6.221981, 
// 		  lng: 106.648857,
// 		  icon: "./images/favicon.ico"
		    
//   		});
//   		marker.addListener('click', function() {
// 		    window.open('https://www.google.com/maps/place/Jl.+Jalur+Sutera+Bar.+No.16,+Panunggangan+Tim.,+Pinang,+Kota+Tangerang,+Banten+15143,+Indonesia/@-6.2226528,106.6499888,17z/data=!3m1!4b1!4m5!3m4!1s0x2e69f95fffbaf8f9:0xd074577a61f4e430!8m2!3d-6.2226528!4d106.6521775','_blank');
// 		});
// 	}
// }