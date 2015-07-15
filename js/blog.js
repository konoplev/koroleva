// jQuery to collapse the navbar on scroll
//$(window).scroll(function() {
//    if ($(".navbar").offset().top > 50) {
//        $(".navbar-fixed-top").addClass("top-nav-collapse");
//    } else {
//        $(".navbar-fixed-top").removeClass("top-nav-collapse");
//    }
//});

$(document).ready(function() {
        $("#search_button").click(function() {
          var search_input = $("#search_input").val();
          if ( search_input ) {
            var google_url = "http://yandex.ru/search?text="
              + search_input
              + " site:konoplev.me ";
            window.location.href = google_url;
          }
        });
      });

// Navigation Scripts to Show Header on Scroll-Up
jQuery(document).ready(function(a){var b=1170;if(a(window).width()>b){var c=a(".navbar-custom").height();a(window).on("scroll",{previousTop:0},function(){var b=a(window).scrollTop();b<this.previousTop?b>0&&a(".navbar-custom").hasClass("is-fixed")?a(".navbar-custom").addClass("is-visible"):a(".navbar-custom").removeClass("is-visible is-fixed"):(a(".navbar-custom").removeClass("is-visible"),b>c&&!a(".navbar-custom").hasClass("is-fixed")&&a(".navbar-custom").addClass("is-fixed")),this.previousTop=b})}});

var notInProgress = true;

jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		if ( $(this).scrollTop() > offset ) {
			setVisible();
		} else {
			$back_to_top.removeClass('cd-is-visible cd-fade-out');
		}
		if( $(this).scrollTop() > offset_opacity ) {
			$back_to_top.addClass('cd-fade-out');

		}
	});

	function setVisible() {
	    $back_to_top.addClass('cd-is-visible');
		hideItSlowly();

	}

	function hideItSlowly() {
	    if(notInProgress) {
	    	notInProgress = false;
			setTimeout(function() {if(!$back_to_top.mouseIsOver()) $back_to_top.addClass('cd-fade-out'); else $back_to_top.removeClass('cd-fade-out')}, 3000);
			setTimeout(function() {if(!$back_to_top.mouseIsOver()) {$back_to_top.removeClass('cd-is-visible cd-fade-out'); notInProgress = true;} else {hideItSlowly()}}, 5000);
		}
	}

	jQuery.fn.mouseIsOver = function () {
        return $(this).parent().find($(this).selector + ":hover").length > 0;
    };

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});

function hideAndShow(divId) {
  if($('#' + divId).is(":visible") ) {
		$("#plus").text($("#plus").html().replace("-", "+"));
		$('#' + divId).slideUp();
  } else {
		$("#plus").text($("#plus").html().replace("+", "-"));
		$('#' + divId).slideDown();
  }
}