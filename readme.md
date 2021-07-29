# FULLIB-JS
![Pres](github-ressources/pres.jpg?raw=true "Pres")

Multiple animation Library in full javascript

https://dev-florian.github.io/fullib-js/
## News 1.3.1
- Add breakpoint for cursor animation
- Correction bugs

## News 1.3.0
- NEW ANIMATIONS CREATION *TEXT SPLIT*
- CORRECTION OF BUGS
- ADDING COMMMENTARY


## News 1.2.0

![Scroll down](github-ressources/scroll-down.jpg?raw=true "Scroll down")

- NEW ANIMATION : orbit
- UPDATE : text2
- BIG UPDATE : parallax
- REMOVED LAX
- NEW ANIMATIONS GSAP
- CORRECTION LOTTIE
- CREATE YOUR CUSTOM ANIMATIONS

## News 1.1.3
- BLOTTER : Mobile now displaying !
- BLOTTER : Reduce animation to avoid lags on mobile
- CURSOR : Adding option 'removeAt'
## News 1.1.2
- Correction responsive for website
- Adding autoResponsive option for imageblob
- Removing cursor cursor for Mobile & Tablet
## News 1.1.1
- Removed useless dependencies
## News 1.1.0

![Rocket Power](github-ressources/rocket-power.jpg?raw=true "Rocket Power")

- PUBLIC ACCESS
- Transforming array to object on call
- Corrections for responsive
- Refractor for better performance
- Adding options on all callable function {currentDiv : ".myDiv"} for better customization
- NEW ANIMATION : mousemove
- NEW ANIMATION : generateBulb
- NEW ANIMATION : imageBlob
- BIG UPDATE : cursor
- 3 NEW BUTTONS
- Add minify js
- Removing WebGls hover effect (too heavy)

## Installation
Use yarn :
```python
yard add fullib-js
```
Dependencies
```python
"lottie-web": "^5.7.6"
```

## [NEW] TextSplit Creation
How To use ?
```python
import {splitText} from "fullib-js";

//BASIC EXAMPLE
splitText({
    animationName: 'split5',
    parent: '.split5',
    className: 'letter',
    animation: {
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

<div class="split5">I AM A TEST</div>
```
Other example
```python
import {splitText} from "fullib-js";

//ADVANCED EXEMPLE
splitText({
    animationName: 'split4',
    parent: '.split4',
    className: 'letter',
    animation: {
        iterations: 1,
        duration: 1000,
        word: true,
        center: true,
        reverse: true,
        delay: 200,
        keyframe: {
            from: {
                'letter-spacing': '10px',
            },
            "50%": {
                'letter-spacing': '2px',
            },
            to: {
                'letter-spacing': '0px',
            }
        }
    }
});

<div class="split4">I AM A TEST</div>
```

## GSAP LIBRARY
https://github.com/alexfoxy/lax.js

### List of custom classes
```python
scroll-lefttoright
scroll-righttoleft
scroll-toptobottom
scroll-bottomtotop
scroll-rotateleft
scroll-rotateright
scroll-scaleup
scroll-scaledown
scroll-opacity scroll-toptobottom
scroll-parallaxleft
scroll-parallaxright
scroll-light-parallaxleft
scroll-light-parallaxright
scroll-light-parallaxtop
scroll-light-parallaxbottom
scroll-full-rotateleft
scroll-full-rotateright
```
How To use ?
```python
import {gsapScroll} from "fullib-js";
gsapScroll();

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/ScrollTrigger.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/ScrollToPlugin.min.js"></script>
```
Then add the class to your div !

### CUSTOM ANIMATION
How to use ?
```python
import {createAnimationFromTo} from "fullib-js";

//scroll opacity 0 to 1 animation
//reference to gsap library
gsap.registerPlugin(ScrollTrigger);
createAnimationFromTo({
    div: '.scroll-opacity',
    toggleActions: 'restart pause restart pause',
    start: "top 100%",
    animation: {
        from: {
            autoAlpha: 0
        },
        to: {
            autoAlpha: 1,
            duration: 1,
        }
    }
});


<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/ScrollTrigger.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/ScrollToPlugin.min.js"></script>
```

