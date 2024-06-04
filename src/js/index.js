export function customScrollBar(options) {
    let cssScrollbar =
        (options.currentDiv ? options.currentDiv : '.scrollbar') + "{" +
        "scrollbar-width: " + (options.width ? options.width + 'px' : 'auto') + ";" +
        "scrollbar-color: " + (options.scrollbarColor ? options.scrollbarColor : '#ffffff') + " " + (options.scrollbarBackground ? options.scrollbarBackground : '#000000') + ";" +
        "}" +
        (options.currentDiv ? options.currentDiv : '.scrollbar') + "::-webkit-scrollbar {" +
        "width: " + (options.width ? options.width + 'px' : 'auto') + ";" +
        "}" +
        (options.currentDiv ? options.currentDiv : '.scrollbar') + "::-webkit-scrollbar-track {" +
        "background: " + (options.scrollbarBackground ? options.scrollbarBackground : '#000000') + ";" +
        "}" +
        (options.currentDiv ? options.currentDiv : '.scrollbar') + "::-webkit-scrollbar-thumb {" +
        "background-color: " + (options.scrollbarColor ? options.scrollbarColor : '#ffffff') + ";" +
        "border-radius: " + (options.borderRadius ? options.borderRadius : 0) + ";" +
        "border: " + (options.border ? options.border : 'none') + ";" +
        "}";

    document.head.insertAdjacentHTML("beforeend", '<style>' + cssScrollbar + '</style>')
}

//FUNCTION TO ADD BLOB ANIMATION TO YOUR IMAGE
export function imageBlob(options) {

    //PARAMAS
    let imageBulbsDiv = document.querySelectorAll(options && options.currentDiv ? options.currentDiv : '.blobed');
    let currentWindowWidth = window.innerWidth;
    let autoResponsive = options.autoResponsive ? options.autoResponsive : true;

    if (imageBulbsDiv) [0]
    {
        import('fullib-js/src/css/imageBlob/imageBlob.css').then(({default: blob}) => {
            for (let i = 0; i < imageBulbsDiv.length; i++) {

                //PARAMS
                let imageElem = imageBulbsDiv[i];
                let srcElem = imageElem.getAttribute('src');
                let classNamesElem = imageElem.classList;
                let idElem = imageElem.getAttribute('id');
                let parentElem = imageElem.parentNode;
                let imageWidth = imageElem.getAttribute('width');
                let imageHeight = imageElem.getAttribute('height');

                imageElem.classList.add('blob');
                imageElem.remove();

                //ADDING DIV TO DOM
                let higther = addElement('div', classNamesElem, {
                    id: idElem,
                    addTo: parentElem,
                })

                let medium = addElement('div', 'blob-inner', {
                    id: idElem,
                    addTo: higther,
                })

                let little = addElement('span', 'blob-img', {
                    id: idElem,
                    addTo: medium,
                })

                //ADDING CSS
                little.style.backgroundImage = "url('" + srcElem + "')";
                medium.style.minWidth = imageWidth ? imageWidth + "px" : '400px';
                medium.style.maxWidth = imageWidth ? imageWidth + "px" : '400px';
                medium.style.minHeight = imageHeight ? imageHeight + "px" : '400px';
                medium.style.maxHeight = imageHeight ? imageHeight + "px" : '400px';


                //AUTO RESPONSIVE
                if (autoResponsive && currentWindowWidth < 767) {
                    let sizeResized = currentWindowWidth - 80;
                    if (sizeResized < imageWidth) {
                        medium.style.minWidth = sizeResized + "px";
                        medium.style.maxWidth = sizeResized + "px";
                        medium.style.minHeight = sizeResized + "px";
                        medium.style.maxHeight = sizeResized + "px";
                    }
                }

                //AUTO RESPONSIVE RESIZE
                if (currentWindowWidth < 767 && autoResponsive) {
                    window.addEventListener("resize", function () {
                        let resizedWindowWidth = window.innerWidth;
                        if (resizedWindowWidth < 767) {
                            let sizeResized = resizedWindowWidth - 80;
                            if (sizeResized < imageWidth) {
                                medium.style.minWidth = sizeResized + "px";
                                medium.style.maxWidth = sizeResized + "px";
                                medium.style.minHeight = sizeResized + "px";
                                medium.style.maxHeight = sizeResized + "px";
                            }
                        }
                    });
                }
            }
        }).catch(error => 'An error occurred while loading imageBlob');
    }
}

//FUNCTION TO GENERATE BULBS
export function generateBulb(options) {

    //PARAMS
    let bulbsDiv = document.querySelectorAll(options.currentDiv ? options.currentDiv : '.generate-bulb');
    let minSize = options.minSize ? options.minSize : 5;
    let maxSize = options.maxSize ? options.maxSize : 30;
    let animate = options.animate ? options.animate : false;
    let differentSpeed = options.differentSpeed ? options.differentSpeed : false;
    let classNames = options.classNames ? options.classNames : ['round'];
    let referTo = options.referTo ? options.referTo : false;

    if (!referTo) {
        console.log('Missing referTo');
    }

    if (bulbsDiv[0] && maxSize > minSize) {
        for (let i = 0; i < bulbsDiv.length; i++) {
            let containerDiv = bulbsDiv[i];
            for (let g = 0; g < options.numberOfBulb; g++) {

                //PARAMS RELATED FOR ONE BULB
                let element = addElement('div', classNames, {addTo: containerDiv});
                let randomWith = getRandomArbitrary(minSize, maxSize);
                let randomTop = getRandomArbitrary(-maxSize, options.referTo && document.querySelector(referTo) ? (document.querySelector(referTo).offsetHeight - maxSize) : (containerDiv.parentNode.offsetHeight - maxSize));
                let randomleft = getRandomArbitrary(options.fromLeft ? options.fromLeft : -200, window.innerWidth);

                if (options.animationClass && classNames) {
                    options.classNames.push(options.animationClass + '-' + g);
                    element.classList.add(options.animationClass + '-' + g);
                }

                //ADDING CSS
                element.style.backgroundColor = options.backgroundColor;
                element.style.borderRadius = options.type === "round" ? "50%" : "0";
                element.style.position = "absolute";
                element.style.height = randomWith + 'px';
                element.style.width = randomWith + 'px';
                element.style.left = randomleft + 'px';
                element.style.top = randomTop + 'px';
                element.style.zIndex = options.zIndex ? options.zIndex : 0;
                element.style.border = options.border ? options.border : "";

                options.classNames.pop();

                if (animate) {
                    animation({
                        classNames: '.customanimation-' + g,
                        scroll: true,
                        start: '0%',
                        end: '100%',
                        from: {
                            x: randomleft,
                        },
                        to: {
                            x: getRandomArbitrary(options.fromLeft, window.innerWidth),
                        }
                    });
                }
            }
        }
    }
}

//FUNCTION TO ADD MOUSEMOOVE ANIMATION
export function mousemove(options) {
    //PARAMS
    let selector = options && options.currentDiv ? options.currentDiv : '.mousemove';
    let force = options && options.force ? options.force : 100;
    let speed = options && options.speed ? options.speed : 3;
    let inverse = options && options.inverse ? options.inverse : false;
    let breakpoint = options && options.breakpoint ? options.breakpoint : 320;

    if (window.innerWidth > breakpoint) {
        function parallaxOnMouse(e) {

            this.querySelectorAll(selector).forEach(layer => {

                //PARAMS
                const speedVar = layer.getAttribute('data-speed') ? layer.getAttribute('data-speed') : speed;
                const x = inverse ? (window.innerWidth + e.pageX * speedVar) / force : (window.innerWidth - e.pageX * speedVar) / force;
                const y = inverse ? (window.innerHeight + e.pageY * speedVar) / force : (window.innerHeight - e.pageY * speedVar) / force;

                //ADD CSS
                layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
            })
        }

        document.addEventListener("mousemove", parallaxOnMouse);
    }
}

