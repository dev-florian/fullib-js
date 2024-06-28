# FULLIB-JS

Multiple animation Library
Only native JS

https://dev-florian.github.io/fullib-js/

### FUTURE... ( priority )
- THREE JS ANIMATION ( 3D )
- Optimisations
- New anim options ( trigger elem on the top / middle / bottom )

## News 2.0.0
- Simple and light slider with threejs shaders
- Lighter and faster loading
- Rewrited, optimized as classes
- 'classNames' : new call => 'elems' for all classes
- Removed : buttons, menus, splittext, reveals, generateBulb, drawsvg, parallax
- New doc
- [Animation] Added skewX and SkewY

## News 1.6.22
- [Animation] Correc bug opacity when scroll = false

## News 1.6.2
- [Animation] Rewrite calc of animation function

## News 1.6.1
- [Animation] Added data attributes to HTML and new options

## News 1.6.0
- [Animation] Detection scroll now take full height of element ( don't stop at the top of the element )
- [Animation] Added new function for choosing transition
- [generateBulb] Correction of bulb was not totally in the div
- [lottieweb] Remove depedency
- [createAnimationTo] Remove function ( old was with gsap )
- [loadSplitText] Remove function ( old was with gsap )
- [loadScrollAnimation] Remove function ( old was with gsap )
- [share button] Remove function

## News 1.5.4
- [Menu] Added direction
- [Menu3] This Menu has been removed
- [Cursor] Placement is now on the middle of the cursor ( it was on top-left )
- [Cursor] Added new options : removeOriginalCursor ( true / false ) to force not removing the default cursor

## News 1.5.3
- [Animation] Correction bug when scroll option was set to false
- [Animation] Correction bug when animation was finished and the position was not clean ( eg: finish on -2px )
- [General improvment] New better function to trigger ViewPort element

## News 1.5.1
- [Animation] Correction bug where the current scroll position was not loaded on pageLoad

## News 1.5
###[ new function : animation ]
###[ new function : customScrollBar ]
- Correction generate-bulb
- Added options for cursor
- Correction bugs

## News 1.4.0
###[ new : custom scrollBar ]
- Correction bugs
- Rewrite splittext


###[ Update : splitText ]
- New effect : hover
- New variables :
  * delayBetweenIteration
  * delayBeforeFirstStart ( replace old : delay )
  * delayBetweenletters

###[ Update : cursor ]
- Added hoverSize variable
- 'type' now accept custom radius ( 'round' / 'square' / '35%', '36%' etc )


## Installation
Use yarn :
```python
yarn add fullib-js
```

## [NEW] animation Creation
How To use ?
```python
import Animation from "fullib-js/src/js/Basic/Animation";

//BASIC EXAMPLE animation on scroll
new Animation({
    elems: '.scroll-lefttoright',
    scroll: true, //default true
    start: '0%', //default 0%
    end: '100%', //default 100%
    measure: 'px', //default px
    transition: 'all .2s ease', //default all .1s linear
    from: {
        x: -100
    },
    to: {
        x: 0,
    }
});

<div class="scroll-lefttoright">I AM A TEST</div>
```

Other example ( anim without scroll trigger but on viewport )

```python
import Animation from "fullib-js/src/js/Basic/Animation";

//BASIC EXAMPLE
new Animation({
    elems: '.scroll-lefttoright',
    scroll: false,
    delay: 0, //default 0
    duration: 500, //default 500
    measure: 'px', //default px
    isScrollMobile: false, //default value as 'scroll'
    mobileBreakpoint: 991, //default 991
    from: {
        x: -100
    },
    to: {
        x: 0,
    }
});

<div class="scroll-lefttoright">I AM A TEST</div>

```

## [NEW] customScrollBar
How To use ?
```python
import ScrollBar from "fullib-js/src/js/Basic/ScrollBar";

//BASIC EXAMPLE
new ScrollBar({
    elem: '*', //default .scrollbar
    width: 8, //default as 'auto'
    border: '1px solid #000', //ONLY WORK ON WEBKIT : chrome / edge
    borderRadius: '25%', //ONLY WORK ON WEBKIT : chrome / edge
    scrollbarBackground: 'gray', //default black
    scrollbarColor: 'white', //default white
});
```

## MOUSEMOOVE

When mooving the mouse, it mooves the content ( related to mouse position )

How to use ?

Easy example
```python
import Mousemoove from "fullib-js/src/js/Basic/Mousemoove";

new Mousemoove({
  elems: '.test', //default .mousemove
  force: 100, //default 100
  speed: 3, //default 3
  inverse: false, //default false
  breakpoint: 767, //default 320
});

<div class="firstcard test">
  <img width="50" height="50" src="https://images.freeimages.com/images/large-previews/08e/up-close-personal-2-1359478.jpg">
</div>


Or another example, simplier :

import Mousemoove from "fullib-js/src/js/Basic/Mousemoove";

new Mousemoove();

<div class="firstcard mousemove" data-speed="3" data-force="50">
  <img width="50" height="50" src="https://images.freeimages.com/images/large-previews/08e/up-close-personal-2-1359478.jpg">
</div>


```

## CURSOR
Display a custom cursor

How To use ?
```python
import Cursor from "fullib-js/src/js/Basic/Cursor";
new Cursor({
    activeFirstCursor: true, //essential
    activeSecondCursor: false, //essential
    elems: "*", //essential
    zoomOnDiv: ".tohover",
    removeOriginalCursor: true,
    removeAt: 991,
    firstCursor: {
        size: 10,
        hoverSize: 15,
        backgroundColor: "#000000",
        border: "1px solid #000000",
        type: 'square', // round or square
        transition: "top .1s, left .1s, width .5s, height .5s",
    },
    secondCursor: {
        size: 10,
        hoverSize: 15,
        backgroundColor: "#000000",
        border: "1px solid #000000",
        type: 'square', // round or square
        transition: "top .25s, left .25s, width .7s, height .7s",
    }
});
```

## Change color of bg if in viewport
```python
change-background
```
How to use ?

Easy example
```python
import DynamicBackground from "fullib-js/src/js/Basic/DynamicBackground";
new DynamicBackground({
    elems: ".change-background", //default .dynamic-background
    backgroundColor: "#ffd5ce", //bgColor
    animation: "1s linear" //Animation
});

//WHEN ENTER IN DIV, CHANGE THE BODY BACKGROUND
<div class='change-background' style='height: 100vh'>
  My content 100vh
</div>

Or another example

import DynamicBackground from "fullib-js/src/js/Basic/DynamicBackground";

new DynamicBackground();

<div class='dynamic-background' data-background-color='#000000' style='height: 100vh'>
  My content 100vh
</div>
```

## LOTTIE
https://lottiefiles.com/community

How to use ?

Easy example
```python
import LottieHelper from "fullib-js/src/js/Basic/LottieHelper";
new LottieHelper({
  'elems': '.lottie-helper' // default .lottie-helper
});

<div class="mt-5 mb-5 lottie-helper" data-lottie-scroll="false" data-lottie-click="true" data-lottie-hover="false" data-lottie-file="../../lottie/button.json" style="width: 150px;"></div>

renderer: 'svg' / 'canvas' / 'html' //DEFAULT IS CANVAS
```

## IMAGEBLOB

Add a round blob effect to your image

How to use ?

Easy example
```python
import ImageBlob from "fullib-js/src/js/Basic/ImageBlob";
new ImageBlob();

<img class="blobed" alt="blob" width="400" height="400" src="https://outsmartlabs.com/medias/images/redcharlie-fCRFjmM8Ll4-unsplash.jpg">
```

Warning :
Don't forget to add with and height attribute ( default take 400 x 400 )

## ORBIT

Add an orbit on your page !

How to use ?

Easy example
```python
import Orbit from "fullib-js/src/js/Basic/Orbit";
new Orbit({
    elems: '.circlewhite',
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

## UTILS

Need some usefull tools?

How to use ?

Easy example
```python
import Utils from "fullib-js/src/js/Utils/Utils";
let utils = new Utils();

list : 
- utils.isElementInViewport(div); //CHECK IF IN VIEWPORT
- utils.validNumber(numberOrString); //CHECK IF IS A NUMBER
- utils.addElement(type, classes, options); //ADDING DIV TO DOM

Example :

let parentElem = document.querySelector('body');
let higther = this.addElement('div', 'myClass', {
    id: 'myId',
    addTo: parentElem,
})

higther.style.backgroundColor = 'red';
higther.style.height = '100vh';
higther.style.width = '100vw';

List options :
- text ( innerHtml )
- id ( #id )
- href ( link )
- rel ( eg : noopener noreferer )
- target ( eg : _blank )
- type ( eg : button )
- src ( eg : media )
```

