import {
    cursor,
    laxAddons,
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
    parallax1,
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
    imageBlob
} from "fullib-js";

laxAddons();
cursor({
    activeFirstCursor: true,
    activeSecondCursor: false,
    currentDiv: "#index",
    zoomOnDiv: ".chapter",
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
text2({
    media: "https://static.pexels.com/photos/4827/nature-forest-trees-fog.jpeg",
});
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
parallax1({
    currentDiv: ".parallax1",
    force: 2
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
    classNames: ['round', 'lax-parallax-right'],
    fromLeft: -200, // if animation on better to see element arrived on screen cutted
    differentSpeed: true //only available for lax-parallax-right and if numberOfBulb < 50
});

mousemove();
imageBlob();

