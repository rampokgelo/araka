$(document).ready(function() {
    window.paceOptions = {
        // Disable the 'elements' source
        elements: false,

        // Only show the progress on regular and ajax-y page navigation,
        // not every request
        restartOnRequestAfter: false
    }
    $('.parallax-img').parallax({ zIndex: 1 });

    // Animate
    // var $objanimopen = $('.obj-anim-opening');
    // $objanimopen.waypoint(function(direction) {
    //     if (direction === 'down') {
    //         $objanimopen.addClass('fadeInUp');
    //         $objanimopen.removeClass('fadeOutDown');
    //     } else {
    //         $objanimopen.removeClass('fadeInUp');
    //         $objanimopen.addClass('fadeOutDown');
    //     }
    // }
    // , {
    //     // offset: 'bottom-in-view'
    //     offset: '0%'
    // }
    // );
    // var $objaniminit = $('.obj-anim-init');
    // $objaniminit.waypoint(function(direction) {
    //     if (direction === 'down') {
    //         $objaniminit.addClass('fadeInUp');
    //         $objaniminit.removeClass('fadeOutDown');
    //     } else {
    //         $objaniminit.removeClass('fadeInUp');
    //         $objaniminit.addClass('fadeOutDown');
    //     }
    // }
    // , {
    //     offset: '0%'
    // }
    // );
    // var $objanimmission = $('.obj-anim-mission');
    // $objanimmission.waypoint(function(direction) {
    //     if (direction === 'down') {
    //         $objanimmission.addClass('fadeInUp');
    //         $objanimmission.removeClass('fadeOutDown');
    //     } else {
    //         $objanimmission.removeClass('fadeInUp');
    //         $objanimmission.addClass('fadeOutDown');
    //     }
    // }
    // , {
    //     offset: '0%'
    // }
    // );
    // var $objanimclient = $('.obj-anim-client');
    // $objanimclient.waypoint(function(direction) {
    //     if (direction === 'down') {
    //         $objanimclient.addClass('fadeInUp');
    //         $objanimclient.removeClass('fadeOutDown');
    //     } else {
    //         $objanimclient.removeClass('fadeInUp');
    //         $objanimclient.addClass('fadeOutDown');
    //     }
    // }
    // , {
    //     offset: '0%'
    // }
    // );
    // var $objanimleft = $('.obj-anim-left');
    // $objanimleft.waypoint(function(direction) {
    //     if (direction === 'down') {
    //         $objanimleft.addClass('fadeInLeft');
    //         $objanimleft.removeClass('fadeOutLeft');
    //     } else {
    //         $objanimleft.removeClass('fadeInLeft');
    //         $objanimleft.addClass('fadeOutLeft');
    //     }
    // }
    // , {
    //     // offset: 'bottom-in-view'
    //     offset: '0%'
    // }
    // );
    // var $objanimright = $('.obj-anim-right');
    // $objanimright.waypoint(function(direction) {
    //     if (direction === 'down') {
    //         $objanimright.addClass('fadeInRight');
    //         $objanimright.removeClass('fadeOutRight');
    //     }
    //     else {
    //         $objanimright.removeClass('fadeInRight');
    //         $objanimright.addClass('fadeOutRight');
    //     }
    // }
    // , {
    //     // offset: 'bottom-in-view'
    //     offset: '0%'
    // }
    // );

    var $objanimopen = $('.obj-anim-opening');
    $objanimopen.waypoint(function() {
        $objanimopen.addClass('fadeInUp');
    }, {
        // offset: 'bottom-in-view'
        offset: '80%'
    });
    var $objaniminit = $('.obj-anim-init');
    $objaniminit.waypoint(function() {
        $objaniminit.addClass('fadeInUp');
    }, {
        offset: '80%'
    });
    var $objanimmission = $('.obj-anim-mission');
    $objanimmission.waypoint(function() {
        $objanimmission.addClass('fadeInUp');
    }, {
        offset: '80%'
    });
    var $objanimclient = $('.obj-anim-client');
    $objanimclient.waypoint(function() {
        $objanimclient.addClass('fadeInUp');
    }, {
        offset: '80%'
    });
    var $objanimleft = $('.obj-anim-left');
    $objanimleft.waypoint(function() {

        $objanimleft.addClass('fadeInLeft');

    }, {
        // offset: 'bottom-in-view'
        offset: '80%'
    });
    var $objanimright = $('.obj-anim-right');
    $objanimright.waypoint(function() {

        $objanimright.addClass('fadeInRight');

    }, {
        // offset: 'bottom-in-view'
        offset: '80%'
    });

});