//FUNCTION TO CREATE ORBIT ANIMATION
export function orbit(options) {
    import('fullib-js/src/css/orbit/orbit.css').then(({default: orbit}) => {

        //PARAMS
        let divTarget = options && options.currentDiv ? options.currentDiv : ".orbit";
        //General
        let position = options && options.position ? options.position : "right-top";
        let indexPixel = options && options.indexPixel ? options.indexPixel : 150;
        let inverseRotation = options && options.inverseRotation ? options.inverseRotation : false;

        //line
        let lineDisplay = options && options.line && options.line.display ? options.line.display : true;
        let lineBorderColor = options && options.line && options.line.borderColor ? options.line.borderColor : "#ffffff";
        let lineBorderSize = options && options.line && options.line.borderSize ? options.line.borderSize : 3;
        let lineSize = options && options.line && options.line.size ? options.line.size : 500;

        //Bulb
        let bulbDisplay = options && options.bulb && options.bulb.display ? options.bulb.display : true;
        let orbits = document.querySelectorAll(divTarget);

        for (let i = 0; i < orbits.length; i++) {
            let orbit = orbits[0];

            if (inverseRotation) {
                orbit.style.animationDirection = "reverse";
            }

            if (lineDisplay) {
                orbit.classList.add('orbit');
                orbit.style.border = lineBorderSize + "px solid " + lineBorderColor;
                orbit.style.width = lineSize + "px";
                orbit.style.height = lineSize + "px";

                if (position === "right-top") {
                    orbit.style.right = -indexPixel + "px";
                    orbit.style.top = -indexPixel + "px";
                } else if (position === "right-bottom") {
                    orbit.style.right = -indexPixel + "px";
                    orbit.style.bottom = -indexPixel + "px";
                } else if (position === "left-top") {
                    orbit.style.left = -indexPixel + "px";
                    orbit.style.top = -indexPixel + "px";
                } else if (position === "left-bottom") {
                    orbit.style.left = -indexPixel + "px";
                    orbit.style.bottom = -indexPixel + "px";
                }

                if (bulbDisplay) {
                    //Bulb
                    let bulbBackgroundColor = options && options.bulb && options.bulb.backgroundColor ? options.bulb.backgroundColor : "#000000";
                    let bulbBorder = options && options.bulb && options.bulb.border ? options.bulb.border : "";
                    let bulbSize = options && options.bulb && options.bulb.size ? options.bulb.size : 50;
                    let bulbPosition = bulbSize / 2;

                    let beforeElem = addElement('div', 'orbit-before', {addTo: orbit});

                    beforeElem.style.setProperty("--data-backgroundColor", bulbBackgroundColor);
                    beforeElem.style.setProperty("--data-border", bulbBorder);
                    beforeElem.style.setProperty("--data-width", bulbSize + 'px');
                    beforeElem.style.setProperty("--data-height", bulbSize + 'px');

                    if (position === "right-top") {
                        beforeElem.style.setProperty("--data-right", -bulbPosition + 'px');
                        beforeElem.style.setProperty("--data-top", '50%');
                    } else if (position === "right-bottom") {
                        beforeElem.style.setProperty("--data-right", -bulbPosition + 'px');
                        beforeElem.style.setProperty("--data-bottom", '50%');
                    } else if (position === "left-top") {
                        beforeElem.style.setProperty("--data-left", -bulbPosition + 'px');
                        beforeElem.style.setProperty("--data-top", '50%');
                    } else if (position === "left-bottom") {
                        beforeElem.style.setProperty("--data-left", -bulbPosition + 'px');
                        beforeElem.style.setProperty("--data-bottom", '50%');
                    }
                }
            } else {
                orbit.style.display = "none";
            }

        }

    }).catch(error => 'An error occurred while loading orbit');
}

//FUNCTION TO CREATE LOTTIE ANIMATION
export function lottie() {
    let lotties = document.querySelectorAll('.lottie')
    let lottiesOnScroll = document.querySelectorAll('.lottie-player');

    if (lotties[0]) {
        for (let i = 0; i < lotties.length; i++) {

            //PARAMS
            let mydiv = lotties[i];
            let file = mydiv.getAttribute('data-lottie-file');
            let click = mydiv.getAttribute('data-lottie-click');
            let hover = mydiv.getAttribute('data-lottie-hover');
            let scroll = mydiv.getAttribute('data-lottie-scroll');
            let render = mydiv.getAttribute('data-lottie-render') ? mydiv.getAttribute('data-lottie-render') : 'canvas';
            let speed = mydiv.getAttribute('data-lottie-speed');
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

            let animation = bodymovin.loadAnimation({
                container: mydiv,
                renderer: render,
                loop: loop,
                autoplay: autoplay,
                path: file
            });

            if (speed) {
                animation.setSpeed(speed);
            }


            if (click) {
                mydiv.addEventListener('click', () => {
                    animation.play();
                });
            }

            if (hover) {
                mydiv.addEventListener("mouseenter", function (event) {
                    animation.play();
                });
                mydiv.addEventListener("mouseover", function (event) {
                    animation.pause();
                });
            }

            if (scroll) {
                let animationStart = 0;
                document.addEventListener("scroll", function (event) {
                    if (isElementInViewport(mydiv)) {
                        animation.playSegments([animationStart, animationStart + 1], true);
                        animationStart++;
                    }
                });
            }
        }
    }
}

export function reveal1(options) {
    let reveals1 = document.querySelectorAll(options && options.currentDiv ? options.currentDiv : '.reveal1');
    if (reveals1[0]) {
        import('fullib-js/src/css/reveal/reveal1.css').then(({default: reveal1}) => {
            for (let i = 0, len = reveals1.length; i < len; i++) {
                let myElem = reveals1[i];
                myElem.classList.add('reveal1');

                if (isElementInViewport(myElem)) {
                    myElem.classList.add('active');
                }
                window.addEventListener('scroll', function () {
                    if (isElementInViewport(myElem)) {
                        myElem.classList.add('active');
                    }
                });
            }
        }).catch(error => 'An error occurred while loading reveal1');
    }
}

export function reveal2(options) {
    let reveal2 = document.querySelectorAll(options && options.currentDiv ? options.currentDiv : '.reveal2');
    if (reveal2[0]) {
        for (let i = 0, len = reveal2.length; i < len; i++) {
            let myElem = reveal2[i];
            myElem.classList.add('reveal2');
        }
        import('fullib-js/src/css/reveal/reveal2.css').then(({default: reveal2}) => {
        }).catch(error => 'An error occurred while loading reveal2');
    }
}

export function reveal3(options) {
    let reveal3 = document.querySelectorAll(options && options.currentDiv ? options.currentDiv : '.reveal3');
    if (reveal3[0]) {
        for (let i = 0, len = reveal3.length; i < len; i++) {
            let myElem = reveal3[i];
            myElem.classList.add('reveal3');
        }

        import('fullib-js/src/css/reveal/reveal3.css').then(({default: reveal3}) => {
        }).catch(error => 'An error occurred while loading reveal3');
    }
}

export function reveal4(options) {
    let reveal4 = document.querySelectorAll(options && options.currentDiv ? options.currentDiv : '.reveal4');
    if (reveal4[0]) {
        for (let i = 0, len = reveal4.length; i < len; i++) {
            let myElem = reveal4[i];
            myElem.classList.add('reveal4');
        }
        import('fullib-js/src/css/reveal/reveal4.css').then(({default: reveal4}) => {
        }).catch(error => 'An error occurred while loading reveal4');
    }
}

export function reveal5(options) {
    let reveal5 = document.querySelectorAll(options && options.currentDiv ? options.currentDiv : '.reveal5');
    if (reveal5[0]) {
        for (let i = 0, len = reveal5.length; i < len; i++) {
            let myElem = reveal5[i];
            myElem.classList.add('reveal5');
        }
        import('fullib-js/src/css/reveal/reveal5.css').then(({default: reveal5}) => {
        }).catch(error => 'An error occurred while loading reveal5');
    }
}

export function reveal6(options) {
    let reveal6 = document.querySelectorAll(options && options.currentDiv ? options.currentDiv : '.reveal6');
    if (reveal6[0]) {
        for (let i = 0, len = reveal6.length; i < len; i++) {
            let myElem = reveal6[i];
            myElem.classList.add('reveal6');

            if (isElementInViewport(myElem)) {
                myElem.classList.add('active');
            }

            window.addEventListener('scroll', function () {
                if (isElementInViewport(myElem)) {
                    myElem.classList.add('active');
                }
            });
        }
        import('fullib-js/src/css/reveal/reveal6.css').then(({default: reveal6}) => {
        }).catch(error => 'An error occurred while loading reveal6');
    }
}

