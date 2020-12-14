export function reveal1() {
    let reveals1 = document.getElementsByClassName('reveal1');
    if (reveals1[0]) {
        import('animation-felix/src/css/reveal/reveal1.css').then(({default: reveal1}) => {
            for (let i = 0, len = reveals1.length; i < len; i++) {
                let myElem = reveals1[i];
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

export function reveal2() {
    let reveal2 = document.getElementsByClassName('reveal2');
    if (reveal2[0]) {
        import('animation-felix/src/css/reveal/reveal2.css').then(({default: reveal2}) => {
        }).catch(error => 'An error occurred while loading reveal2');
    }
}

export function reveal3() {
    let reveal3 = document.getElementsByClassName('reveal3');
    if (reveal3[0]) {
        import('animation-felix/src/css/reveal/reveal3.css').then(({default: reveal3}) => {
        }).catch(error => 'An error occurred while loading reveal3');
    }
}

export function reveal4() {
    let reveal4 = document.getElementsByClassName('reveal4');
    if (reveal4[0]) {
        import('animation-felix/src/css/reveal/reveal4.css').then(({default: reveal4}) => {
        }).catch(error => 'An error occurred while loading reveal4');
    }
}

export function reveal5() {
    let reveal5 = document.getElementsByClassName('reveal5');
    if (reveal5[0]) {
        import('animation-felix/src/css/reveal/reveal5.css').then(({default: reveal5}) => {
        }).catch(error => 'An error occurred while loading reveal5');
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
        import('animation-felix/src/css/reveal/reveal6.css').then(({default: reveal6}) => {
        }).catch(error => 'An error occurred while loading reveal6');
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
        import('animation-felix/src/css/reveal/reveal7.css').then(({default: reveal7}) => {
        }).catch(error => 'An error occurred while loading reveal7');
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
        import('animation-felix/src/css/reveal/reveal8.css').then(({default: reveal8}) => {
        }).catch(error => 'An error occurred while loading reveal8');
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
        import('animation-felix/src/css/reveal/reveal9.css').then(({default: reveal9}) => {
        }).catch(error => 'An error occurred while loading reveal9');
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
        import('animation-felix/src/css/text/text1.css').then(({default: text1}) => {
        }).catch(error => 'An error occurred while loading text1');
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
        import('animation-felix/src/css/text/text2.css').then(({default: text2}) => {
        }).catch(error => 'An error occurred while loading text2');
    }
}

export function text3() {
    let texts3 = document.getElementsByClassName('text3');
    if (texts3[0]) {
        import('animation-felix/src/css/text/text3.css').then(({default: text3}) => {
        }).catch(error => 'An error occurred while loading text3');
    }
}

export function text4() {
    let texts4 = document.getElementsByClassName('text4');
    if (texts4[0]) {
        import('animation-felix/src/css/text/text4.css').then(({default: text4}) => {
        }).catch(error => 'An error occurred while loading text4');
    }
}

export function text5() {
    let texts5 = document.getElementsByClassName('text5');
    if (texts5[0]) {
        import('animation-felix/src/css/text/text5.css').then(({default: text5}) => {
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
                    mySpan.style.animationDelay = counter * 0.1 + 's';
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
        }).catch(error => 'An error occurred while loading text5');
    }
}

export function text6() {
    let texts6 = document.getElementsByClassName('text6');
    if (texts6[0]) {
        import('animation-felix/src/css/text/text6.css').then(({default: text6}) => {
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

export function text7() {
    let texts7 = document.getElementsByClassName('text7');
    if (texts7[0]) {
        import('animation-felix/src/css/text/text7.css').then(({default: text7}) => {
        }).catch(error => 'An error occurred while loading text7');
    }
}

export function share() {
    import('animation-felix/src/css/share/share.css').then(({default: share}) => {
    }).catch(error => 'An error occurred while loading share');

    import('animation-felix/src/js/share.js').then(({default: sharejs}) => {
    }).catch(error => 'An error occurred while loading sharejs');
}

export function button1() {
    let buttons1 = document.getElementsByClassName('button1');
    if (buttons1[0]) {
        import('animation-felix/src/css/button/button1.css').then(({default: button1}) => {
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

export function button3() {
    let buttons3 = document.getElementsByClassName('button3');
    if (buttons3[0]) {
        import('animation-felix/src/css/button/button3.css').then(({default: button3}) => {
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

export function button4() {
    let buttons4 = document.getElementsByClassName('button4');
    if (buttons4[0]) {
        import('animation-felix/src/css/button/button4.css').then(({default: button4}) => {
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

export function button5() {
    let buttons5 = document.getElementsByClassName('button5');
    if (buttons5[0]) {
        import('animation-felix/src/css/button/button5.css').then(({default: button5}) => {
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

export function button6() {
    let buttons6 = document.getElementsByClassName('button6');
    if (buttons6[0]) {
        import('animation-felix/src/css/button/button6.css').then(({default: button6}) => {
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

export function button7() {
    let buttons7 = document.getElementsByClassName('button7');
    if (buttons7[0]) {
        import('animation-felix/src/css/button/button7.css').then(({default: button7}) => {
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

export function button8() {
    let buttons8 = document.getElementsByClassName('button8');
    if (buttons8[0]) {
        import('animation-felix/src/css/button/button8.css').then(({default: button8}) => {
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

export function button9() {
    let buttons9 = document.getElementsByClassName('button9');
    if (buttons9[0]) {
        import('animation-felix/src/css/button/button9.css').then(({default: button9}) => {
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


export function button10() {
    let buttons10 = document.getElementsByClassName('button10');
    if (buttons10[0]) {
        import('animation-felix/src/css/button/button10.css').then(({default: button10}) => {
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


export function button11() {
    let buttons11 = document.getElementsByClassName('button11');
    if (buttons11[0]) {
        import('animation-felix/src/css/button/button11.css').then(({default: button11}) => {
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


export function button12() {
    let buttons12 = document.getElementsByClassName('button12');
    if (buttons12[0]) {
        import('animation-felix/src/css/button/button12.css').then(({default: button12}) => {
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

export function button13() {
    let buttons13 = document.getElementsByClassName('button13');
    if (buttons13[0]) {
        import('animation-felix/src/css/button/button13.css').then(({default: button13}) => {
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

export function button14() {
    let buttons14 = document.getElementsByClassName('button14');
    if (buttons14[0]) {
        import('animation-felix/src/css/button/button14.css').then(({default: button14}) => {
        }).catch(error => 'An error occurred while loading button14');
    }
}

export function button15() {
    let buttons15 = document.getElementsByClassName('button15');
    if (buttons15[0]) {
        import('animation-felix/src/css/button/button15.css').then(({default: button15}) => {
            for (let i = 0, len = buttons15.length; i < len; i++) {
                let myElem = buttons15[i];
                let textContent = myElem.textContent;
                myElem.textContent = "";
                addElement('span', '', {addTo: myElem, text: textContent});
            }
        }).catch(error => 'An error occurred while loading button15');
    }
}

export function menu1() {
    let menus1 = document.getElementsByClassName('menu1');
    if (menus1[0]) {
        import('animation-felix/src/css/menu/menu1.css').then(({default: menu1}) => {
            document.getElementsByClassName('navbar-toggler')[0].onclick = function()
            {
                document.getElementById('main-navigation-nav').classList.toggle('nav-active');
            }
        }).catch(error => 'An error occurred while loading menu1');
    }
}

export function menu2() {
    let menus2 = document.getElementsByClassName('menu2');
    if (menus2[0]) {
        import('animation-felix/src/css/menu/menu2.css').then(({default: menu2}) => {
            document.getElementsByClassName('navbar-toggler')[0].onclick = function()
            {
                document.getElementById('main-navigation-nav').classList.toggle('nav-active');
            }
        }).catch(error => 'An error occurred while loading menu2');
    }
}

export function menu3() {
    let menus3 = document.getElementsByClassName('menu3');
    if (menus3[0]) {
        import('animation-felix/src/css/menu/menu3.css').then(({default: menu3}) => {
            document.getElementsByClassName('navbar-toggler')[0].onclick = function()
            {
                document.getElementById('main-navigation-nav').classList.toggle('nav-active');
            }
        }).catch(error => 'An error occurred while loading menu3');
    }
}

export function menu4() {
    let menus4 = document.getElementsByClassName('menu4');
    if (menus4[0]) {
        import('animation-felix/src/css/menu/menu4.css').then(({default: menu4}) => {
            document.getElementsByClassName('navbar-toggler')[0].onclick = function()
            {
                document.getElementById('main-navigation-nav').classList.toggle('nav-active');
            }
        }).catch(error => 'An error occurred while loading menu4');
    }
}


export function menu5() {
    let menus5 = document.getElementsByClassName('menu5');
    if (menus5[0]) {
        import('animation-felix/src/css/menu/menu5.css').then(({default: menu5}) => {
            document.getElementsByClassName('navbar-toggler')[0].onclick = function()
            {
                document.getElementById('main-navigation-nav').classList.toggle('nav-active');
            }
        }).catch(error => 'An error occurred while loading menu4');
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
        import('animation-felix/src/css/reveal/drawsvg.css').then(({default: drawsvg}) => {
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
        }).catch(error => 'An error occurred while loading drawsvg');
    }
}

export function transition1() {
    let transitions1 = document.getElementsByClassName('transition1');
    if (transitions1[0]) {
        import('animation-felix/src/css/transition/transition1.css').then(({default: transition1}) => {
        }).catch(error => 'An error occurred while loading transition1');
    }
}

export function laxAddons() {
    import('animation-felix/src/js/addonsLax.js').then(({default: addonsLax}) => {
    }).catch(error => 'An error occurred while loading addonsLax');
}

export function cursor(size, colorFirst, colorSecond = null) {
    if (document.getElementsByClassName('custom-cursor')[0]) {
        import('animation-felix/src/css/cursor/cursor.css').then(({default: cursor}) => {
        }).catch(error => 'An error occurred while loading cursor');

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
