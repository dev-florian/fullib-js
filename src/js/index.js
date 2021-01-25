export function imageBlob(options) {
    let imageBulbsDiv = document.querySelectorAll(options && options.currentDiv ? options.currentDiv : '.blobed');
    let currentWindowWidth = window.innerWidth;
    let autoResponsive = options.autoResponsive ? options.autoResponsive : true;

    if (imageBulbsDiv) [0]
    {
        import('fullib-js/src/css/imageBlob/imageBlob.css').then(({default: blob}) => {
            for (let i = 0; i < imageBulbsDiv.length; i++) {
                let imageElem = imageBulbsDiv[i];
                imageElem.classList.add('blob');
                let srcElem = imageElem.getAttribute('src');
                let classNamesElem = imageElem.classList;
                let idElem = imageElem.getAttribute('id');
                let parentElem = imageElem.parentNode;
                let imageWidth = imageElem.getAttribute('width');
                let imageHeight = imageElem.getAttribute('height');

                imageElem.remove();

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

                little.style.backgroundImage = "url('" + srcElem + "')";
                medium.style.minWidth = imageWidth ? imageWidth + "px" : '400px';
                medium.style.maxWidth = imageWidth ? imageWidth + "px" : '400px';
                medium.style.minHeight = imageHeight ? imageHeight + "px" : '400px';
                medium.style.maxHeight = imageHeight ? imageHeight + "px" : '400px';


                if (autoResponsive && currentWindowWidth < 767) {
                    let sizeResized = currentWindowWidth - 80;
                    if (sizeResized < imageWidth) {
                        medium.style.minWidth = sizeResized + "px";
                        medium.style.maxWidth = sizeResized + "px";
                        medium.style.minHeight = sizeResized + "px";
                        medium.style.maxHeight = sizeResized + "px";
                    }
                }

                if (currentWindowWidth < 767) {
                    window.addEventListener("resize", function () {
                        if (autoResponsive) {
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
                        }
                    });
                }
            }
        }).catch(error => 'An error occurred while loading imageBlob');
    }
}

export function generateBulb(options) {

    let bulbsDiv = document.querySelectorAll(options.currentDiv ? options.currentDiv : '.generate-bulb');

    let minSize = options.minSize ? options.minSize : 5;
    let maxSize = options.maxSize ? options.maxSize : 30;
    let indexArray = null;

    if (options.classNames && options.classNames.includes('lax-parallax-right') && options.numberOfBulb < 50 && options.differentSpeed) {
        indexArray = options.classNames.indexOf('lax-parallax-right');
    }

    if (bulbsDiv[0] && maxSize > minSize) {
        for (let i = 0; i < bulbsDiv.length; i++) {
            let containerDiv = bulbsDiv[i];
            for (let g = 0; g < options.numberOfBulb; g++) {

                if (indexArray) {
                    options.classNames[indexArray] = 'lax-parallax-right-' + g;
                }

                let element = addElement('div', options.classNames, {addTo: containerDiv});

                let randomWith = getRandomArbitrary(minSize, maxSize);
                let randomTop = getRandomArbitrary(0, options.referTo ? document.querySelector(options.referTo).offsetHeight : containerDiv.parentNode.offsetHeight);
                let randomleft = getRandomArbitrary(options.fromLeft ? options.fromLeft : -200, window.innerWidth);
                element.style.backgroundColor = options.backgroundColor;
                element.style.borderRadius = options.type === "round" ? "50%" : "0";
                element.style.position = "absolute";
                element.style.height = randomWith + 'px';
                element.style.width = randomWith + 'px';
                element.style.left = randomleft + 'px';
                element.style.top = randomTop + 'px';
                element.style.zIndex = options.zIndex ? options.zIndex : 0;
                element.style.border = options.border ? options.border : "";
            }
        }
    }
}


export function mousemove() {
    document.addEventListener("mousemove", parallaxOnMouse);

    function parallaxOnMouse(e) {
        this.querySelectorAll('.mousemove').forEach(layer => {
            const speed = layer.getAttribute('data-speed');
            const x = (window.innerWidth - e.pageX * speed) / 100;
            const y = (window.innerHeight - e.pageY * speed) / 100;
            layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
        })
    }
}