export function reveal7(options) {
    let reveal7 = document.querySelectorAll(options && options.currentDiv ? options.currentDiv : '.reveal7');
    if (reveal7[0]) {
        for (let i = 0, len = reveal7.length; i < len; i++) {
            let myElem = reveal7[i];
            myElem.classList.add('reveal7');

            if (isElementInViewport(myElem)) {
                myElem.classList.add('active');
            }

            window.addEventListener('scroll', function () {
                if (isElementInViewport(myElem)) {
                    myElem.classList.add('active');
                }
            });
        }
        import('fullib-js/src/css/reveal/reveal7.css').then(({default: reveal7}) => {
        }).catch(error => 'An error occurred while loading reveal7');
    }
}

export function reveal8(options) {
    let reveal8 = document.querySelectorAll(options && options.currentDiv ? options.currentDiv : '.reveal8');
    if (reveal8[0]) {
        for (let i = 0, len = reveal8.length; i < len; i++) {
            let myElem = reveal8[i];
            myElem.classList.add('reveal8');

            if (isElementInViewport(myElem)) {
                myElem.classList.add('active');
            }

            window.addEventListener('scroll', function () {
                if (isElementInViewport(myElem)) {
                    myElem.classList.add('active');
                }
            });
        }
        import('fullib-js/src/css/reveal/reveal8.css').then(({default: reveal8}) => {
        }).catch(error => 'An error occurred while loading reveal8');
    }
}

export function reveal9(options) {
    let reveal9 = document.querySelectorAll(options && options.currentDiv ? options.currentDiv : '.reveal9');
    if (reveal9[0]) {
        for (let i = 0, len = reveal9.length; i < len; i++) {
            let myElem = reveal9[i];
            myElem.classList.add('reveal9');

            if (isElementInViewport(myElem)) {
                myElem.classList.add('active');
            }

            window.addEventListener('scroll', function () {
                if (isElementInViewport(myElem)) {
                    myElem.classList.add('active');
                }
            });
        }
        import('fullib-js/src/css/reveal/reveal9.css').then(({default: reveal9}) => {
        }).catch(error => 'An error occurred while loading reveal9');
    }
}

export function button1(options) {
    let buttons1 = document.querySelectorAll(options && options.currentDiv ? options.currentDiv : '.button1');
    if (buttons1[0]) {
        import('fullib-js/src/css/button/button1.css').then(({default: button1}) => {
            for (let i = 0, len = buttons1.length; i < len; i++) {
                let myElem = buttons1[i];
                let optionLink = getOptionLink(myElem);

                let containerButton = addElement('div', 'container-button1', {addTo: myElem.parentNode});
                let aLink = addElement('a', 'button1', {
                    target: optionLink.targetMyElem,
                    href: optionLink.linkMyElem,
                    id: optionLink.idMyElem,
                    rel: optionLink.relMyElem,
                    addTo: containerButton
                });
                let firstSpan = addElement('span', 'circle', {addTo: aLink});
                let secondSpan = addElement('span', ['icon', 'arrow'], {addTo: firstSpan});
                let thirdSpan = addElement('span', 'button-text', {text: optionLink.textMyElem, addTo: aLink});
                myElem.remove();
            }
        }).catch(error => 'An error occurred while loading button1');
    }
}

export function button3(options) {
    let buttons3 = document.querySelectorAll(options && options.currentDiv ? options.currentDiv : '.button3');
    if (buttons3[0]) {
        import('fullib-js/src/css/button/button3.css').then(({default: button3}) => {
            for (let i = 0, len = buttons3.length; i < len; i++) {
                let myElem = buttons3[i];
                let optionLink = getOptionLink(myElem);

                let containerButton = addElement('div', 'container-button3', {addTo: myElem.parentNode});
                let aLink = addElement('a', 'button3', {
                    target: optionLink.targetMyElem,
                    href: optionLink.linkMyElem,
                    id: optionLink.idMyElem,
                    rel: optionLink.relMyElem,
                    addTo: containerButton
                });
                let firstSpan = addElement('span', '', {text: optionLink.textMyElem, addTo: aLink});
                let secondDiv = addElement('div', 'd-inline-block', {
                    text: '<svg width="13px" height="10px" viewBox="0 0 13 10"><path d="M1,5 L11,5"></path><polyline points="8 1 12 5 8 9"></polyline></svg>',
                    addTo: aLink
                });
                myElem.remove();
            }
        }).catch(error => 'An error occurred while loading button3');
    }
}

export function button4(options) {
    let buttons4 = document.querySelectorAll(options && options.currentDiv ? options.currentDiv : '.button4');
    if (buttons4[0]) {
        import('fullib-js/src/css/button/button4.css').then(({default: button4}) => {
            for (let i = 0, len = buttons4.length; i < len; i++) {
                let myElem = buttons4[i];
                let optionLink = getOptionLink(myElem);

                let containerButton = addElement('div', 'container-button4', {addTo: myElem.parentNode});
                let aLink = addElement('a', 'button4', {
                    target: optionLink.targetMyElem,
                    href: optionLink.linkMyElem,
                    id: optionLink.idMyElem,
                    rel: optionLink.relMyElem,
                    addTo: containerButton,
                    text: optionLink.textMyElem
                });
                myElem.remove();
            }
        }).catch(error => 'An error occurred while loading button4');
    }
}

export function button5(options) {
    let buttons5 = document.querySelectorAll(options && options.currentDiv ? options.currentDiv : '.button5');
    if (buttons5[0]) {
        import('fullib-js/src/css/button/button5.css').then(({default: button5}) => {
            for (let i = 0, len = buttons5.length; i < len; i++) {
                let myElem = buttons5[i];
                let optionLink = getOptionLink(myElem);

                let containerButton = addElement('div', 'container-button5', {addTo: myElem.parentNode});
                let aLink = addElement('a', 'button5', {
                    target: optionLink.targetMyElem,
                    href: optionLink.linkMyElem,
                    id: optionLink.idMyElem,
                    rel: optionLink.relMyElem,
                    addTo: containerButton,
                    text: optionLink.textMyElem
                });
                myElem.remove();
            }
        }).catch(error => 'An error occurred while loading button5');
    }
}

export function button6(options) {
    let buttons6 = document.querySelectorAll(options && options.currentDiv ? options.currentDiv : '.button6');
    if (buttons6[0]) {
        import('fullib-js/src/css/button/button6.css').then(({default: button6}) => {
            for (let i = 0, len = buttons6.length; i < len; i++) {
                let myElem = buttons6[i];
                let optionLink = getOptionLink(myElem);

                let containerButton = addElement('div', 'container-button6', {addTo: myElem.parentNode});

                for (let n = 0; n < 10; n++) {
                    addElement('span', 'particles-circle', {addTo: containerButton});
                }

                let aLink = addElement('a', 'button6', {
                    target: optionLink.targetMyElem,
                    href: optionLink.linkMyElem,
                    id: optionLink.idMyElem,
                    rel: optionLink.relMyElem,
                    addTo: containerButton,
                    text: optionLink.textMyElem
                });
                myElem.remove();

                aLink.onclick = function (e) {
                    e.preventDefault();
                    containerButton.classList.add('active');
                    setTimeout(function () {
                        containerButton.classList.remove('active');
                    }, 2000);
                };
            }
        }).catch(error => 'An error occurred while loading button6');
    }
}

export function button7(options) {
    let buttons7 = document.querySelectorAll(options && options.currentDiv ? options.currentDiv : '.button7');
    if (buttons7[0]) {
        import('fullib-js/src/css/button/button7.css').then(({default: button7}) => {
            for (let i = 0, len = buttons7.length; i < len; i++) {
                let myElem = buttons7[i];
                let optionLink = getOptionLink(myElem);

                let containerButton = addElement('div', 'container-button7', {addTo: myElem.parentNode});


                let aLink = addElement('a', 'button7', {
                    target: optionLink.targetMyElem,
                    href: optionLink.linkMyElem,
                    id: optionLink.idMyElem,
                    rel: optionLink.relMyElem,
                    addTo: containerButton,
                    text: optionLink.textMyElem
                });

                addElement('div', 'horizontal', {addTo: aLink});
                addElement('div', 'vertical', {addTo: aLink});

                myElem.remove();
            }
        }).catch(error => 'An error occurred while loading button7');
    }
}

