import {splitText} from "fullib-js";

splitText({
    animationName: 'split1',
    parent: '.split1',
    className: 'letter',
    animation: {
        iterations: 'infinite',
        hover: true,
        word: true,
        delayBeforeFirstStart: 0, // duration of animation letter
        delayBetweenletters: 10, // delay betwen each anim letter
        delayBetweenIteration: 1000, // delay between full anim loop
        smooth: '50%',
        keyframe: {
            from: {
                color: 'blue'
            },
            '40%': {
                color: 'purple'
            },
            to: {
                color: 'tomato'
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
        hover: true,
        iterations: "infinite",
        delayBetweenletters: 100,
        delayBetweenIteration: 8000,
        duration: 500,
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
        delayBetweenletters: 100,
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
        center: true,
        iterations: 2,
        delayBetweenletters: 50,
        delayBetweenIteration: 10000,
        duration: 3000,
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
    word: false, // if false anim in each letter
    animation: {
        center: false,  //Anim group on center
        reverse: false, // start from right to left
        smooth: '99%', // eg: '90%', it will get back to the 'from' position : to -> from animation in 10% of time total delay
        iterations: 'infinite', //Iteration count
        delayBeforeFirstStart: 0, // duration of animation letter
        delayBetweenletters: 100, // delay betwen each anim letter
        delayBetweenIteration: 10000, // delay between full anim loop
        duration: 5000, // animation duration for each letter
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



splitText({
    animationName: 'split6',
    parent: '.split6',
    className: 'letter',
    word: false,
    animation: {
        center: false,
        reverse: true,
        smooth: '80%',
        delayBetweenLetters: 1000,
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


