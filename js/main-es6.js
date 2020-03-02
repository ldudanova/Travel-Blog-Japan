// Smooth Scroll
$(document).ready(function() {
    const smoothScroll = function(targetEl, duration) {
        const headerElHeight = $('.header').innerHeight();
        let target = $(targetEl);
        let targetPosition = target.offset().top - headerElHeight;
        let startPosition = $(window).scrollTop();
        let startTime = null;

        const ease = function(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
        const animation = function(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            $(window).scroll(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };
    const scrollTo = function() {
        const links = $('.js-scroll');
        links.each(function() {
            $(this).click(function() {
                const currentTarget = $(this).attr('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());






