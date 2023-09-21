import {
    cursor,
    animation,
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
    drawsvg,
    menu1,
    menu2,
    menu4,
    menu5,
    lottie,
    mousemove,
    generateBulb,
    imageBlob,
    orbit,
    customScrollBar,
} from "fullib-js";

customScrollBar({
    currentDiv: '*',
    width: 8,
    border: '1px solid #000', //ONLY WORK ON WEBKIT : chrome / edge
    borderRadius: '25%', //ONLY WORK ON WEBKIT : chrome / edge
    scrollbarBackground: 'gray',
    scrollbarColor: 'white',
});



cursor({
    removeOriginalCursor: true,
    activeFirstCursor: true,
    activeSecondCursor: false,
    currentDiv: "#index",
    zoomOnDiv: ".chapter, .nav-link",
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
    backgroundColor: "#f45365",
    currentDiv: ".mycontainer",
    animation: "1s linear",
});
drawsvg();
menu1({
    direction: 'bottom-left'
});
menu2();
menu4();
menu5();
lottie();
generateBulb({
    currentDiv: ".generate-bulb",
    referTo: ".mycontainer",
    backgroundColor: "transparent",
    minSize: 5,
    maxSize: 30,
    border: "1px solid #1a2b63",
    numberOfBulb: 40,
    type: 'round', //round or square
    classNames: ['round'],
    animationClass: 'customanimation',
    fromLeft: -200, // if animation on better to see element arrived on screen cutted
    animate: true,
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


