
import ScrollBar from "./fullib-js/src/js/Basic/ScrollBar";

//BASIC EXAMPLE
new ScrollBar({
    elem: '*', //default .scrollbar
    width: 4, //default as 'auto'
    border: '1px solid #0D0C1D', //ONLY WORK ON WEBKIT : chrome / edge
    borderRadius: '25%', //ONLY WORK ON WEBKIT : chrome / edge
    scrollbarBackground: 'white', //default black
    scrollbarColor: '#0D0C1D', //default white
});



import Mousemoove from "./fullib-js/src/js/Basic/Mousemoove";

new Mousemoove({
    elems: '.mousemove', //default .mousemove
    force: 100, //default 100
    speed: 3, //default 3
    hover: false, //default false
    inverse: false, //default false
    breakpoint: 767, //default 320
});


import Cursor from "./fullib-js/src/js/Basic/Cursor";
let cursor = new Cursor({
    elems: '#index h2',
    position: 'center center',
    // imageWidth: 200,
    // imageHeight: 300,
    keepCursor: false,
    defautHoverEffect: true,
    // offsetY: -50,
    // imageCover: false,
    // offsetX: 50,
    // imagePath: './img/cursor.jpg',
    htmlContent: '<h2 class="mb-0 pb-0 read-more d-flex align-items-center justify-content-center text-dark">🚀</h2>',
});

import DynamicBackground from "./fullib-js/src/js/Basic/DynamicBackground";
new DynamicBackground({
    elems: ".mycontainer", //default .dynamic-background
    backgroundColor: "#0D0C1D", //bgColor
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
let carousel = new Carousel({
    elem: '.carousel-3d', //default is carousel-3d
    autoplay: true, //default is true
    preset: '04', //default is true
    speed: 500, //default is 750, transition between slides
    pause: 5000, //default is 3000, pause between slides when autoplay
    dots: true, //default is 3000, pause between slides when autoplay
    beforeTransition: false,
    uniforms: {
        intensity: {value: .2, type: 'f', min: 0, max: 2},
        width: {value: 1, type: 'f', min: 0, max: 10},
        scaleX: {value: 5, type: 'f', min: 0.1, max: 100},
        scaleY: {value: 5, type: 'f', min: 0.1, max: 100},
        radius: {value: 0.2, type: 'f', min: 0.1, max: 2},
    }
});

let carousel2 = new Carousel({
    elem: '.carousel-3d-2', //default is carousel-3d
    autoplay: true, //default is true
    preset: '05', //default is true
    speed: 500, //default is 750, transition between slides
    pause: 5000, //default is 3000, pause between slides when autoplay
    dots: true, //default is 3000, pause between slides when autoplay
    beforeTransition: false,
    uniforms: {
        intensity: {value: 0.2, type: 'f', min: 0, max: 2},
        width: {value: 1, type: 'f', min: 0, max: 10},
        scaleX: {value: 5, type: 'f', min: 0.1, max: 100},
        scaleY: {value: 5, type: 'f', min: 0.1, max: 100},
        radius: {value: 0.2, type: 'f', min: 0.1, max: 2},
    }
});





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

//custom cursor page
const customCursors = document.querySelectorAll('.custom-cursor');
customCursors.forEach(customCursor => {
    let cursor = new Cursor({
        elem: customCursor,
        keepCursor: false,
        showOnMobile: false,
    });
})


