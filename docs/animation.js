export function reveal1() {
    let reveal1 = document.getElementsByClassName('reveal1');
    if (reveal1[0]) {
        for (let i = 0, len = reveal1.length; i < len; i++) {
            let myElem = reveal1[i];
            if (isElementInViewport(myElem)) {
                myElem.classList.add('active');
            }
            window.addEventListener('scroll', function () {
                if (isElementInViewport(myElem)) {
                    myElem.classList.add('active');
                }
            });
        }
        loadCSS("./presets/reveal/reveal1.css");
    }
}

export function reveal2() {
    let reveal2 = document.getElementsByClassName('reveal2');
    if (reveal2[0]) {
        loadCSS("./presets/reveal/reveal2.css");
    }
}

export function reveal3() {
    let reveal3 = document.getElementsByClassName('reveal3');
    if (reveal3[0]) {
        loadCSS("./presets/reveal/reveal3.css");
    }
}

export function reveal4() {
    let reveal4 = document.getElementsByClassName('reveal4');
    if (reveal4[0]) {
        loadCSS("./presets/reveal/reveal4.css");
    }
}

export function reveal5() {
    let reveal5 = document.getElementsByClassName('reveal5');
    if (reveal5[0]) {
        loadCSS("./presets/reveal/reveal5.css");
    }
}

export function reveal6() {
    let reveal6 = document.getElementsByClassName('reveal6');
    if (reveal6[0]) {
        for (let i = 0, len = reveal6.length; i < len; i++) {
            let myElem = reveal6[i];
            if (isElementInViewport(myElem)) {
                myElem.classList.add('active');
            }

            window.addEventListener('scroll', function () {
                if (isElementInViewport(myElem)) {
                    myElem.classList.add('active');
                }
            });
        }
        loadCSS("./presets/reveal/reveal6.css");
    }
}

export function reveal7() {
    let reveal7 = document.getElementsByClassName('reveal7');
    if (reveal7[0]) {
        for (let i = 0, len = reveal7.length; i < len; i++) {
            let myElem = reveal7[i];
            if (isElementInViewport(myElem)) {
                myElem.classList.add('active');
            }

            window.addEventListener('scroll', function () {
                if (isElementInViewport(myElem)) {
                    myElem.classList.add('active');
                }
            });
        }
        loadCSS("./presets/reveal/reveal7.css");
    }
}

export function reveal8() {
    let reveal8 = document.getElementsByClassName('reveal8');
    if (reveal8[0]) {
        for (let i = 0, len = reveal8.length; i < len; i++) {
            let myElem = reveal8[i];
            if (isElementInViewport(myElem)) {
                myElem.classList.add('active');
            }

            window.addEventListener('scroll', function () {
                if (isElementInViewport(myElem)) {
                    myElem.classList.add('active');
                }
            });
        }
        loadCSS("./presets/reveal/reveal8.css");
    }
}

export function reveal9() {
    let reveal9 = document.getElementsByClassName('reveal9');
    if (reveal9[0]) {
        for (let i = 0, len = reveal9.length; i < len; i++) {
            let myElem = reveal9[i];
            if (isElementInViewport(myElem)) {
                myElem.classList.add('active');
            }

            window.addEventListener('scroll', function () {
                if (isElementInViewport(myElem)) {
                    myElem.classList.add('active');
                }
            });
        }
        loadCSS("./presets/reveal/reveal9.css");
    }
}

