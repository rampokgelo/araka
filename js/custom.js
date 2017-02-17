$(document).ready(function() { 
    window.paceOptions = {
        // Disable the 'elements' source
        elements: false,

        // Only show the progress on regular and ajax-y page navigation,
        // not every request
        restartOnRequestAfter: false
    }
    var $objanimopen = $('.obj-anim-opening');
    $objanimopen.waypoint(function(direction) {
        if (direction === 'down') {
            $objanimopen.addClass('fadeInUp');
            $objanimopen.removeClass('fadeOutDown');
        } else {
            $objanimopen.removeClass('fadeInUp');
            $objanimopen.addClass('fadeOutDown');
        }
    }, {
        // offset: 'bottom-in-view'
        offset: '75%'
    });
    var $objaniminit = $('.obj-anim-init');
    $objaniminit.waypoint(function(direction) {
        if (direction === 'down') {
            $objaniminit.addClass('fadeInUp');
            $objaniminit.removeClass('fadeOutDown');
        } else {
            $objaniminit.removeClass('fadeInUp');
            $objaniminit.addClass('fadeOutDown');
        }
    }, {
        offset: '75%'
    });
    var $objanimmission = $('.obj-anim-mission');
    $objanimmission.waypoint(function(direction) {
        if (direction === 'down') {
            $objanimmission.addClass('fadeInUp');
            $objanimmission.removeClass('fadeOutDown');
        } else {
            $objanimmission.removeClass('fadeInUp');
            $objanimmission.addClass('fadeOutDown');
        }
    }, {
        offset: '75%'
    });
    var $objanimclient = $('.obj-anim-client');
    $objanimclient.waypoint(function(direction) {
        if (direction === 'down') {
            $objanimclient.addClass('fadeInUp');
            $objanimclient.removeClass('fadeOutDown');
        } else {
            $objanimclient.removeClass('fadeInUp');
            $objanimclient.addClass('fadeOutDown');
        }
    }, {
        offset: '75%'
    });
    $('.parallax-img').parallax({ zIndex: 1 });
});