export function lottie() {
    let lotties = document.querySelectorAll('.lottie')
    let lottiesOnScroll = document.querySelectorAll('.lottie-player');

    if (lotties[0]) {
        import('lottie-web/build/player/lottie.min').then(({default: bodymovin}) => {
            for (let i = 0; i < lotties.length; i++) {

                let mydiv = lotties[i];
                let file = mydiv.getAttribute('data-lottie-file');
                let click = mydiv.getAttribute('data-lottie-click');
                let hover = mydiv.getAttribute('data-lottie-hover');
                let scroll = mydiv.getAttribute('data-lottie-scroll');

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
                    renderer: 'svg',
                    loop: loop,
                    autoplay: autoplay,
                    path: file
                });


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
        }).catch(error => 'An error occurred while loading lottie web');
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

export function text1(options) {
    let text1 = document.querySelectorAll(options && options.currentDiv ? options.currentDiv : '.text1');
    if (text1[0]) {
        for (let i = 0, len = text1.length; i < len; i++) {
            let myElem = text1[i];
            myElem.classList.add('text1');

            let textMyElem = myElem.textContent;
            myElem.innerHTML = "";
            let letters = 0, lengthLetter = textMyElem.length;
            for (letters; letters < lengthLetter; letters++) {
                if (textMyElem[letters] === " ") {
                    myElem.innerHTML += " ";
                } else {
                    myElem.innerHTML += "<span>" + textMyElem[letters] + "</span>";
                }
            }
        }
        import('fullib-js/src/css/text/text1.css').then(({default: text1}) => {
        }).catch(error => 'An error occurred while loading text1');
    }
}

export function text2(options) {
    let texts2 = document.querySelectorAll(options && options.currentDiv ? options.currentDiv : '.text2');
    if (texts2[0]) {
        for (let i = 0, len = texts2.length; i < len; i++) {
            let myElem = texts2[i];
            myElem.classList.add('text2');

            myElem.style.backgroundImage = "url('" + options.media + "')";

            if (isElementInViewport(myElem)) {
                myElem.classList.add('active');
            }

            window.addEventListener('scroll', function () {
                if (isElementInViewport(myElem)) {
                    myElem.classList.add('active');
                }
            });
        }
        import('fullib-js/src/css/text/text2.css').then(({default: text2}) => {
        }).catch(error => 'An error occurred while loading text2');
    }
}

export function text3(options) {
    let texts3 = document.querySelectorAll(options && options.currentDiv ? options.currentDiv : '.text3');
    if (texts3[0]) {
        for (let i = 0, len = texts3.length; i < len; i++) {
            let myElem = texts3[i];
            myElem.classList.add('text3');
        }

        import('fullib-js/src/css/text/text3.css').then(({default: text3}) => {
        }).catch(error => 'An error occurred while loading text3');
    }
}

export function text4(options) {
    let texts4 = document.querySelectorAll(options && options.currentDiv ? options.currentDiv : '.text4');
    if (texts4[0]) {
        for (let i = 0, len = texts4.length; i < len; i++) {
            let myElem = texts4[i];
            myElem.classList.add('text4');
        }

        import('fullib-js/src/css/text/text4.css').then(({default: text4}) => {
        }).catch(error => 'An error occurred while loading text4');
    }
}

export function text5(options) {
    let texts5 = document.querySelectorAll(options && options.currentDiv ? options.currentDiv : '.text5');
    if (texts5[0]) {
        import('fullib-js/src/css/text/text5.css').then(({default: text5}) => {
            for (let i = 0, len = texts5.length; i < len; i++) {
                let myElem = texts5[i];
                myElem.classList.add('text5');

                let textMyElem = myElem.textContent;
                myElem.innerHTML = "";
                let letters = 0, lengthLetter = textMyElem.length;
                for (letters; letters < lengthLetter; letters++) {
                    if (textMyElem[letters] === " ") {
                        myElem.innerHTML += "<span>&nbsp;</span>";
                    } else {
                        myElem.innerHTML += "<span>" + textMyElem[letters] + "</span>";
                    }
                }

                let spans = myElem.children;

                let addEffectText5 = function (elem, adding) {
                    let counter = 1;
                    for (let c = 0, lenc = spans.length; c < lenc; c++) {
                        let mySpan = spans[c];
                        if (adding === true) {
                            mySpan.style.animationDelay = counter * 0.1 + 's';
                            mySpan.style.animationName = "rampUp";
                        } else {
                            mySpan.style.animationDelay = '0s';
                            mySpan.style.animationName = "unset";
                        }
                        counter++;
                    }
                }


                if (isElementInViewport(myElem)) {
                    myElem.classList.add('active');
                    addEffectText5(spans, true);

                }

                window.addEventListener('scroll', function () {
                    if (isElementInViewport(myElem)) {
                        if (!myElem.classList.contains('active')) {
                            addEffectText5(spans, true);
                            myElem.classList.add('active');
                        }

                    } else {
                        if (myElem.classList.contains('active')) {
                            addEffectText5(spans, false);
                            myElem.classList.remove('active');
                        }
                    }
                });
            }
        }).catch(error => 'An error occurred while loading text5');
    }
}

export function text6(options) {
    let texts6 = document.querySelectorAll(options && options.currentDiv ? options.currentDiv : '.text6');
    if (texts6[0]) {
        import('fullib-js/src/css/text/text6.css').then(({default: text6}) => {
            for (let i = 0, len = texts6.length; i < len; i++) {
                let myElem = texts6[i];
                myElem.classList.add('text6');

                let textMyElem = myElem.textContent;
                myElem.innerHTML = "";
                let letters = 0, lengthLetter = textMyElem.length;
                for (letters; letters < lengthLetter; letters++) {
                    if (textMyElem[letters] === " ") {
                        myElem.innerHTML += "<span>&nbsp;</span>";
                    } else {
                        myElem.innerHTML += "<span>" + textMyElem[letters] + "</span>";
                    }
                }

                let spans = myElem.children;
                let counter = 1;
                for (let c = 0, lenc = spans.length; c < lenc; c++) {
                    let mySpan = spans[c];
                    mySpan.style.animationDelay = counter * 0.1 + 's';
                    mySpan.style.animationName = "rampUpText6";
                    counter++;
                }

                if (isElementInViewport(myElem)) {
                    myElem.classList.add('active');
                }
                window.addEventListener('scroll', function () {
                    if (isElementInViewport(myElem)) {
                        myElem.classList.add('active');
                    }
                });
            }
        }).catch(error => 'An error occurred while loading text6');
    }
}

export function text7(options) {
    let texts7 = document.querySelectorAll(options && options.currentDiv ? options.currentDiv : '.text7');
    if (texts7[0]) {
        for (let i = 0, len = texts7.length; i < len; i++) {
            let myElem = texts7[i];
            myElem.classList.add('text7');
        }
        import('fullib-js/src/css/text/text7.css').then(({default: text7}) => {
        }).catch(error => 'An error occurred while loading text7');
    }
}

export function blotter() {
    let blotters = document.getElementsByClassName('blotter');
    if (blotters[0]) {
        bottlerFirstScript();
    }
}

function bottlerFirstScript() {
    var url = "https://cdnjs.cloudflare.com/ajax/libs/Blotter/0.1.0/blotter.min.js";

    var script = document.createElement('script');
    script.src = url;
    script.type = 'text/javascript';
    var done = false;
    script.onload = script.onreadystatechange = function () {
        if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
            bottlerSecondScript();
        }
    };
    document.getElementsByTagName("head")[0].appendChild(script);
}

