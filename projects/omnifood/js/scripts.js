// ------------------------------------------------------------------------
// : FUNCTIONS
// ------------------------------------------------------------------------

// Displays sticky header after scroll threshold is passed and hides it when scrolled back top

var stickyHeader = $('nav');
var stickyClass = 'sticky-nav';
var scrollThreshold = $('#features').offset().top -80;
var windowHeight = $(window).height();

// Opacity is set to zero here in case if browser doesn't support js and content still can be seen (fades in on scroll by default)

$('.features-fade').css('opacity', '0');
$('.cities-fade').css('opacity', '0');
$('.app-screen').css('opacity', '0');

$(document).scroll(function() {

    var scroll = $(document).scrollTop();

    if (scroll >= scrollThreshold) {
        stickyHeader.addClass(stickyClass).stop(true).fadeTo(400, 1);
    } else if (scroll > 300 && scroll < scrollThreshold) {
        stickyHeader.fadeTo(400, 0);
    } else if (scroll < 300 ) {
        stickyHeader.removeClass(stickyClass).stop(true).fadeTo(10, 1);
    }

    // Fade in featured and cities sections on scroll

    if (scroll >= $('.features-fade').offset().top - (windowHeight * 0.5)) {
        $('.features-fade').fadeTo(400, 1);
    }

    if (scroll >= $('.cities-fade').offset().top - (windowHeight * 0.5)) {
        $('.cities-fade').fadeTo(400, 1);
    }

    // Fade in app image

    if (scroll >= $('.section-steps').offset().top - (windowHeight * 0.5)) {
        $('.app-screen').animate(
            { opacity: 1 },
            { queue: false, duration: 400 }
        );
    }

    // Pulse premium plan

    if (scroll >= $('.section-plans').offset().top - (windowHeight * 0.3)) {
      $('#premium-plan').addClass('pulse-box');
    }
});


// Scroll to anchor link when link is clicked

$('.scrollTo').click(function() {
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top -60
    }, 1000);
    return false;
});

// Mobile navigation

$('.mobile-nav-icon').click(function() {
    var nav = $('.main-nav');
    var icon = $('.mobile-nav-icon i');

    nav.slideToggle(200);

    if(icon.hasClass('ion-navicon-round')) {
        icon.addClass('ion-close-round');
        icon.removeClass('ion-navicon-round');
    } else {
        icon.addClass('ion-navicon-round');
        icon.removeClass('ion-close-round');
    }
});

// Map

function initMap() {

    // TODO: temporary removed till cookie consent is added
    // var startLatLng = { lat: 38.7320369, lng: -8.9756923 };

    // var map = new google.maps.Map(document.getElementById('map'), {
    //     center: startLatLng,
    //     scrollwheel: false,
    //     zoom: 11
    // });

    // var marker = new google.maps.Marker({
    //     map: map,
    //     position: { lat: 38.7222524, lng: -9.1393366 },
    //     title: "Omnifood Lisbon HQ",
    //     icon: "https://maps.google.com/mapfiles/ms/icons/purple.png"
    // });
}

// ------------------------------------------------------------------------
// : MAP INITIALIZATION
// ------------------------------------------------------------------------

if(window.google) {
  initMap();
} else {

  var waitForMap = setInterval(function() {

    if(window.google) {
      initMap();
      clearInterval(waitForMap);
    }
  }, 100);
}