export function button8(options) {
    let buttons8 = document.querySelectorAll(options && options.currentDiv ? options.currentDiv : '.button8');
    if (buttons8[0]) {
        import('fullib-js/src/css/button/button8.css').then(({default: button8}) => {
            for (let i = 0, len = buttons8.length; i < len; i++) {
                let myElem = buttons8[i];
                let optionLink = getOptionLink(myElem);

                let containerButton = addElement('div', 'container-button8', {addTo: myElem.parentNode});
                let aLink = addElement('a', 'button8', {
                    target: optionLink.targetMyElem,
                    href: optionLink.linkMyElem,
                    id: optionLink.idMyElem,
                    rel: optionLink.relMyElem,
                    addTo: containerButton,
                    text: optionLink.textMyElem
                });
                myElem.remove();
            }
        }).catch(error => 'An error occurred while loading button8');
    }
}

export function button9(options) {
    let buttons9 = document.querySelectorAll(options && options.currentDiv ? options.currentDiv : '.button9');
    if (buttons9[0]) {
        import('fullib-js/src/css/button/button9.css').then(({default: button9}) => {
            for (let i = 0, len = buttons9.length; i < len; i++) {
                let myElem = buttons9[i];
                let optionLink = getOptionLink(myElem);

                let containerButton = addElement('div', 'container-button9', {addTo: myElem.parentNode});
                let aLink = addElement('a', 'button9', {
                    target: optionLink.targetMyElem,
                    href: optionLink.linkMyElem,
                    id: optionLink.idMyElem,
                    rel: optionLink.relMyElem,
                    addTo: containerButton
                });
                let firstSpan = addElement('span', '', {text: optionLink.textMyElem, addTo: aLink});
                let secondDiv = addElement('div', 'd-inline-block', {
                    text: '<svg width="13px" height="10px" viewBox="0 0 13 10"><path d="M1,5 L11,5"></path><polyline points="8 1 12 5 8 9"></polyline></svg>',
                    addTo: aLink
                });
                myElem.remove();
            }
        }).catch(error => 'An error occurred while loading button9');
    }
}


export function button10(options) {
    let buttons10 = document.querySelectorAll(options && options.currentDiv ? options.currentDiv : '.button10');
    if (buttons10[0]) {
        import('fullib-js/src/css/button/button10.css').then(({default: button10}) => {
            for (let i = 0, len = buttons10.length; i < len; i++) {
                let myElem = buttons10[i];
                let optionLink = getOptionLink(myElem);

                let containerButton = addElement('div', 'container-button10', {addTo: myElem.parentNode});
                let aLink = addElement('a', 'button10', {
                    target: optionLink.targetMyElem,
                    href: optionLink.linkMyElem,
                    id: optionLink.idMyElem,
                    rel: optionLink.relMyElem,
                    addTo: containerButton,
                    text: optionLink.textMyElem
                });
                myElem.remove();
            }
        }).catch(error => 'An error occurred while loading button10');
    }
}


export function button11(options) {
    let buttons11 = document.querySelectorAll(options && options.currentDiv ? options.currentDiv : '.button11');
    if (buttons11[0]) {
        import('fullib-js/src/css/button/button11.css').then(({default: button11}) => {
            for (let i = 0, len = buttons11.length; i < len; i++) {
                let myElem = buttons11[i];
                let optionLink = getOptionLink(myElem);

                let containerButton = addElement('div', 'container-button11', {addTo: myElem.parentNode});
                let aLink = addElement('a', 'button11', {
                    target: optionLink.targetMyElem,
                    href: optionLink.linkMyElem,
                    id: optionLink.idMyElem,
                    rel: optionLink.relMyElem,
                    addTo: containerButton,
                    text: optionLink.textMyElem
                });
                myElem.remove();
            }
        }).catch(error => 'An error occurred while loading button11');
    }
}


export function button12(options) {
    let buttons12 = document.querySelectorAll(options && options.currentDiv ? options.currentDiv : '.button12');
    if (buttons12[0]) {
        import('fullib-js/src/css/button/button12.css').then(({default: button12}) => {
            for (let i = 0, len = buttons12.length; i < len; i++) {
                let myElem = buttons12[i];
                let optionLink = getOptionLink(myElem);

                let containerButton = addElement('div', 'container-button12', {addTo: myElem.parentNode});
                let aLink = addElement('a', 'button12', {
                    target: optionLink.targetMyElem,
                    href: optionLink.linkMyElem,
                    id: optionLink.idMyElem,
                    rel: optionLink.relMyElem,
                    addTo: containerButton,
                    text: optionLink.textMyElem
                });
                myElem.remove();
            }
        }).catch(error => 'An error occurred while loading button12');
    }
}

export function button13(options) {
    let buttons13 = document.querySelectorAll(options && options.currentDiv ? options.currentDiv : '.button13');
    if (buttons13[0]) {
        import('fullib-js/src/css/button/button13.css').then(({default: button13}) => {
            for (let i = 0, len = buttons13.length; i < len; i++) {
                let myElem = buttons13[i];
                let optionLink = getOptionLink(myElem);

                let containerButton = addElement('div', 'container-button13', {addTo: myElem.parentNode});


                let aLink = addElement('a', 'button13', {
                    target: optionLink.targetMyElem,
                    href: optionLink.linkMyElem,
                    id: optionLink.idMyElem,
                    rel: optionLink.relMyElem,
                    addTo: containerButton,
                    text: optionLink.textMyElem
                });

                addElement('div', 'horizontal', {addTo: aLink});
                addElement('div', 'vertical', {addTo: aLink});

                myElem.remove();
            }
        }).catch(error => 'An error occurred while loading button13');
    }
}

export function button14(options) {
    let buttons14 = document.querySelectorAll(options && options.currentDiv ? options.currentDiv : '.button14');
    if (buttons14[0]) {
        for (let i = 0, len = buttons14.length; i < len; i++) {
            buttons14[i].classList.add('buttons14');
        }

        import('fullib-js/src/css/button/button14.css').then(({default: button14}) => {
        }).catch(error => 'An error occurred while loading button14');
    }
}

export function button15(options) {
    let buttons15 = document.querySelectorAll(options && options.currentDiv ? options.currentDiv : '.button15');
    if (buttons15[0]) {
        import('fullib-js/src/css/button/button15.css').then(({default: button15}) => {
            for (let i = 0, len = buttons15.length; i < len; i++) {
                let myElem = buttons15[i];
                myElem.classList.add('button15');
                let textContent = myElem.textContent;
                myElem.textContent = "";
                addElement('span', '', {addTo: myElem, text: textContent});
            }
        }).catch(error => 'An error occurred while loading button15');
    }
}

//FUNCTION TO CREATE DEFAULT MENU 1
export function menu1(options) {
    let menus1 = document.querySelectorAll(options && options.currentDiv ? options.currentDiv : '.menu1');
    let direction = options && options.direction ? options.direction : 'top-right';

    if (menus1[0]) {
        for (let i = 0, len = menus1.length; i < len; i++) {
            menus1[i].classList.add('menu1');
            document.getElementById('main-navigation-nav').classList.add(direction);
        }

        import('fullib-js/src/css/menu/menu1.css').then(({default: menu1}) => {
            document.getElementsByClassName('navbar-toggler')[0].onclick = function () {
                document.getElementById('main-navigation-nav').classList.toggle('nav-active');
            }
        }).catch(error => 'An error occurred while loading menu1');
    }
}

//FUNCTION TO CREATE DEFAULT MENU 2
export function menu2(options) {
    let menus2 = document.querySelectorAll(options && options.currentDiv ? options.currentDiv : '.menu2');
    if (menus2[0]) {
        for (let i = 0, len = menus2.length; i < len; i++) {
            menus2[i].classList.add('menu2');
        }
        import('fullib-js/src/css/menu/menu2.css').then(({default: menu2}) => {
            document.getElementsByClassName('navbar-toggler')[0].onclick = function () {
                document.getElementById('main-navigation-nav').classList.toggle('nav-active');
            }
        }).catch(error => 'An error occurred while loading menu2');
    }
}