function bottlerSecondScript() {
    var url = "https://cdnjs.cloudflare.com/ajax/libs/Blotter/0.1.0/materials/liquidDistortMaterial.min.js";

    var script = document.createElement('script');
    script.src = url;
    script.type = 'text/javascript';
    var done = false;
    script.onload = script.onreadystatechange = function () {
        if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
            bottlerThirdScript();
        }
    };
    document.getElementsByTagName("head")[0].appendChild(script);
}

function bottlerThirdScript() {
    var url = "https://cdnjs.cloudflare.com/ajax/libs/Blotter/0.1.0/materials/rollingDistortMaterial.min.js";

    var script = document.createElement('script');
    script.src = url;
    script.type = 'text/javascript';
    var done = false;
    script.onload = script.onreadystatechange = function () {
        if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
            runBottler();
        }
    };
    document.getElementsByTagName("head")[0].appendChild(script);
}

function runBottler() {
    import('fullib-js/src/js/blotter/index').then(({default: blotter}) => {
    }).catch(error => 'An error occurred while loading blotter');
}

export function share() {
    import('fullib-js/src/css/share/share.css').then(({default: share}) => {
    }).catch(error => 'An error occurred while loading share');

    import('fullib-js/src/js/share.js').then(({default: sharejs}) => {
    }).catch(error => 'An error occurred while loading sharejs');
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

export function menu1(options) {
    let menus1 = document.querySelectorAll(options && options.currentDiv ? options.currentDiv : '.menu1');
    if (menus1[0]) {
        for (let i = 0, len = menus1.length; i < len; i++) {
            menus1[i].classList.add('menu1');
        }

        import('fullib-js/src/css/menu/menu1.css').then(({default: menu1}) => {
            document.getElementsByClassName('navbar-toggler')[0].onclick = function () {
                document.getElementById('main-navigation-nav').classList.toggle('nav-active');
            }
        }).catch(error => 'An error occurred while loading menu1');
    }
}

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

export function menu3(options) {
    let menus3 = document.querySelectorAll(options && options.currentDiv ? options.currentDiv : '.menu3');
    if (menus3[0]) {
        for (let i = 0, len = menus3.length; i < len; i++) {
            menus3[i].classList.add('menu3');
        }

        import('fullib-js/src/css/menu/menu3.css').then(({default: menu3}) => {
            document.getElementsByClassName('navbar-toggler')[0].onclick = function () {
                document.getElementById('main-navigation-nav').classList.toggle('nav-active');
            }
        }).catch(error => 'An error occurred while loading menu3');
    }
}

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

export function parallax1(options) {
    let parallaxs1 = document.querySelectorAll(options && options.currentDiv ? options.currentDiv : ".parallax1");

    if (parallaxs1[0]) {
        let forceInitial = options.force;
        let lastScrollTop = 0;

        for (let i = 0, len = parallaxs1.length; i < len; i++) {
            let myElem = parallaxs1[i];
            myElem.classList.add('parallax1');

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
                    let coords = '0% ' + -yPos + 'px';
                    myElem.style.backgroundPosition = coords;
                }
                lastScrollTop = st <= 0 ? 0 : st;
            }, false);
        }
    }
}