How the function looks like ?
```python
export function createAnimationFromTo(options) {
    let div = options.div;
    let toggleActions = options.toggleActions ? options.toggleActions : '';
    let start = options.start ? options.start : '';
    let scrub = options.scrub ? options.scrub : false;
    let end = options.end ? options.end : false;
    let pin = options.pin ? options.pin : false;
    let snap = options.snap ? options.snap : false;

    if (!options.animation) {
        console.log('Error on gsapScroll : createAnimationFromTo');
        console.log(div);
    }

    gsap.utils.toArray(div).forEach(box => {
        if (box.classList.contains('onscroll')) {
            scrub = true;
            if (box.classList.contains('onfull')) {
                end = "";
            } else {
                end = "+=30%";
            }
        }

        let animateIn = gsap.timeline({
            scrollTrigger: {
                trigger: box,
                toggleActions: toggleActions,
                start: start,
                end: end,
                scrub: scrub,
                pin: pin,
                snap: snap,
            }
        });

        animateIn.fromTo(box, options.animation.from, options.animation.to);
    });
}
```



## DRAWSVG
Put by default this class on your div :
```python
drawsvg
```
How To use ?
```python
import {drawSvg} from "fullib-js";
drawSvg();
```

## CURSOR
Display a custom cursor

How To use ?
```python
import {cursor} from "fullib-js";
cursor({
    activeFirstCursor: true, //essential
    activeSecondCursor: false, //essential
    currentDiv: "#body", //essential
    zoomOnDiv: ".tohover",
    firstCursor: {
        size: 10,
        backgroundColor: "#000000",
        border: "1px solid #000000",
        type: 'square', // round or square
        transition: "top .1s, left .1s, width .5s, height .5s",
    }
    secondCursor: {
        size: 10,
        backgroundColor: "#000000",
        border: "1px solid #000000",
        type: 'square', // round or square
        transition: "top .25s, left .25s, width .7s, height .7s",
    }
});
```
Then add "custom-cursor" to your body !
If you want to zoom cursor on elements, simply add the class "titlezoomcursor" to the elements wanted

## TEXT
Put by default one class on your div.

```python
text1
text2
text3
text4
text5
text6
text7
```

How To use ?

Easy example for 'text1'
```python
import {text1} from "fullib-js";
text1();
```

Exceptions [UPDATE]
```python
import {text2} from "fullib-js";
text2();

 <div class="text2" data-backgroundImage="https://static.pexels.com/photos/4827/nature-forest-trees-fog.jpeg">NATURE</div>
```
Simply add the class on the text ('text1', 'text2'......) for different view or add {currentDiv: ".myDiv"} for customization.

## REVEAL

Put by default one class on your div.

```python
reveal1
reveal2
reveal3
reveal4
reveal5
reveal6
reveal7
reveal8
reveal9
```

How To use ?

Easy example for 'reveal1'
```python
import {reveal1} from "fullib-js";
reveal1();

<div class="reveal1 d-inline-block">REVEALING TEXT</div>
```


### BUTTONS

How To use ?

Put by default one class on your 'a' balise.

```python
button1
button3
button4
button5
button6
button7
button8
button9
button10
button11
button12
button13
button14
button15
```

Easy example for 'button1'

```python
import {button1} from "fullib-js";
button1();

<a class="button1 text-center" href="https://www.npmjs.com/package/animation-felix" target="_blank">CLICK ME</a>
```


## MENU

How to use ?

Put by default one class on your div.

```python
menu1
menu2
menu3
menu4
menu5
```

Easy example for 'menu1'

