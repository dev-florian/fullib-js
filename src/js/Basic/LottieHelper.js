import Utils from "./../Utils/Utils";
import Lottie from "lottie-web";

export default class LottieHelper extends Utils {
    constructor(options = {}) {
        super();
        this.elems = options.elems ? (options.elems instanceof HTMLCollection ? options.elems : document.querySelectorAll(options.elems)) : document.querySelectorAll('.lottie-helper');

        if(this.elems){
            this.init();
        }
    }


    init() {
        let localStorage = this;

        this.elems.forEach(elem => {
            let file = elem.getAttribute('data-lottie-file');
            let click = elem.getAttribute('data-lottie-click');
            let hover = elem.getAttribute('data-lottie-hover');
            let scroll = elem.getAttribute('data-lottie-scroll');
            let render = elem.getAttribute('data-lottie-render') ? elem.getAttribute('data-lottie-render') : 'canvas';
            let speed = elem.getAttribute('data-lottie-speed');
            let autoplay = true;
            let loop = true;

            if (click) {
                loop = false;
                autoplay = false;
            }

            if (hover) {
                loop = true;
                autoplay = false;
            }

            if (scroll) {
                loop = true;
                autoplay = false;
            }

            let animation = Lottie.loadAnimation({
                container: elem,
                renderer: render,
                loop: loop,
                autoplay: autoplay,
                path: file
            });

            if (speed) {
                animation.setSpeed(speed);
            }


            if (click) {
                elem.addEventListener('click', () => {
                    animation.play();
                });
            }

            if (hover) {
                elem.addEventListener("mouseenter", function (event) {
                    animation.play();
                });
                elem.addEventListener("mouseover", function (event) {
                    animation.pause();
                });
            }

            if (scroll) {
                let animationStart = 0;
                document.addEventListener("scroll", function (event) {
                    if (localStorage.isElementInViewport(elem)) {
                        animation.playSegments([animationStart, animationStart + 1], true);
                        animationStart++;
                    }
                });
            }
        })
    }
}