export function changeBackground(options) {
    if (!options.transition) {
        options.transition = "1s linear";
    }
    let changeBackgrounds = document.querySelectorAll(options && options.currentDiv ? options.currentDiv : ".change-background");

    let body = document.getElementById('body');
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

export function transition1(options) {
    let transitions1 = document.querySelectorAll(options && options.currentDiv ? options.currentDiv : '.transition1');
    if (transitions1[0]) {
        for (let i = 0, len = transitions1.length; i < len; i++) {
            transitions1[i].classList.add('transition1');
        }
        import('fullib-js/src/css/transition/transition1.css').then(({default: transition1}) => {
        }).catch(error => 'An error occurred while loading transition1');
    }
}

export function laxAddons() {
    import('fullib-js/src/js/addonsLax.js').then(({default: addonsLax}) => {
    }).catch(error => 'An error occurred while loading addonsLax');
}

export function cursor(options) {
    if (window.innerWidth > 991) {
        if (document.querySelectorAll(options && options.currentDiv ? options.currentDiv : '.custom-cursor')[0]) {
            import('fullib-js/src/css/cursor/cursor.css').then(({default: cursor}) => {
            }).catch(error => 'An error occurred while loading cursor');

            let cursor1 = null;
            if (options.activeFirstCursor) {
                cursor1 = addElement('div', ['cursor', 'cursor-follower']);
                cursor1.style.backgroundColor = options.firstCursor && options.firstCursor.backgroundColor ? options.firstCursor.backgroundColor : "#000000";
                cursor1.style.width = options.firstCursor && options.firstCursor.size ? options.firstCursor.size + 'px' : "10px";
                cursor1.style.height = options.firstCursor && options.firstCursor.size ? options.firstCursor.size + 'px' : "10px";
                cursor1.style.border = options.firstCursor && options.firstCursor.border ? options.firstCursor.border : "";
                cursor1.style.transition = options.firstCursor && options.firstCursor.transition ? options.firstCursor.transition : "top .1, left .1, width .5s, height .5s";
                cursor1.style.borderRadius = options.firstCursor && options.firstCursor.type === "round" ? "50%" : options.firstCursor && options.firstCursor.type === "square" ? "0" : "50%";
            }

            let cursor2 = null;
            if (options.activeSecondCursor) {
                cursor2 = addElement('div', ['cursor', 'cursor-dot']);
                cursor2.style.backgroundColor = options.secondCursor && options.secondCursor.backgroundColor ? options.secondCursor.backgroundColor : "#000000";
                cursor2.style.width = options.secondCursor && options.secondCursor.size ? options.secondCursor.size + 'px' : "5px";
                cursor2.style.height = options.secondCursor && options.secondCursor.size ? options.secondCursor.size + 'px' : "5px";
                cursor2.style.border = options.secondCursor && options.secondCursor.border ? options.secondCursor.border : "";
                cursor2.style.transition = options.secondCursor && options.secondCursor.transition ? options.secondCursor.transition : "top .25s, left .25s, width .7s, height .7s";
                cursor2.style.borderRadius = options.secondCursor && options.secondCursor.type === "round" ? "50%" : options.secondCursor && options.secondCursor.type === "square" ? "0" : "50%";
            }

            let mouseTargets = document.querySelectorAll(options && options.zoomOnDiv ? options.zoomOnDiv : '.titlezoomcursor');

            for (let i = 0, len = mouseTargets.length; i < len; i++) {
                let mouseTarget = mouseTargets[i];
                mouseTarget.style.cursor = "none";

                mouseTarget.addEventListener('mouseenter', e => {
                    if (cursor1) {
                        cursor1.classList.add('focus');
                        cursor1.style.width = options.firstCursor && options.firstCursor.size ? options.firstCursor.size * 4 + 'px' : 10 * 4 + 'px';
                        cursor1.style.height = options.firstCursor && options.firstCursor.size ? options.firstCursor.size * 4 + 'px' : 10 * 4 + 'px';
                    }

                    if (cursor2) {
                        cursor2.classList.add('focus');
                        cursor2.style.width = options.secondCursor && options.secondCursor.size ? options.secondCursor.size * 4 + 'px' : 5 * 4 + 'px';
                        cursor2.style.height = options.secondCursor && options.secondCursor.size ? options.secondCursor.size * 4 + 'px' : 5 * 4 + 'px';
                    }
                })

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

            let onmousemove = function (e) {
                let xpos = e.pageX;
                let ypos = e.pageY;

                if (cursor1) {
                    cursor1.style.left = xpos + 'px';
                    cursor1.style.top = ypos + 'px';
                }

                if (cursor2) {
                    cursor2.style.left = xpos + 'px';
                    cursor2.style.top = ypos + 'px';
                }
            }

            document.addEventListener('mousemove', onmousemove);
        }
    }
}

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

export function isElementInViewport(el) {
    let rect = el.getBoundingClientRect();
    let html = document.documentElement;
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || html.clientHeight) &&
        rect.right <= (window.innerWidth || html.clientWidth)
    );
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}