export function text1() {
    let text1 = document.getElementsByClassName('text1');
    if (text1[0]) {
        for (let i = 0, len = text1.length; i < len; i++) {
            let myElem = text1[i];
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
        loadCSS("./presets/text/text1.css");
    }
}

export function text2(url) {
    let text2 = document.getElementsByClassName('text2');
    if (text2[0]) {
        for (let i = 0, len = text2.length; i < len; i++) {
            let myElem = text2[i];
            myElem.style.backgroundImage = "url('" + url + "')";

            if (isElementInViewport(myElem)) {
                myElem.classList.add('active');
            }

            window.addEventListener('scroll', function () {
                if (isElementInViewport(myElem)) {
                    myElem.classList.add('active');
                }
            });
        }
        loadCSS("./presets/text/text2.css");
    }
}

export function text3() {
    let texts3 = document.getElementsByClassName('text3');
    if (texts3[0]) {
        loadCSS("./presets/text/text3.css");
    }
}

export function text4() {
    let texts4 = document.getElementsByClassName('text4');
    if (texts4[0]) {
        loadCSS("./presets/text/text4.css");
    }
}

export function text5() {
    let texts5 = document.getElementsByClassName('text5');
    if (texts5[0]) {
        loadCSS("./presets/text/text5.css");
        for (let i = 0, len = texts5.length; i < len; i++) {
            let myElem = texts5[i];
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
                mySpan.style.animationDelay = counter * 0.1+'s';
                mySpan.style.animationName = "rampUp";
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
    }
}

export function text6() {
    let texts6 = document.getElementsByClassName('text6');
    if (texts6[0]) {
        loadCSS("./presets/text/text6.css");
        for (let i = 0, len = texts6.length; i < len; i++) {
            let myElem = texts6[i];
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
                mySpan.style.animationDelay = counter * 0.1+'s';
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
    }
}

export function text7() {
    let texts7 = document.getElementsByClassName('text7');
    if (texts7[0]) {
        loadCSS("./presets/text/text7.css");
    }
}

export function share() {
    loadCSS("./presets/share/share.css");
    loadJS("./presets/share/share.js");
}

export function button1() {
    let buttons1 = document.getElementsByClassName('button1');
    if (buttons1[0]) {
        loadCSS("./presets/button/button1.css");

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
    }
}

export function button3() {
    let buttons3 = document.getElementsByClassName('button3');
    if (buttons3[0]) {
        loadCSS("./presets/button/button3.css");

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

    }
}

export function button4() {
    let buttons4 = document.getElementsByClassName('button4');
    if (buttons4[0]) {
        loadCSS("./presets/button/button4.css");

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

    }
}

export function button5() {
    let buttons5 = document.getElementsByClassName('button5');
    if (buttons5[0]) {
        loadCSS("./presets/button/button5.css");

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
    }
}

export function button6() {
    let buttons6 = document.getElementsByClassName('button6');
    if (buttons6[0]) {
        loadCSS("./presets/button/button6.css");

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
    }
}

export function button7() {
    let buttons7 = document.getElementsByClassName('button7');
    if (buttons7[0]) {
        loadCSS("./presets/button/button7.css");

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
    }
}

export function button8() {
    let button8 = document.getElementsByClassName('button8');
    if (button8[0]) {
        loadCSS("./presets/button/button8.css");

        for (let i = 0, len = button8.length; i < len; i++) {
            let myElem = button8[i];
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
    }
}

export function button9() {
    let buttons9 = document.getElementsByClassName('button9');
    if (buttons9[0]) {
        loadCSS("./presets/button/button9.css");

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

    }
}


export function button10() {
    let buttons10 = document.getElementsByClassName('button10');
    if (buttons10[0]) {
        loadCSS("./presets/button/button10.css");

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

    }
}


export function button11() {
    let buttons11 = document.getElementsByClassName('button11');
    if (buttons11[0]) {
        loadCSS("./presets/button/button11.css");

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

    }
}


export function button12() {
    let buttons12 = document.getElementsByClassName('button12');
    if (buttons12[0]) {
        loadCSS( "./presets/button/button12.css");

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
    }
}

export function button13() {
    let buttons13 = document.getElementsByClassName('button13');
    if (buttons13[0]) {
        loadCSS("./presets/button/button13.css");

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
    }
}

export function parallax1(force) {
    let parallaxs1 = document.getElementsByClassName('parallax1');
    if (parallaxs1[0]) {
        let forceInitial = force;
        let lastScrollTop = 0;

        for (let i = 0, len = parallaxs1.length; i < len; i++) {
            let myElem = parallaxs1[i];

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

export function changeBackground(color, className, animation) {
    if (!animation) {
        animation = "linear";
    }
    let changeBackgrounds = document.getElementsByClassName(className);
    let body = document.getElementById('body');
    if (changeBackgrounds[0]) {
        for (let i = 0, len = changeBackgrounds.length; i < len; i++) {
            let myElem = changeBackgrounds[i];
            body.style.transition = "all 1s " + animation;

            if (isElementInViewport(myElem)) {
                body.style.backgroundColor = color;
            }

            window.addEventListener('scroll', function () {
                if (isElementInViewport(myElem)) {
                    body.style.backgroundColor = color;
                } else {
                    body.style.backgroundColor = "initial";
                }
            });
        }
    }
}

export function drawsvg() {
    let drawsvgs = document.getElementsByClassName('drawsvg');
    if (drawsvgs[0]) {
        loadCSS("./presets/reveal/drawsvg.css");
        for (let i = 0, len = drawsvgs.length; i < len; i++) {
            let myElem = drawsvgs[i];

            if (isElementInViewport(myElem)) {
                myElem.classList.add('active');
            }

            window.addEventListener('scroll', function () {
                if (isElementInViewport(myElem)) {
                    myElem.classList.add('active');
                }
            });
        }
    }
}

export function transition1() {
    let transitions1 = document.getElementsByClassName('transition1');
    if (transitions1[0]) {
        loadCSS("./presets/transition/transition1.css");
    }
}

export function lax() {
    loadJS(getDomain() + "/laxlibrary.js")
    loadJS(getDomain() + "/addonsLax.js");
}

export function cursor(size, colorFirst, colorSecond = null) {

    loadCSS("./presets/cursor/cursor.css");

    let cursor1 = addElement('div', ['cursor', 'cursor-follower']);
    let cursor2 = null;
    if (colorSecond) {
        cursor2 = addElement('div', ['cursor', 'cursor-dot']);
    }

    cursor1.style.width = size + 'px';
    cursor1.style.height = size + 'px';
    cursor1.style.background = colorFirst;

    if (cursor2) {
        cursor2.style.width = size + 'px';
        cursor2.style.height = size + 'px';
        cursor2.style.background = colorSecond;
    }


    let mouseTarget = document.getElementsByClassName('titlezoomcursor');
    for (let i = 0, len = mouseTarget.length; i < len; i++) {
        mouseTarget[i].addEventListener('mouseenter', e => {
            cursor1.classList.add('focus');
            cursor1.style.width = size * 4 + 'px';
            cursor1.style.height = size * 4 + 'px';

            if (cursor2) {
                cursor2.classList.add('focus');
                cursor2.style.width = size * 4 + 'px';
                cursor2.style.height = size * 4 + 'px';
            }
        })
    }
    ;

    for (let i = 0, len = mouseTarget.length; i < len; i++) {
        mouseTarget[i].addEventListener('mouseleave', e => {
            cursor1.classList.remove('focus');
            cursor1.style.width = size + 'px';
            cursor1.style.height = size + 'px';

            if (cursor2) {
                cursor2.classList.remove('focus');
                cursor2.style.width = size + 'px';
                cursor2.style.height = size + 'px';
            }
        })
    }
    ;

    let onmousemove = function (e) {
        let xpos = e.pageX;
        let ypos = e.pageY;
        cursor1.style.left = xpos + 'px';
        cursor1.style.top = ypos + 'px';

        if (colorSecond) {
            cursor2.style.left = xpos + 'px';
            cursor2.style.top = ypos + 'px';
        }
    }

    document.addEventListener('mousemove', onmousemove);
}

export function addElement(type, classes, options = null) {
    let newDiv = document.createElement(type);

    if (Array.isArray(classes)) {
        newDiv.classList.add(...classes);
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

    if (options && options.addTo) {
        options.addTo.appendChild(newDiv);
    } else {
        document.body.appendChild(newDiv);
    }

    return newDiv;
}

export function loadCSS(cssURL) {
    // 'cssURL' is the stylesheet's URL, i.e. /css/styles.css
    return new Promise(function (resolve, reject) {
        let link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = cssURL;
        document.head.appendChild(link);
        link.onload = function () {
            resolve();
            console.log('CSS has loaded!');
        };
    });
}

export function loadJS(jsURL) {
    // 'cssURL' is the stylesheet's URL, i.e. /css/styles.css
    return new Promise(function (resolve, reject) {
        let link = document.createElement('script');
        link.src = jsURL;
        document.head.appendChild(link);
        link.onload = function () {
            resolve();
            console.log('JS has loaded!');
        };
    });
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

export function getDomain() {
    return location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
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