//FUNCTION TO CREATE DEFAULT MENU 4
export function menu4(options) {
    let menus4 = document.querySelectorAll(options && options.currentDiv ? options.currentDiv : '.menu4');
    if (menus4[0]) {
        for (let i = 0, len = menus4.length; i < len; i++) {
            menus4[i].classList.add('menu4');
        }

        import('fullib-js/src/css/menu/menu4.css').then(({default: menu4}) => {
            document.getElementsByClassName('navbar-toggler')[0].onclick = function () {
                document.getElementById('main-navigation-nav').classList.toggle('nav-active');
            }
        }).catch(error => 'An error occurred while loading menu4');
    }
}

//FUNCTION TO CREATE DEFAULT MENU 5
export function menu5(options) {
    let menus5 = document.querySelectorAll(options && options.currentDiv ? options.currentDiv : '.menu5');
    if (menus5[0]) {
        for (let i = 0, len = menus5.length; i < len; i++) {
            menus5[i].classList.add('menu5');
        }

        import('fullib-js/src/css/menu/menu5.css').then(({default: menu5}) => {
            document.getElementsByClassName('navbar-toggler')[0].onclick = function () {
                document.getElementById('main-navigation-nav').classList.toggle('nav-active');
            }
        }).catch(error => 'An error occurred while loading menu4');
    }
}

//FUNCTION TO ADD PARALLAX TO A BACKGROUND
export function parallax(options) {
    let parallaxs = document.querySelectorAll(options && options.currentDiv ? options.currentDiv : ".parallax");

    if (parallaxs[0]) {

        //PARAMS
        let forceInitial = options && options.force ? options.force : 2;
        let lastScrollTop = 0;
        let force = 0;
        let height = options && options.height ? options.height : 200;
        let backgroundSize = options && options.backgroundSize ? options.backgroundSize : 'cover';
        let backgroundRepeat = options && options.backgroundRepeat ? options.backgroundRepeat : 'no-repeat';
        let backgroundDirection = options && options.backgroundDirection ? options.backgroundDirection : 'center';
        let responsives = options && options.responsive ? options.responsive : null;
        let documentWidth = window.innerWidth;

        for (let i = 0, len = parallaxs.length; i < len; i++) {
            let myElem = parallaxs[i];
            let media = myElem.getAttribute('data-backgroundImage');

            if (responsives) {
                for (let ab = 0, len = responsives.length; ab < len; ab++) {
                    let responsiveObject = responsives[ab];
                    if (documentWidth < responsiveObject.mediaQuery) {
                        height = responsiveObject.height ? responsiveObject.height : height;
                        forceInitial = responsiveObject.force ? responsiveObject.force : forceInitial;
                        backgroundSize = responsiveObject.backgroundSize ? responsiveObject.backgroundSize : backgroundSize;
                        backgroundRepeat = responsiveObject.backgroundRepeat ? responsiveObject.backgroundRepeat : backgroundRepeat;
                        backgroundDirection = responsiveObject.backgroundDirection ? responsiveObject.backgroundDirection : backgroundDirection;
                    }
                }
            }
            myElem.classList.add('parallax');
            myElem.style.backgroundImage = "url('" + media + "')";
            myElem.style.minHeight = height + "px";
            myElem.style.backgroundSize = backgroundSize;
            myElem.style.backgroundRepeat = backgroundRepeat;
            myElem.style.backgroundPosition = backgroundDirection + ' ' + '0px';

            window.addEventListener('scroll', function () {
                let st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"

                if (isElementInViewport(myElem)) {
                    let yPos = null;
                    if (st > lastScrollTop) {
                        // downscroll code
                        yPos = forceInitial + force;
                    } else {
                        // upscroll code
                        yPos = -forceInitial + force;
                    }
                    force = yPos;

                    if (yPos < height && yPos > 0) {
                        let coords = backgroundDirection + ' ' + -yPos + 'px';
                        myElem.style.backgroundPosition = coords;
                    }
                }
                lastScrollTop = st <= 0 ? 0 : st;
            }, false);
        }
    }
}

//FUNCTION TO CHANGE BACKGROUND COLOR ON DIV VIEWPORT
export function changeBackground(options) {
    if (!options.transition) {
        options.transition = "1s linear";
    }
    let changeBackgrounds = document.querySelectorAll(options && options.currentDiv ? options.currentDiv : ".change-background");

    let body = document.body;
    if (changeBackgrounds[0]) {
        for (let i = 0, len = changeBackgrounds.length; i < len; i++) {
            let myElem = changeBackgrounds[i];
            myElem.classList.add('change-background');
            body.style.transition = options.transition;

            if (isElementInViewport(myElem)) {
                body.style.backgroundColor = options.backgroundColor;
            }

            window.addEventListener('scroll', function () {
                if (isElementInViewport(myElem)) {
                    body.style.backgroundColor = options.backgroundColor;
                } else {
                    body.style.backgroundColor = "initial";
                }
            });
        }
    }
}

//FUNCTION TO DRAW LINES SVG
export function drawsvg(options) {
    let drawsvgs = document.querySelectorAll(options && options.currentDiv ? options.currentDiv : '.drawsvg');
    if (drawsvgs[0]) {
        import('fullib-js/src/css/reveal/drawsvg.css').then(({default: drawsvg}) => {
            for (let i = 0, len = drawsvgs.length; i < len; i++) {
                let myElem = drawsvgs[i];
                myElem.classList.add('drawsvg');

                if (isElementInViewport(myElem)) {
                    myElem.classList.add('active');
                }

                window.addEventListener('scroll', function () {
                    if (isElementInViewport(myElem)) {
                        myElem.classList.add('active');
                    }
                });
            }
        }).catch(error => 'An error occurred while loading drawsvg');
    }
}


