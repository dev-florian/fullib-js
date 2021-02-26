import {
    createAnimationFromTo,
    createAnimationTo
} from "fullib-js";



gsap.registerPlugin(ScrollTrigger);


createAnimationFromTo({
    div: '.scroll-lefttoright',
    toggleActions: 'restart pause restart pause',
    start: 'top 100%',
    animation: {
        from: {
            x: -50,
            y: 0
        },
        to: {
            duration: 1,
            x: 0,
            y: 0
        }
    }
});

createAnimationFromTo({
    div: '.scroll-toptobottom',
    toggleActions: 'restart pause restart pause',
    start: 'top 100%',
    animation: {
        from: {
            x: 0,
            y: -50
        },
        to: {
            duration: 1,
            y: 0,
            x: 0
        }
    }
});

createAnimationFromTo({
    div: '.scroll-bottomtotop',
    toggleActions: 'restart pause restart pause',
    start: 'top 100%',
    animation: {
        from: {
            y: 50,
            x: 0
        },
        to: {
            duration: 1,
            y: 0,
            x: 0
        }
    }
});

createAnimationFromTo({
    div: '.scroll-parallaxleft',
    toggleActions: 'restart pause restart pause',
    start: 'top 100%',
    end: "+=100%",
    scrub: true,
    animation: {
        from: {
            x: '-50%'
        },
        to: {
            x: '50%'
        }
    }
});

createAnimationFromTo({
    div: '.scroll-parallaxright',
    toggleActions: 'restart pause restart pause',
    start: 'top 100%',
    end: "+=100%",
    scrub: true,
    animation: {
        from: {
            x: '50%'
        },
        to: {
            x: '-50%'
        }
    }
});

createAnimationFromTo({
    div: '.scroll-light-parallaxleft',
    toggleActions: 'restart pause restart pause',
    start: 'top 100%',
    end: "+=100%",
    scrub: true,
    animation: {
        from: {
            x: '-20%'
        },
        to: {
            x: '20%'
        }
    }
});

createAnimationFromTo({
    div: '.scroll-light-parallaxright',
    toggleActions: 'restart pause restart pause',
    start: 'top 100%',
    end: "+=100%",
    scrub: true,
    animation: {
        from: {
            x: '20%'
        },
        to: {
            x: '-20%'
        }
    }
});

createAnimationFromTo({
    div: '.scroll-light-parallaxbottom',
    toggleActions: 'restart pause restart pause',
    start: 'top 100%',
    end: "+=100%",
    scrub: true,
    animation: {
        from: {
            y: 200
        },
        to: {
            y: -200
        }
    }
});

createAnimationFromTo({
    div: '.scroll-light-parallaxtop',
    toggleActions: 'restart pause restart pause',
    start: 'top 100%',
    end: "+=100%",
    scrub: true,
    animation: {
        from: {
            y: -200
        },
        to: {
            y: 200
        }
    }
});

createAnimationFromTo({
    div: '.scroll-trigger',
    toggleActions: '',
    start: 'center center',
    end: "+=100%",
    scrub: true,
    animation: {
        from: {},
        to: {}
    }
});

createAnimationFromTo({
    div: '.scroll-opacity',
    toggleActions: 'restart pause restart pause',
    start: "top 100%",
    animation: {
        from: {
            autoAlpha: 0
        },
        to: {
            autoAlpha: 1,
            duration: 1,
        }
    }
});

createAnimationFromTo({
    div: '.scroll-rotateleft',
    toggleActions: 'restart pause restart pause',
    start: 'top 100%',
    animation: {
        from: {
            rotate: -45,
        },
        to: {
            duration: 1,
            rotate: 0,
        }
    }
});

createAnimationFromTo({
    div: '.scroll-full-rotateleft',
    toggleActions: 'restart pause restart pause',
    start: 'top 100%',
    animation: {
        from: {
            rotate: -360,
        },
        to: {
            duration: 1,
            rotate: 0,
        }
    }
});

createAnimationFromTo({
    div: '.scroll-full-rotateright',
    toggleActions: 'restart pause restart pause',
    start: 'top 100%',
    animation: {
        from: {
            rotate: 360,
        },
        to: {
            duration: 1,
            rotate: 0,
        }
    }
});

createAnimationFromTo({
    div: '.scroll-righttoleft',
    toggleActions: 'restart pause restart pause',
    start: 'top 100%',
    animation: {
        from: {
            x: 50,
            y: 0
        },
        to: {
            duration: 1,
            x: 0,
            y: 0
        }
    }
});

createAnimationFromTo({
    div: '.scroll-scaledown',
    toggleActions: 'restart pause restart pause',
    start: 'top 100%',
    animation: {
        from: {
            scale: 1.2,
        },
        to: {
            duration: 1,
            scale: 1
        }
    }
});

createAnimationFromTo({
    div: '.scroll-scaleup',
    toggleActions: 'restart pause restart pause',
    start: 'top 100%',
    animation: {
        from: {
            scale: 0.8,
        },
        to: {
            duration: 1,
            scale: 1
        }
    }
});


createAnimationTo({
    type: 'scroll-horizontal',
    div: '.section-horizontal',
    container: '.horizontal-container',
    scrub: 1,
    pin: true
});

createAnimationTo({
    type: 'scroll-vertical',
    div: '.section-vertical',
    container: '.vertical-container',
    duration: 1,
    ease: Power1.easeOut
});