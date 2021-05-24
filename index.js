scrollTop('js-button', 500);

function scrollTop(elem, duration) {
    let target = document.getElementById(elem);
    target.addEventListener('click', function() {
        let currentY = window.pageYOffset;
        let step = duration / currentY > 1 ? 10 : 100;
        let timeStep = duration / currentY * step;
        let intervalID = setInterval(scrollUp, timeStep);

        function scrollUp() {
            currentY = window.pageYOffset;
            if (currentY === 0) {
                clearInterval(intervalID);
            } else {
                scrollBy(0, -step);
            }
        }
    });
}
const smoothScroll = function() {

    const interval = 10,
        divisor = 10,
        range = 5,
        btn = document.querySelectorAll('a[href^="#"]');

    let count = 0;
    while (count < btn.length) {
        (function(elem) {
            btn[elem].addEventListener('click', function(e) {
                e.preventDefault();
                let toY,
                    nowY = window.scrollY || window.pageYOffset;
                const href = btn[elem].getAttribute('href'),
                    target = document.querySelector(href),
                    targetY = target.getBoundingClientRect().top + nowY;

                (function doScroll() {
                    toY = nowY + (targetY - nowY) / divisor;
                    window.scrollTo(0, toY);
                    nowY = toY;

                    if (toY >= targetY + range || toY <= targetY - range) {
                        setTimeout(doScroll, interval);
                    }
                })();
            }, false);
        })(count);
        count++;
    }

}
smoothScroll();