//FUNCTION TO ADD A CUSTOM CURSOR
export function cursor(options) {

    //ONLY FOR DESKTOP BY DEFAULT
    let removeAt = options.removeAt ? options.removeAt : 991;
    let mouseTargets = document.querySelectorAll(options && options.zoomOnDiv ? options.zoomOnDiv : '.titlezoomcursor');
    let firstCursorSize = options.firstCursor && options.firstCursor.size ? options.firstCursor.size : 10;
    let secondCursorSize = options.secondCursor && options.secondCursor.size ? options.firstCursor.size : 10;


    if (window.innerWidth > removeAt) {
        if (document.querySelectorAll(options && options.currentDiv ? options.currentDiv : '.custom-cursor')[0]) {

            let removeOriginalCursor = options.removeOriginalCursor ? options.removeOriginalCursor : false;

            if (removeOriginalCursor) {
                document.body.style.cursor = 'none';
            }

            //CURSOR1
            let cursor1 = null;
            if (options.activeFirstCursor) {

                //ADDING CSS
                cursor1 = addElement('div', ['rounded-cursor', 'cursor-follower']);
                cursor1.style.backgroundColor = options.firstCursor && options.firstCursor.backgroundColor ? options.firstCursor.backgroundColor : "#000000";
                cursor1.style.width = firstCursorSize + 'px';
                cursor1.style.height = firstCursorSize + 'px';
                cursor1.style.border = options.firstCursor && options.firstCursor.border ? options.firstCursor.border : "";
                cursor1.style.transition = options.firstCursor && options.firstCursor.transition ? options.firstCursor.transition : "top .1s, left .1s, width .5s, height .5s";
                cursor1.style.borderRadius = options.firstCursor && options.firstCursor.type === "round" ? "50%" : options.firstCursor && options.firstCursor.type === "square" ? "0" : (options.firstCursor && options.firstCursor.type ? options.firstCursor.type : "50%");
                cursor1.style.position = "absolute";
                cursor1.style.zIndex = 9999;
                cursor1.style.pointerEvents = 'none';
            }

            //CURSOR2 ( FOLLOWED BY THE FIRST ONE )
            let cursor2 = null;
            if (options.activeSecondCursor) {

                //ADDING CSS
                cursor2 = addElement('div', ['rounded-cursor', 'cursor-dot']);
                cursor2.style.backgroundColor = options.secondCursor && options.secondCursor.backgroundColor ? options.secondCursor.backgroundColor : "#000000";
                cursor2.style.width = secondCursorSize + 'px';
                cursor2.style.height = secondCursorSize + 'px';
                cursor2.style.border = options.secondCursor && options.secondCursor.border ? options.secondCursor.border : "";
                cursor2.style.transition = options.secondCursor && options.secondCursor.transition ? options.secondCursor.transition : "top .25s, left .25s, width .7s, height .7s";
                cursor2.style.borderRadius = options.secondCursor && options.secondCursor.type === "round" ? "50%" : options.secondCursor && options.secondCursor.type === "square" ? "0" : (options.secondCursor && options.secondCursor.type ? options.secondCursor.type : "50%");
                cursor2.style.position = "absolute";
                cursor2.style.zIndex = 9999;
                cursor2.style.pointerEvents = 'none';
            }


            //LOOP ON EACH ELEMENT TO ZOOM IN
            for (let i = 0, len = mouseTargets.length; i < len; i++) {
                let mouseTarget = mouseTargets[i];
                mouseTarget.style.cursor = "none";

                //MOUSEENTER : ZOOM
                mouseTarget.addEventListener('mouseenter', e => {
                    if (cursor1) {
                        cursor1.classList.add('focus');
                        cursor1.style.width = options.firstCursor && options.firstCursor.hoverSize ? options.firstCursor.hoverSize + 'px' : options.firstCursor.size * 2 + 'px';
                        cursor1.style.height = options.firstCursor && options.firstCursor.hoverSize ? options.firstCursor.hoverSize + 'px' : options.firstCursor.size * 2 + 'px';
                    }

                    if (cursor2) {
                        cursor2.classList.add('focus');
                        cursor2.style.width = options.secondCursor && options.secondCursor.hoverSize ? options.secondCursor.hoverSize + 'px' : options.secondCursor.size * 2 + 'px';
                        cursor2.style.height = options.secondCursor && options.secondCursor.hoverSize ? options.secondCursor.hoverSize + 'px' : options.secondCursor.size * 2 + 'px';
                    }
                })

                //MOUSEENTER : DEZOOM
                mouseTarget.addEventListener('mouseleave', e => {
                    if (cursor1) {
                        cursor1.classList.remove('focus');
                        cursor1.style.width = options.firstCursor && options.firstCursor.size ? options.firstCursor.size + 'px' : 10 + 'px';
                        cursor1.style.height = options.firstCursor && options.firstCursor.size ? options.firstCursor.size + 'px' : 10 + 'px';
                    }

                    if (cursor2) {
                        cursor2.classList.remove('focus');
                        cursor2.style.width = options.secondCursor && options.secondCursor.size ? options.secondCursor.size + 'px' : 5 + 'px';
                        cursor2.style.height = options.secondCursor && options.secondCursor.size ? options.secondCursor.size + 'px' : 5 + 'px';
                    }
                })
            }

            //UPDATE MOOSE POSITION ON THE PAGE
            let onmousemove = function (e) {
                let xpos = e.pageX;
                let ypos = e.pageY;

                if (cursor1) {
                    cursor1.style.left = (xpos - (firstCursorSize / 2)) + 'px';
                    cursor1.style.top = (ypos - (firstCursorSize / 2)) + 'px';
                }

                if (cursor2) {
                    cursor2.style.left = (xpos - (secondCursorSize / 2)) + 'px';
                    cursor2.style.top = (ypos - (secondCursorSize / 2)) + 'px';
                }
            }

            document.addEventListener('mousemove', onmousemove);
        }
    }
}

//FUNCTION TO ADD A NEW ELEMENT IN HTML
export function addElement(type, classes, options = null) {
    let newDiv = document.createElement(type);

    if (Array.isArray(classes)) {
        newDiv.classList.add(...classes);
    } else if (classes instanceof DOMTokenList) {
        newDiv.classList.add(...classes)
    } else {
        if (classes !== '') {
            newDiv.classList.add(classes);
        }
    }

    if (options && options.text) {
        newDiv.innerHTML = options.text;
    }

    if (options && options.id) {
        newDiv.setAttribute('id', options.id);
    }

    if (options && options.href) {
        newDiv.setAttribute('href', options.href);
    }

    if (options && options.rel) {
        newDiv.setAttribute('rel', options.rel);
    }

    if (options && options.target) {
        newDiv.setAttribute('target', options.target);
    }

    if (options && options.type) {
        newDiv.setAttribute('type', options.type);
    }

    if (options && options.src) {
        newDiv.setAttribute('src', options.src);
    }

    if (options && options.addTo) {
        options.addTo.appendChild(newDiv);
    } else {
        document.body.appendChild(newDiv);
    }

    return newDiv;
}

//GET ALL DATAS OF A LINK
export function getOptionLink(elem) {
    let textMyElem = elem.innerHTML;
    let linkMyElem = elem.getAttribute('href');
    let idMyElem = elem.getAttribute('id');
    let relMyElem = elem.getAttribute('rel');
    let targetMyElem = elem.getAttribute('target');

    return {
        textMyElem: textMyElem,
        linkMyElem: linkMyElem,
        idMyElem: idMyElem,
        relMyElem: relMyElem,
        targetMyElem: targetMyElem
    }
}

//FUNCTION TO CHECK IF ELMENT IS IN VIEWPORT
export function isElementInViewport(item) {
    let bounding = item.getBoundingClientRect(),
        myElementHeight = item.offsetHeight,
        myElementWidth = item.offsetWidth;

    if (bounding.top >= -myElementHeight
        && bounding.left >= -myElementWidth
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + myElementWidth
        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight) {
        return true;
    } else {
        return false;
    }
}

