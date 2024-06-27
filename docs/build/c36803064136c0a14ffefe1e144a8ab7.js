
import ScrollBar from "./fullib-js/src/js/Basic/ScrollBar";

//BASIC EXAMPLE
new ScrollBar({
    elem: '*', //default .scrollbar
    width: 4, //default as 'auto'
    border: '1px solid #000', //ONLY WORK ON WEBKIT : chrome / edge
    borderRadius: '25%', //ONLY WORK ON WEBKIT : chrome / edge
    scrollbarBackground: 'white', //default black
    scrollbarColor: 'black', //default white
});



import Mousemoove from "./fullib-js/src/js/Basic/Mousemoove";

new Mousemoove({
    elems: '.mousemove', //default .mousemove
    force: 100, //default 100
    speed: 3, //default 3
    inverse: false, //default false
    breakpoint: 767, //default 320
});


import Cursor from "./fullib-js/src/js/Basic/Cursor";
new Cursor({
    activeFirstCursor: true, //essential
    activeSecondCursor: true, //essential
    elems: "*", //essential
    zoomOnDiv: ".nav-link",
    removeOriginalCursor: true,
    removeAt: 991,
    firstCursor: {
        size: 10,
        hoverSize: 40,
        backgroundColor: "#000000",
        border: "1px solid #000000",
        type: 'round', // round or square
        transition: "top .1s, left .1s, width .5s, height .5s",
    },
    secondCursor: {
        size: 5,
        hoverSize: 40,
        backgroundColor: "#000000",
        border: "1px solid #000000",
        type: 'round', // round or square
        transition: "top .25s, left .25s, width .7s, height .7s",
    }
});

import DynamicBackground from "./fullib-js/src/js/Basic/DynamicBackground";
new DynamicBackground({
    elems: ".mycontainer", //default .dynamic-background
    backgroundColor: "#f45365", //bgColor
    animation: "1s linear" //Animation
});


import LottieHelper from "./fullib-js/src/js/Basic/LottieHelper";
new LottieHelper({
    'elems': '.lottie-helper' // default .lottie-helper
});

import ImageBlob from "./fullib-js/src/js/Basic/ImageBlob";
new ImageBlob();

import Orbit from "./fullib-js/src/js/Basic/Orbit";
new Orbit({
    elems: '.circlewhite',
    position: 'right-top', //right-top right-bottom left-top left-bottom
    indexPixel: 150,
    inverseRotation: true,
    line: {
        display: true,
        borderColor: "#ffffff",
        borderSize: 3,
        size: 400
    },
    bulb: {
        display: true,
        backgroundColor: '#ffffff',
        color: '#ffffff',
        size: 50
    }
});


import Carousel from "./fullib-js/src/js/3D/Carousel";
new Carousel();


import Animation from "./fullib-js/src/js/Basic/Animation";

new Animation({
    elems: '.scroll-lefttoright',
        scroll: true, //default true
        start: '0%', //default 0%
        end: '100%', //default 100%
        measure: 'px', //default px
        from: {
            x: -100
        },
        to: {
            x: 100,
        },
    },
);


new Animation({
    elems: '.scroll-righttoleft',
    scroll: true, //default true
    start: '0%', //default 0%
    end: '100%', //default 100%
    measure: 'px', //default px
    from: {
        x: 100
    },
    to: {
        x: -100,
    }
});

new Animation({
    elems: '.scroll-toptobottom',
    scroll: true, //default true
    start: '0%', //default 0%
    end: '100%', //default 100%
    measure: 'px', //default px
    from: {
        y: -100
    },
    to: {
        y: 100,
    }
});

new Animation({
    elems: '.scroll-bottomtotop',
    scroll: true, //default true
    start: '0%', //default 0%
    end: '100%', //default 100%
    measure: 'px', //default px
    from: {
        y: 100
    },
    to: {
        y: -100,
    }
});

new Animation({
    elems: '.scroll-rotateleft',
    scroll: true, //default true
    start: '0%', //default 0%
    end: '100%', //default 100%
    measure: 'px', //default px
    from: {
        rotate: 0
    },
    to: {
        rotate: -100
    }
});

new Animation({
    elems: '.scroll-rotateright',
    scroll: true, //default true
    start: '0%', //default 0%
    end: '100%', //default 100%
    measure: 'px', //default px
    from: {
        rotate: 0
    },
    to: {
        rotate: 100
    }
});

new Animation({
    elems: '.scroll-scaleup',
    scroll: true, //default true
    start: '0%', //default 0%
    end: '100%', //default 100%
    measure: 'px', //default px
    from: {
        scale: 1
    },
    to: {
        rotate: 1.5
    }
});

new Animation({
    elems: '.scroll-scaledown',
    scroll: true, //default true
    start: '0%', //default 0%
    end: '100%', //default 100%
    measure: 'px', //default px
    from: {
        scale: 1
    },
    to: {
        rotate: 0.5
    }
});


new Animation({
    elems: '.scroll-opacity-up',
    scroll: true, //default true
    start: '0%', //default 0%
    end: '100%', //default 100%
    measure: 'px', //default px
    from: {
        opacity: 0
    },
    to: {
        opacity: 1
    }
});


new Animation({
    elems: '.scroll-opacity-down',
    scroll: true, //default true
    start: '0%', //default 0%
    end: '100%', //default 100%
    measure: 'px', //default px
    from: {
        opacity: 1
    },
    to: {
        opacity: 0
    }
});

new Animation({
    elems: '.scroll-skew-x',
    scroll: true, //default true
    start: '0%', //default 0%
    end: '100%', //default 100%
    measure: 'px', //default px
    from: {
        skewX: 0
    },
    to: {
        skewX: 30
    }
});

new Animation({
    elems: '.scroll-skew-y',
    scroll: true, //default true
    start: '0%', //default 0%
    end: '100%', //default 100%
    measure: 'px', //default px
    from: {
        skewY: 0
    },
    to: {
        skewY: 30
    }
});


