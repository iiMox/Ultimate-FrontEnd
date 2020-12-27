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

})