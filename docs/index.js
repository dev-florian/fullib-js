import {
    cursor,
    gsapScroll,
    createAnimationFromTo,
    button1,
    button3,
    button4,
    button5,
    button6,
    button7,
    button8,
    button9,
    button10,
    button11,
    button12,
    button13,
    button14,
    button15,
    share,
    text1,
    text2,
    text3,
    text4,
    text5,
    text6,
    text7,
    reveal1,
    reveal2,
    reveal3,
    reveal4,
    reveal5,
    reveal6,
    reveal7,
    reveal8,
    reveal9,
    parallax,
    changeBackground,
    transition1,
    drawsvg,
    menu1,
    menu2,
    menu3,
    menu4,
    menu5,
    blotter,
    lottie,
    mousemove,
    generateBulb,
    imageBlob,
    orbit
} from "fullib-js";

gsapScroll();

cursor({
    activeFirstCursor: true,
    activeSecondCursor: false,
    currentDiv: "#index",
    zoomOnDiv: ".chapter",
    removeAt: 991,
    firstCursor: {
        size: 10,
        backgroundColor: "#000000",
        border: "1px solid #000000",
        type: 'square', // round or square
        transition: "top .1s, left .1s, width .5s, height .5s",
    }
});
button1();
button3();
button4();
button5();
button6();
button7();
button8();
button9();
button10();
button11();
button12();
button13();
button14();
button15();
share();
text1();
text2();
text3();
text4();
text5();
text6();
text7();
reveal1();
reveal2();
reveal3();
reveal4();
reveal5();
reveal6();
reveal7();
reveal8();
reveal9();
parallax({
    currentDiv: ".parallax",
    force: 8,
    height: 250,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundDirection: 'center', //left center right 0% 50%.....
    responsive: [{
        mediaQuery: 767,
        force: 2,
        height: 100,
    }
    ]
});
changeBackground({
    backgroundColor: "#ffd5ce",
    currentDiv: ".change-background",
    animation: "1s linear",
});
transition1();
drawsvg();
menu1();
menu2();
menu3();
menu4();
menu5();
blotter();
lottie();
generateBulb({
    currentDiv: ".generate-bulb",
    referTo: ".mycontainer",
    backgroundColor: "transparent",
    minSize: 5,
    maxSize: 30,
    border: "1px solid #1a2b63",
    numberOfBulb: 49,
    type: 'round', //round or square
    classNames: ['round'],
    animationClass: 'customanimation',
    fromLeft: -200, // if animation on better to see element arrived on screen cutted
    differentSpeed: true //only available for lax-parallax-right and if numberOfBulb < 50
});

mousemove();
imageBlob({autoResponsive: true});
orbit({
    currentDiv: '.circlewhite',
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

if(document.querySelectorAll('.round')){
    for (let g = 0; g < 50; g++) {
        createAnimationFromTo({
            div: '.customanimation-'+g,
            toggleActions: 'restart pause restart pause',
            start: 'top 100%',
            end: "+=100%",
            scrub: true,
            animation: {
                from: {
                    x: '0px'
                },
                to: {
                    x: g * 12 +'px'
                }
            }
        });
    }
}

createAnimationFromTo({
    div: '.line',
    toggleActions: 'restart pause restart pause',
    start: 'top top',
    end: "+=100%",
    scrub: true,
    pin: true,
    animation: {
        from: {
            height:"0%"
        },
        to: {
            height:"100%"
        }
    }
});


