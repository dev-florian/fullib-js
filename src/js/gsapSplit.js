import {splitText} from "fullib-js";

splitText({
    animationName: 'split1',
    parent: '.split1',
    className: 'letter',
    animation: {
        iterations: 1,
        duration: 1000,
        delay: 10,
        word: true,
        keyframe: {
            from: {
                transform: 'translateY(-40px)',
                opacity: 0,
            },
            to: {
                transform: 'translateY(0)',
                opacity: 1
            }
        }
    }
});

splitText({
    animationName: 'split2',
    parent: '.split2',
    className: 'letter',
    animation: {
        iterations: "infinite",
        duration: 4000,
        delay: 100,
        word: true,
        keyframe: {
            from: {
                transform: 'scale(1)'
            },
            '20%': {
                transform: 'scale(1.5)'
            },
            '40%': {
                transform: 'scale(1)'
            }
        }
    }
});

splitText({
    animationName: 'split3',
    parent: '.split3',
    className: 'letter',
    animation: {
        iterations: 1,
        duration: 500,
        delay: 100,
        keyframe: {
            from: {
                transform: 'rotate(-30deg)',
                opacity: 0,
            },
            to: {
                transform: 'rotate(0deg)',
                opacity: 1
            }
        }
    }
});

splitText({
    animationName: 'split4',
    parent: '.split4',
    className: 'letter',
    animation: {
        iterations: 1,
        duration: 1000,
        delay: 0,
        keyframe: {
            from: {
                'letter-spacing': '10px',
            },
            to: {
                'letter-spacing': '0px',
            }
        }
    }
});


splitText({
    animationName: 'split5',
    parent: '.split5',
    className: 'letter',
    animation: {
        center: true,
        reverse: false,
        iterations: 1,
        duration: 1000,
        delay: 100,
        keyframe: {
            from: {
                transform: 'scale(1.5)'
            },
            to: {
                transform: 'scale(1)'
            }
        }
    }
});