//CREATION ANIMATION SPLITTED TEXT
export function splitText(options) {

    //PARAMS
    let parent = options.parent;
    let animationName = options.animationName;
    let className = options.className;
    let animation = options.animation ? true : false;
    let center = animation && options.animation.center ? options.animation.center : false;
    let reverse = animation && options.animation.reverse ? options.animation.reverse : false;
    let word = options.word ? options.word : false;
    let hasKeyframe = animation && options.animation.keyframe ? true : false;
    let keyframe = animation && options.animation.keyframe ? options.animation.keyframe : false;
    let textWrappers = document.querySelectorAll(parent);
    let fromCss = animation && hasKeyframe && options.animation.keyframe.from ? options.animation.keyframe.from : false;
    let delayBetweenIteration = animation && hasKeyframe && options.animation.delayBetweenIteration ? options.animation.delayBetweenIteration : false;
    let delayBeforeFirstStart = options.animation.delayBeforeFirstStart ? options.animation.delayBeforeFirstStart : 0;
    let delayBetweenletters = options.animation.delayBetweenLetters ? options.animation.delayBetweenLetters : 0;
    let duration = options.animation.duration ? options.animation.duration : 500;
    let iterations = options.animation.iterations ? options.animation.iterations : 1;
    let smooth = options.animation.smooth ? options.animation.smooth : false;
    let hover = options.animation.hover ? options.animation.hover : false;

    if (delayBetweenletters >= duration) {
        console.log("delayBetweenletters can't be > to duration. Maybe it will not work as expected");
    }

    //ADD KEYFRAME CSS FOR ANIMATION
    if (animation && hasKeyframe) {
        keyframe = JSON.stringify(options.animation.keyframe).replaceAll('"', '');
        keyframe = keyframe.replaceAll('%:', '%');
        keyframe = keyframe.replaceAll('from:', 'from');
        keyframe = keyframe.replaceAll('to:', 'to');
        keyframe = keyframe.replaceAll('},', '}');
        keyframe = keyframe.replaceAll(',', ';');

        if (delayBetweenIteration) {
            let theDelay = 100 - ((100 * delayBetweenIteration) / (delayBetweenIteration + duration));
            let keyframeTo = JSON.stringify(options.animation.keyframe.to).replaceAll('"', '');
            keyframeTo = keyframeTo.replaceAll('to:', 'to');
            keyframeTo = keyframeTo.replaceAll('},', '}');
            keyframeTo = keyframeTo.replaceAll(',', ';');

            keyframe = keyframe.replaceAll('to', theDelay + '%');
            keyframe = keyframe.slice(0, -1) + "to" + keyframeTo + "" + keyframe.slice(-1);
        }

        if (smooth) {
            let keyframeTo = JSON.stringify(options.animation.keyframe.from).replaceAll('"', '');
            keyframeTo = keyframeTo.replaceAll('to:', 'to');
            keyframeTo = keyframeTo.replaceAll('},', '}');
            keyframeTo = keyframeTo.replaceAll(',', ';');

            keyframe = keyframe.replaceAll('to', smooth);
            keyframe = keyframe.slice(0, -1) + "to" + keyframeTo + "" + keyframe.slice(-1);
        }

        window.setTimeout(() => {
            addKeyFrame("@keyframes split-" + animationName + "" + keyframe);
        }, delayBeforeFirstStart)

    }

    //FOR EACH DIV WHO CONTAIN CLASS NAME
    for (let i = 0, len = textWrappers.length; i < len; i++) {
        let parent = textWrappers[i];
        parent.classList.add('split');

        //IF SPLIT BY WORDS
        if (word) {
            let wordsArray = parent.textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim().split(' ');
            let htmlToReplace = "";
            for (let wordLoop = 0, lenghtLoop = wordsArray.length; wordLoop < lenghtLoop; wordLoop++) {
                htmlToReplace += '<span class="' + className + '">' + wordsArray[wordLoop] + '</span> ';
            }
            parent.innerHTML = htmlToReplace;

        } else {
            //IF SPLIT BY LETTERS
            parent.innerHTML = parent.textContent.replace(/\S/g, "<span class='" + className + "'>$&</span>");
        }

        //PARAMS ANIMATION RELATED TO PARENT ELEMENT
        let childrens = parent.children;
        let lenghtLetter = childrens.length;
        let maxDelay = delayBetweenletters + ((delayBetweenletters + (delayBetweenletters * childrens.length)) / 2);

        //IF REVERSE IS TRUE
        if (reverse) {
            maxDelay = delayBetweenletters;
        }

        //LOOP ON EACH SPAN ELEMENT
        for (let g = 0, len2 = childrens.length; g < len2; g++) {

            //ADDING DEFAULT DATA TO SPAN ELEMS
            let elementDiv = childrens[g];
            elementDiv.classList.add(className + "-" + g);
            elementDiv.style.display = "inline-block";

            if (animation && hasKeyframe) {

                //ANIMATION STARTING ON CENTER
                if (center) {
                    //RIGHT SIDE
                    if (g >= (lenghtLetter / 2)) {
                        maxDelay = reverse ? maxDelay - delayBetweenletters : maxDelay + delayBetweenletters;
                        elementDiv.style.animationDelay = maxDelay + "ms";

                    } else {
                        //LEFT SIDE
                        maxDelay = reverse ? maxDelay + delayBetweenletters : maxDelay - delayBetweenletters;
                        elementDiv.style.animationDelay = maxDelay + "ms";
                    }
                } else {
                    //ANIMATION STARTING ON LEFT
                    elementDiv.style.animationDelay = (delayBetweenletters + (delayBetweenletters * g)) + "ms";
                }

                //ADDING ANIMATION CSS TO SPAN ELEMENT
                elementDiv.style.animationIterationCount = iterations;

                let durationInMs = duration;

                if (delayBetweenIteration) {
                    elementDiv.style.animationDuration = durationInMs + delayBetweenIteration + "ms";
                } else {
                    elementDiv.style.animationDuration = durationInMs + "ms";
                }

                elementDiv.style.animationName = 'split-' + animationName;
                elementDiv.style.animationFillMode = 'forwards';

                if (hover) {
                    elementDiv.style.animationPlayState = 'paused';
                }

                //KEYFRAME PARAMS AVAILABLE
                if (fromCss.opacity || fromCss.opacity === 0) {
                    elementDiv.style.opacity = fromCss.opacity;
                }
                if (fromCss.transform) {
                    elementDiv.style.transform = fromCss.transform;
                }
                if (fromCss["letter-spacing"]) {
                    elementDiv.style.letterSpacing = fromCss["letter-spacing"];
                }
            }

        }

        if (!hover) {
            //IF PARENT IN VIEWPORT ON LOAD
            if (isElementInViewport(parent)) {
                parent.classList.add('active');
            }

            //IF PARENT IN VIEWPORT ON SCROLL
            window.addEventListener('scroll', function () {
                if (isElementInViewport(parent)) {
                    parent.classList.add('active');
                }
            });
        }


        //IF ON HOVER
        if (hover) {
            parent.addEventListener('mouseenter', function () {
                parent.classList.add('active');
            });
            parent.addEventListener('mouseleave', function () {
                parent.classList.remove('active');
            });
        }

    }
}

export function animation(options) {
    let classNames = options.classNames ? options.classNames : false;


    if (!classNames) {
        console.log('classNames missing');
    }

    let divs = document.querySelectorAll(classNames);

    divs.forEach((elem) => {

        let mobileBreakpoint, isScroll, duration, delay, fromCss, toCss, start, end, timingFunction, screenHeight,
            measure,
            fromCssY, toCssY, fromCssOpacity,
            toCssOpacity, fromCssX, toCssX, fromCssScale, toCssScale, fromCssRotate, toCssRotate;

        mobileBreakpoint = options.mobileBreakpoint ? options.mobileBreakpoint : 991;
        isScroll = options.scroll ? options.scroll : false;
        isScroll = options.isScrollMobile && window.innerWidth < mobileBreakpoint ? options.isScrollMobile : isScroll;
        duration = options.duration ? options.duration : 500;
        delay = options.delay ? options.delay : 0;
        fromCss = options.from ? options.from : false;
        toCss = options.to ? options.to : false;
        start = options.start ? options.start : '0%';
        end = options.end ? options.end : '100%';
        timingFunction = options.timingFunction ? options.timingFunction : 'ease';
        screenHeight = window.screen.height;
        measure = options.measure ? options.measure : 'px';

        //css
        fromCssY = typeof fromCss.y !== 'undefined' ? fromCss.y.toString() : false;
        toCssY = typeof toCss.y !== 'undefined' ? toCss.y.toString() : false;

        fromCssOpacity = typeof fromCss.opacity !== 'undefined' ? parseFloat(fromCss.opacity) : 1;
        toCssOpacity = typeof toCss.opacity !== 'undefined' ? parseFloat(toCss.opacity) : 1;

        fromCssX = typeof fromCss.x !== 'undefined' ? fromCss.x.toString() : false;
        toCssX = typeof toCss.x !== 'undefined' ? toCss.x.toString() : false;

        fromCssScale = typeof fromCss.scale !== 'undefined' ? fromCss.scale.toString() : false;
        toCssScale = typeof toCss.scale !== 'undefined' ? toCss.scale.toString() : false;

        fromCssRotate = typeof fromCss.rotate !== 'undefined' ? fromCss.rotate.toString() : false;
        toCssRotate = typeof toCss.rotate !== 'undefined' ? toCss.rotate.toString() : false;
        //end

        if (elem.hasAttribute('data-scroll')) {
            isScroll = elem.getAttribute('data-scroll') === 'true';
        }

        if (elem.hasAttribute('data-scroll-mobile')) {
            isScroll = elem.getAttribute('data-scroll-mobile') === 'true' && window.innerWidth < mobileBreakpoint ? true : (elem.getAttribute('data-scroll-mobile') === 'false' && window.innerWidth < mobileBreakpoint ? false : isScroll);
        }

        if (elem.hasAttribute('data-measure')) {
            measure = elem.getAttribute('data-measure');
        }

        if (elem.hasAttribute('data-timing-function')) {
            timingFunction = elem.getAttribute('data-timing-function');
        }

        if (elem.hasAttribute('data-start')) {
            start = elem.getAttribute('data-start');
        }

        if (elem.hasAttribute('data-end')) {
            end = elem.getAttribute('data-end');
        }

        if (elem.hasAttribute('data-delay')) {
            delay = parseFloat(elem.getAttribute('data-delay'));
        }

        if (elem.hasAttribute('data-duration')) {
            duration = parseFloat(elem.getAttribute('data-duration'));
        }

        if (elem.hasAttribute('data-from-opacity')) {
            fromCssOpacity = parseFloat(elem.getAttribute('data-from-opacity'));
        }

        if (elem.hasAttribute('data-to-opacity')) {
            toCssOpacity = parseFloat(elem.getAttribute('data-to-opacity'));
        }

        if (elem.hasAttribute('data-from-y')) {
            fromCssY = parseFloat(elem.getAttribute('data-from-y'));
        }

        if (elem.hasAttribute('data-to-y') || elem.getAttribute('data-to-y') === '0') {
            toCssY = parseFloat(elem.getAttribute('data-to-y'));
        }

        if (elem.hasAttribute('data-from-x')) {
            fromCssX = parseFloat(elem.getAttribute('data-from-x'));
        }

        if (elem.hasAttribute('data-to-x')) {
            toCssX = parseFloat(elem.getAttribute('data-to-x'));
        }

        if (elem.hasAttribute('data-from-scale')) {
            fromCssScale = parseFloat(elem.getAttribute('data-from-scale'));
        }

        if (elem.hasAttribute('data-to-scale')) {
            toCssScale = parseFloat(elem.getAttribute('data-to-scale'));
        }

        if (elem.hasAttribute('data-from-rotate')) {
            fromCssRotate = parseFloat(elem.getAttribute('data-from-rotate'));
        }

        if (elem.hasAttribute('data-to-rotate')) {
            toCssRotate = parseFloat(elem.getAttribute('data-to-rotate'));
        }

        elem.style.opacity = fromCssOpacity;

        let cssPosition = getDefaultPosition(fromCssX, toCssX, fromCssY, toCssY, fromCssScale, toCssScale, fromCssRotate, toCssRotate, measure);

        elem.style.transform = cssPosition.transformFromCss;

        if (!isScroll) {
            if (isElementInViewport(elem)) {
                elem.style.transition = 'all ' + duration + 'ms ' + timingFunction + ' ' + delay + 'ms';
                elem.style.transform = cssPosition.transformToCss;
                elem.style.opacity = toCssOpacity;
            }

            window.addEventListener("scroll", (event) => {
                if (isElementInViewport(elem)) {
                    elem.style.transition = 'all ' + duration + 'ms ' + timingFunction + ' ' + delay + 'ms';
                    elem.style.transform = cssPosition.transformToCss;
                    elem.style.opacity = toCssOpacity;
                } else {
                    elem.style.transform = cssPosition.transformFromCss;
                    elem.style.opacity = fromCssOpacity;
                }
            });
        }

        if (isScroll) {
            window.addEventListener('load', function () {
                actionScroll(elem, fromCssOpacity, toCssOpacity, fromCssX, toCssX, fromCssY, toCssY, fromCssScale, toCssScale, fromCssRotate, toCssRotate, start, end, measure, screenHeight);
            });

            window.addEventListener("scroll", (event) => {
                actionScroll(elem, fromCssOpacity, toCssOpacity, fromCssX, toCssX, fromCssY, toCssY, fromCssScale, toCssScale, fromCssRotate, toCssRotate, start, end, measure, screenHeight)
            });
        }
    });
}

