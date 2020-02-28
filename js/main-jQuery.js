$(window).on("scroll", function() {
    if ($(window).scrollTop() > 50) {
        $(".header").addClass("header_active");
    } else {
        $(".header").removeClass("header_active");
    }
});

// Burger Handler

$(document).ready(function() {
            $(".burger").click(function() {
                $(".header_nav").addClass("header_nav_active");
            });
            $(".header_nav_close").click(function() {
                $(".header_nav").removeClass("header_nav_active");
            });

            if ($(window).innerWidth() <= 767) {
                $('.header_link').click(function() {
                    $('.header_link').each(function() {

                        $('.header_nav').removeClass('header_nav_active');
                    })
                })