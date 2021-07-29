import {splitText} from "fullib-js";

splitText({
    animationName: 'split1',
    parent: '.split1',
    className: 'letter',
    animation: {
        iterations: 'infinite',
        duration: 4000,
        delay: 10,
        word: true,
        delayBetweenIteration: 1000,
        smooth: '90%',
        keyframe: {
            from: {
                color: 'blue'
            },
            '40%': {
                color: 'purple'
            },
            to: {
                color: 'black'
            }
        }
    }
});

splitText({
    animationName: 'split2',
    parent: '.split2',
    className: 'letter',
    word: false,
    animation: {
        iterations: "infinite",
        duration: 500,
        delay: 100,
        delayBetweenIteration: 8000,
        smooth: '90%',
        keyframe: {
            from: {
                transform: 'scale(1.5) translateY(15px)'
            },
            to: {
                transform: 'scale(1) translateY(0)'
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
    word: false,
    animation: {
        center: false,
        reverse: true,
        smooth: '80%',
        iterations: 'infinite',
        duration: 700,
        delay: 50,
        delayBetweenIteration: 2000,
        keyframe: {
            from: {
                transform: 'translateX(30px) translateY(-30px)',
                color: 'purple'
            },
            to: {
                transform: 'translateX(0px) translateY(0px)',
                color: 'black'
            }
        }
    }
});