function actionScroll(elem, fromCssOpacity, toCssOpacity, fromCssX, toCssX, fromCssY, toCssY, fromCssScale, toCssScale, fromCssRotate, toCssRotate, start, end, measure, screenHeight) {
    let scrollGlobal = window.scrollY;


    let elemHeight = elem.offsetHeight;
    let windowHeight = window.innerHeight;
    let scrollPositionToElem = elem.getBoundingClientRect().bottom - elemHeight;
    let currentPurcent = ((windowHeight - scrollPositionToElem) * 100) / (windowHeight + elemHeight);
    let resPurcent = Math.max(0, Math.min(100, currentPurcent));

    if (currentPurcent >= 0 && scrollPositionToElem <= screenHeight && currentPurcent >= parseFloat(start) && currentPurcent <= parseFloat(end)) {

        let scrollPurcentInView = ((currentPurcent - parseFloat(start)) * 100) / (parseFloat(end) - parseFloat(start));

        if (toCssOpacity >= 0) {
            let opacityRes = calcCss(fromCssOpacity, toCssOpacity, scrollPurcentInView, parseFloat(start), parseFloat(end));
            elem.style.opacity = opacityRes;
        }

        let transformCss = "";

        if (validNumber(fromCssX) && validNumber(toCssX)) {

            let cssXRes = calcCss(fromCssX, toCssX, scrollPurcentInView, parseFloat(start), parseFloat(end));
            transformCss += "translateX(" + cssXRes + measure + ") ";
        }

        if (validNumber(fromCssY) && validNumber(toCssY)) {
            let cssYRes = calcCss(fromCssY, toCssY, scrollPurcentInView, parseFloat(start), parseFloat(end));
            transformCss += "translateY(" + cssYRes + measure + ") ";
        }

        if (validNumber(fromCssScale) && validNumber(toCssScale)) {
            let cssScaleRes = calcCss(fromCssScale, toCssScale, scrollPurcentInView, parseFloat(start), parseFloat(end));
            transformCss += "scale(" + cssScaleRes + ")";
        }

        if (validNumber(fromCssRotate) && validNumber(toCssRotate)) {
            let cssRotateRes = calcCss(fromCssRotate, toCssRotate, scrollPurcentInView, parseFloat(start), parseFloat(end));
            transformCss += "rotate(" + cssRotateRes + "deg)";
        }


        elem.style.transform = transformCss;
    }

    let cssPosition = getDefaultPosition(fromCssX, toCssX, fromCssY, toCssY, fromCssScale, toCssScale, fromCssRotate, toCssRotate, measure);

    if (currentPurcent < parseFloat(start) && currentPurcent < parseFloat(end)) {
        if (validNumber(toCssOpacity)) {
            elem.style.opacity = fromCssOpacity;
        }
        if (cssPosition.transformToCss) {
            elem.style.transform = cssPosition.transformFromCss;
        }
    }

    if (currentPurcent > parseFloat(start) && currentPurcent > parseFloat(end)) {
        if (validNumber(toCssOpacity)) {
            elem.style.opacity = toCssOpacity;
        }
        if (cssPosition.transformFromCss) {
            elem.style.transform = cssPosition.transformToCss;
        }
    }
}

function validNumber(number) {
    if (parseFloat(number) == 0) {
        return true;
    }

    return number;
}


function getDefaultPosition(fromCssX, toCssX, fromCssY, toCssY, fromCssScale, toCssScale, fromCssRotate, toCssRotate, measure) {
    let transformFromCss = "";
    let transformToCss = "";

    if (validNumber(fromCssX) && validNumber(toCssX)) {
        transformFromCss += "translateX(" + fromCssX + measure + ") ";
        transformToCss += "translateX(" + toCssX + measure + ") ";
    }

    if (validNumber(fromCssY) && validNumber(toCssY)) {
        transformFromCss += "translateY(" + fromCssY + measure + ") ";
        transformToCss += "translateY(" + toCssY + measure + ") ";
    }

    if (validNumber(fromCssScale) && validNumber(toCssScale)) {
        transformFromCss += "scale(" + fromCssScale + ") ";
        transformToCss += "scale(" + toCssScale + ") ";
    }

    if (validNumber(fromCssRotate) && validNumber(toCssRotate)) {
        transformFromCss += "rotate(" + fromCssRotate + "deg)";
        transformToCss += "rotate(" + toCssRotate + "deg)";
    }

    return {
        transformFromCss: transformFromCss,
        transformToCss: transformToCss,
    }
}

function calcCss(from, to, scrollPurcentInView, start, end) {
    return ((parseFloat(to) - parseFloat(from)) / 100) * scrollPurcentInView + parseFloat(from);
}

//FUNCTION TO GET RANDOM NUMBER BETWEEN TWO NUMBER
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

//FUNCTION TO ADD STYLE IN THE HEADER
function addKeyFrame(body) {
    document.head.insertAdjacentHTML("beforeend", '<style>' + body + '</style>')
}
