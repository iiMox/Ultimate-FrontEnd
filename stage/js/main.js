$(function () {
    'use strict'

    $(".toggle-sidebar").on("click", function () {

        $(".content-area, .sidebar").toggleClass("no-sidebar");

    });

    // Toggle Submenu

    $(".toggle-submenu").on("click", function () {

        let myClickedItem = $(this);

        myClickedItem.find('i').toggleClass("fa-angle-right fa-angle-down");

        myClickedItem.next('.child-links').slideToggle();

    });

    // Toggle Full Screen

    $(".toggle-fullscreen").on("click", function () {

        $(this).toggleClass("full-screen");

        if ($(this).hasClass("full-screen")) {

            openFullscreen();

        } else {

            closeFullscreen();

        }

    })

    // Toggle Settings

    $(".toggle-settings").on("click", function () {

        $(this).find("i").toggleClass("fa-spin");

        $(this).parent().toggleClass("hide-settings");

    })

    // Switch Color Theme 

    var themesClasses = [];

    $(".color-options li").each(function () {
        themesClasses.push($(this).data('theme'));
    })

    $(".color-options li").on("click", function () {

        $(this).addClass("active").siblings().removeClass("active");

        $("body").removeClass(themesClasses.join(" ")).addClass($(this).data('theme'));

    });

    // Switch Font

    var fontsClasses = [];

    $(".font-options select option").each(function () {
        fontsClasses.push($(this).val());
    })

    $(".font-options select").on("change", function () {

        $("body").removeClass(fontsClasses.join(" ")).addClass($(this).find("option:selected").val());

    });

})

var elem = document.documentElement;

function openFullscreen() {

    if (elem.requestFullscreen) {

        elem.requestFullscreen();

    } else if (elem.mozRequestFullscreen) {

        elem.mozRequestFullscreen();

    } else if (elem.webkitRequestFullscreen) {

        elem.webkitRequestFullscreen();

    } else if (elem.msReuestFullscreen) {

        elem.msReuestFullscreen();

    }

}

function closeFullscreen() {

    if (document.exitFullscreen) {

        document.exitFullscreen();

    } else if (document.mozcancelFullscreen) {

        document.mozcancelFullscreen();

    } else if (document.webkitExitFullscreen) {

        document.webkitExitFullscreen();

    } else if (document.msExitFullscreen) {

        document.msExitFullscreen();

    }

}