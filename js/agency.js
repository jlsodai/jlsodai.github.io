/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

var headerHeight = $(window).height();
$('header').css('height',headerHeight);


var headerPadding = (headerHeight - $('header .intro-text').height()) / 2;

$('header .intro-text').css({
	"padding-top" : headerPadding,
	"padding-bottom" : headerPadding
});

$(window).resize(function(){'use strict',
	$('header').css('height',headerHeight);
	$('header .intro-text').css({
		"padding-top" : headerPadding,
		"padding-bottom" : headerPadding
	});
});

$('.count').each(function () {
  var $this = $(this);
  jQuery({ counter: 0 }).animate({ counter: $this.text() }, {
    duration: 1000,
    easing: 'swing',
    step: function () {
      $this.text(Math.ceil(this.counter));
    }
  });
});