```python
import {menu1} from "fullib-js";
menu1();

<nav class="menu1 fixed-top navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <div class="nav-but-wrap">
                <div class="menu-icon hover-target">
                    <span class="menu-icon__line menu-icon__line-left"></span>
                    <span class="menu-icon__line"></span>
                    <span class="menu-icon__line menu-icon__line-right"></span>
                </div>
            </div>
        </button>
    </div>
</nav>

<div id="main-navigation-nav" class="collapse">
    <ul class="navbar-nav mx-auto">
        <li class="nav-item level-1 text-center active" itemscope="itemscope" itemtype="http://www.schema.org/SiteNavigationElement">
            <a class="nav-link link-level-1 active" href="" id="navbar-link-14" title="Accueil" data-toggle="preloader" itemprop="url">
                <span itemprop="name">Accueil</span>
            </a>
        </li>
        <li class="nav-item level-1 dropdown text-center">
            <a class="nav-link link-level-1" href="" id="navbar-link-7" title="Offre de soins" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Offre de soins
            </a>
        </li>
        <li class="nav-item level-1 text-center text-lg-left"itemscope="itemscope" itemtype="http://www.schema.org/SiteNavigationElement">
            <a class="nav-link link-level-1 text-center" href="" id="navbar-link-9" title="Patients" data-toggle="preloader" itemprop="url">
                <span itemprop="name">Patients</span>
            </a>
        </li>
        <li class="nav-item level-1 dropdown text-center">
            <a class="nav-link link-level-1 " href="" id="navbar-link-11" title="Carrière" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Carrière
            </a>
        </li>
    </ul>
</div>
```

## WEBGL
### Blotter effect ( text distortion on scroll )

List of effects 
```python
liquid
liquid-2
rolling
rolling-2
rolling-3
rolling-4
rolling-5
```

How to use ?

Easy example for 'liquid'

```python
import {blotter} from "fullib-js";
blotter();

<div class="blotter" data-blotter-effect="liquid" data-blotter-font="'Russo One', sans-serif" data-blotter-size="120" data-blotter-color="#c69f64">ABC</div>
```
Warning : 
-You have to put the blotter className to your element
-You have to only put a valid string in the div
-The font must be loaded before the plugin

## Change color of bg if in viewport
```python
change-background
```
How to use ?

Easy example
```python
import {changeBackground} from "fullib-js";
changeBackground({
    backgroundColor: "#ffd5ce", //bgColor
    currentDiv: ".change-background", //divInViewPort
    animation: "1s linear" //Animation
});
```

## LOTTIE
https://lottiefiles.com/community

How to use ?

Easy example
```python
import { lottie } from "fullib-js";
lottie();

<div class="mt-5 mb-5 lottie" data-lottie-scroll="false" data-lottie-click="true" data-lottie-hover="false" data-lottie-file="../../lottie/button.json" style="width: 150px;"></div>
```

## MOUSEMOOVE

When mooving the mouse, it mooves the content ( related to mouse position )

How to use ?

Easy example
```python
import {mousemove} from "fullib-js";
mousemove();

<div class="firstcard mousemove" data-speed="3">
  <img width="50" height="50" src="https://images.freeimages.com/images/large-previews/08e/up-close-personal-2-1359478.jpg">
</div>
```

## IMAGEBLOB

Add a round blob effect to your image

How to use ?

Easy example
```python
import {imageBlob} from "fullib-js";
imageBlob();

<img class="blobed" alt="blob" width="400" height="400" src="https://outsmartlabs.com/medias/images/redcharlie-fCRFjmM8Ll4-unsplash.jpg">
```

Warning :
Don't forget to add with and height attribute ( default take 400 x 400 )

## GENERATE BULBS

Add a round blob effect to your image

How to use ?

Easy example
```python
import {generateBulb} from "fullib-js";
generateBulb({
    currentDiv: ".generate-bulb", //default
    referTo: ".mycontainer", //parentDiv ( default take the parent )
    backgroundColor: "transparent",
    minSize: 5,
    maxSize: 30,
    border: "1px solid #1a2b63",
    numberOfBulb: 49, // number of elem to create
    type: 'round', //round or square
    classNames: ['round', 'lax-parallax-right'], // add classes for all elems created
    fromLeft: -200, // if animation on better to see element arrived on screen cutted
    differentSpeed: true //only available for lax-parallax-right and if numberOfBulb < 50
});

<div class="generate-bulb"></div>
```

## ORBIT

Add an orbit on your page !

How to use ?

Easy example
```python
import {orbit} from "fullib-js";
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

<div class="circlewhite"></div>
```

## PARALLAX

Add an orbit on your page !

How to use ?

Easy example
```python
import {parallax} from "fullib-js";
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

 <div class="parallax" data-backgroundImage="./img/parallax.jpg"></div>
```


