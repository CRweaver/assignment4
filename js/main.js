/*global $ */
(function () {
    'use strict';
    //select dom element readmore a and create event on click
    $('.read-more a').click(function (e) {
        //prevents the reloading of page
        e.preventDefault();
        //define the variable as paragraph
        var el = $(e.target),
            para = el.siblings('p');
            //reveal the paragraph (500 words) and replace element text with readless
        if (el.text() === "Read more >") {
            para.slideDown(500, function () {
                el.text('Read less <');
            });
        } else {
            //hide the paragraph (500 words) and replace element text with readmore
            para.slideUp(500, function () {
                el.text('Read more >');
            });
        }

    });

    /* Learn more link click handler */
    $('#sidebar .learn-more a').click(function (e) {
        e.preventDefault();

        var el = $(e.target);

        el.siblings('p').slideDown();

        el.hide();
    });
}());