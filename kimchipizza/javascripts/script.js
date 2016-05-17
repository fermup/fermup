// Main Top Slider //



// Slideshow 1

      $("#slider1").responsiveSlides({

        speed: 1000,

        timeout: 4000, 

        pager: false,

        nav: true,

        prevText: "",

        nextText: "",

        navContainer: $('#cbp-bicontrols'),

      });



// Navigation JS //



$('#clickme').click(function () {

$(this).toggleClass("active no-active");

$('#cart').toggleClass("open close");

});





// Inview Animation for Overview Thumbnails //

$('.thumbnail-section').bind('inview', function (event, visible) {

  if (visible == true) {

    $('.thumbnail-section').addClass('animate');

  } else {

    // element has gone out of viewport

  }

});





// iosSlider JS Gallery//

$('.iosSlider').iosSlider({

					snapToChildren: true,

					desktopClickDrag: true,

					infiniteSlider: true,

					snapSlideCenter: true,

					onSlideChange: slideChange,

					navNextSelector: $('.next'),

				    navPrevSelector: $('.prev'),

				});

function slideChange(args) {

				$('.slider .item').removeClass('active');

				$('.slider .item:eq(' + (args.currentSlideNumber - 1) + ')').addClass('active');	

			}





// iosSlider JS Sponsors//



$('.iosSlider_sponsors').iosSlider({

					snapToChildren: true,

					desktopClickDrag: true,

					infiniteSlider: true,

					navNextSelector: $('.controls-sponsors.next'),

				    navPrevSelector: $('.controls-sponsors.prev'),

				});









// Smoothscroll //



$(document).ready(function() {

  function filterPath(string) {

  return string

    .replace(/^\//,'')

    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')

    .replace(/\/$/,'');

  }

  var locationPath = filterPath(location.pathname);

  var scrollElem = scrollableElement('html', 'body');

 

  $('a.scroll[href*=#]').each(function() {

    var thisPath = filterPath(this.pathname) || locationPath;

    if (  locationPath == thisPath

    && (location.hostname == this.hostname || !this.hostname)

    && this.hash.replace(/#/,'') ) {

      var $target = $(this.hash), target = this.hash;

      if (target) {

        var targetOffset = $target.offset().top;

        $(this).click(function(event) {

          event.preventDefault();

          $(scrollElem).animate({scrollTop: targetOffset}, 400, function() {

            location.hash = target;

          });

        });

      }

    }

  });

 

  // use the first element that is "scrollable"

  function scrollableElement(els) {

    for (var i = 0, argLength = arguments.length; i <argLength; i++) {

      var el = arguments[i],

          $scrollElement = $(el);

      if ($scrollElement.scrollTop()> 0) {

        return el;

      } else {

        $scrollElement.scrollTop(1);

        var isScrollable = $scrollElement.scrollTop()> 0;

        $scrollElement.scrollTop(0);

        if (isScrollable) {

          return el;

        }

      }

    }

    return [];

  }

 

});











