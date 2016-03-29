/*$(function(){
    var frame = $('.frame')
      , scrollTop = 0
      , frameHeight = frame.height()
      , frameTop = frame.offset().top
      , screen = $(window)
      , w = screen.width()
      , h = 0
      , k = 1900/w;
    
    screen.scroll(function(){
        scrollTop = $(this).scrollTop();
        //обход списка фреймов
        animate();
    });
    
    function animate(){
        if (scrollBottom >= 1250/k) {                              //from 1250 to (2250-screenHeight)
            //$('.l1').css('transform', 'translate(0, '+ (100+scrollBottom) +'px)');              //to 2250
            //$('.l2').css('transform', 'translate(0, '+ (scrollBottom)/1.1 +'px)');          //from 785px to 1315px = 530px
            //$('.l3').css('transform','translate(0, '+  (scrollBottom)/1.3 +'px)');
            //$('.l1').clearQueue().animate({'top':(scrollBottom) +'px'}, 100);
            //$('.l4').css('transform', 'translate(0, '+ (scrollBottom)/2 +'px)');
        }
    }
    
    resized();
    
    function resized(){
        w = screen.width();
        $('.layout')
            .attr('width', w);
        $('.layout').each(function(i, e){
            $(e).css({'top': $(e).position().top/k});
        });
    }
    */
    /*
    screen.resize(function(){
        resized();
    });
    
    function animate(frame){
        var frameHeight = frame.height()
          , frameTop = frame.offset().top;
           // console.log((scrollBottom)/k);
        if (scrollBottom >= 1250/k) {                              //from 1250 to (2250-screenHeight)
            $('.l1').attr('y', (scrollBottom) +'px');              //to 2250
            $('.l2').attr('y', (scrollBottom)/1.1 +'px');          //from 785px to 1315px = 530px
            
            $('.l3').attr('y', (scrollBottom)/1.3 +'px');
            $('.l4').attr('y', (scrollBottom)/2 +'px');
        }
    
});

}*//*
$(document).ready(function() {
    $(window).bind('scroll',function(e){
    	parallaxScroll();
    });
    
	$('a.manned-flight').click(function(){
    	$('html, body').animate({
    		scrollTop:0
    	}, 1000, function() {
	    	parallaxScroll();
		});
    	return false;
	});
    $('a.frameless-parachute').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#frameless-parachute').offset().top
    	}, 1000, function() {
	    	parallaxScroll();
		});
    	return false;
    });
    $('a.english-channel').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#english-channel').offset().top
    	}, 1000, function() {
	    	parallaxScroll();
		});
    	return false;
    });
	$('a.about').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#about').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); 
		});
    	return false;
    });
    
    $('nav#primary a').hover(
    	function () {
			$(this).prev('h1').show();
		},
		function () {
			$(this).prev('h1').hide();
		}
    );
    
});
*/
/*
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('.l1').css('y',((scrolled*1.25))+'px');
	$('.l2').css('y',((scrolled*1.5))+'px');
	$('#parallax-bg3').css('top',(0-(scrolled*.75))+'px');
}

*/



var frame = null
  , frameHeight = null
  , screen = null
  , h = null
  , w = null
  , k = null
  , scrollTop = null
  , scrollBottom = null
  , scrollStart = null
  , scrollEnd = null;

$(function() {
    frame = $('.frame');
    screen = $(window);
    h = screen.height();
    w = screen.width();
    k = 1900/w;//1;
    screen.scroll(function(){
    	parallaxScroll();
    });
});

function parallaxScroll(){
    scrollTop = $(window).scrollTop();
    scrollBottom = scrollTop + h;
    scrollStart = 1260/k;
    scrollEnd = 2250/k;
    if (scrollBottom >= scrollStart
     && scrollBottom <= scrollEnd) {
        $('.l1').css({'y':820+(scrollBottom-scrollStart)*velocity(1700,820) +'px'});
        $('.l2').css({'y':785+(scrollBottom-scrollStart)*velocity(1315,785) +'px'});
        $('.l3').css({'y':630+(scrollBottom-scrollStart)*velocity(790,630) +'px'});
    }
    scrollStart = scrollEnd;
    scrollEnd = 3200/k+scrollEnd;
    if (scrollTop >= scrollStart
     && scrollBottom <= scrollEnd) {
        $('.l5').css({'y':320+(scrollBottom-scrollStart)*velocity(250,320) +'px'});
        $('.l6').css({'y':2775+(scrollBottom-scrollStart)*velocity(2500,2775) +'px'});
    }
    scrollStart = scrollEnd;
    scrollEnd = 1900/k+scrollEnd;
    if (scrollTop >= scrollStart
     && scrollBottom <= scrollEnd) {
        $('.l7').css({'y':760+(scrollBottom-scrollStart)*velocity(300,760) +'px'});
    }
    scrollStart = scrollEnd;
    scrollEnd = 1900/k+scrollEnd;
    if (scrollTop >= scrollStart
     && scrollBottom <= scrollEnd) {
        $('.l8').css({'y':130+(scrollBottom-scrollStart)*velocity(630,130) +'px'});
        $('.l9').css({'y':780+(scrollBottom-scrollStart)*velocity(780,900) +'px'});
        $('.l10').css({'y':130+(scrollBottom-scrollStart)*velocity(520,130) +'px'});
    }
}
function velocity(a1,b1){
    //путь анимации делить на путь скролла
    return (a1-b1)/(scrollEnd-scrollStart);
}