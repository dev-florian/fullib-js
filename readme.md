# FULLIB-JS
![Pres](github-ressources/pres.jpg?raw=true "Pres")

Multiple animation Library
Only native JS

https://dev-florian.github.io/fullib-js/

### FUTURE... ( priority )
- THREE JS ANIMATION ( 3D )
- Optimisations
- New anim options ( trigger elem on the top / middle / bottom )

## News 2.0.3
- [Animation] Replace checking isScrollMobile by typeof

## News 2.0.2
- [Animation] Removed .tostring() to avoid errors
- [Animation] Added dynamic example in readme

## News 2.0.1
- [Animation] Added elem option to the animation function ( able to anim only one HTML element in a foreach for example )

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

## 3D transitions carousel Creation
How To use ?
```python;

//BASIC EXAMPLE animation on scroll
import Carousel from "./fullib-js/src/js/3D/Carousel";

new Carousel({
    elem: '.carousel-3d', //default is carousel-3d
    autoplay: true, //default is true
    speed: 500, //default is 750, transition between slides
    pause: 3000, //default is 3000, pause between slides when autoplay
    beforeTransition: true, //default is false, add class to the current slide before or after transition
});

//AUTOMATIC HANDLE OF ARROW RIGHT WHEN CLASS .next
//AUTOMATIC HANDLE OF ARROW LEFT WHEN CLASS .prev

<div class="carousel-3d">
        <svg class="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#ffffff">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"/>
        </svg>
        <svg class="prev" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#ffffff" style="transform: scale(-1)">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"/>
        </svg>

        <div class="slide slide-1" data-media="https://images.unsplash.com/photo-1718095744838-dace5469b218?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></div>
        <div class="slide slide-2" data-media="https://plus.unsplash.com/premium_photo-1716975574438-e816527cb415?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></div>
        <div class="slide slide-3" data-media="https://images.unsplash.com/photo-1718524767488-10ee93e05e9c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></div>
</div>

//ADVANCED BEG
//THERE ARE 7 PRESETS FULL CUSTOMISABLE
new Carousel({
    elem: '.carousel-3d', //default is carousel-3d
    autoplay: true, //default is true
    speed: 500, //default is 750, transition between slides
    pause: 3000, //default is 3000, pause between slides when autoplay
    vertex: `varying vec2 vUv;void main() {vUv = uv;gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);}`,
    fragment: `
uniform float time;
uniform float progress;
uniform float intensity;
uniform float width;
uniform float scaleX;
uniform float scaleY;
uniform float transition;
uniform float radius;
uniform float swipe;
uniform sampler2D texture1;
uniform sampler2D texture2;
uniform sampler2D displacement;
uniform vec4 resolution;
varying vec2 vUv;
mat2 rotate(float a) {
    float s = sin(a);
    float c = cos(a);
    return mat2(c, -s, s, c);
}
const float PI = 3.1415;
const float angle1 = PI *0.25;
const float angle2 = -PI *0.75;


void main(){
    vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);

    vec2 uvDivided = fract(newUV*vec2(intensity,0));


    vec2 uvDisplaced1 = newUV + rotate(3.1415926/10.)*uvDivided*progress*0.1;
    vec2 uvDisplaced2 = newUV + rotate(3.1415926/10.)*uvDivided*(1. - progress)*0.1;

    vec4 t1 = texture2D(texture1,uvDisplaced1);
    vec4 t2 = texture2D(texture2,uvDisplaced2);

    gl_FragColor = mix(t1, t2, progress);

}
`,
    uniforms: {
        intensity: {value: 50, type:'f', min:0, max:2},
        width: {value: 0, type:'f', min:0, max:10},
        scaleX: {value: 0, type:'f', min:0.1, max:60},
        scaleY: {value: 0, type:'f', min:0.1, max:60},
        radius: {value: 0, type:'f', min:0.1, max:2},
    },
});

```

## animation Creation
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

Options :
x
y
rotate
opacity
scaleX
scaleY
skewX
skewY
```

Dynamic example, with HTML element and data-attributes :
```python
<h2 class="auto-animate" data-scroll="true" data-scroll-mobile="false" data-start="25%" data-end="75%" data-from-x="-50" data-to-x="-150" data-from-x-mobile="-25" data-to-x-mobile="-50" data-from-y="-50" data-to-y="0">
    auto-anim
</h2>

let windowWidth = window.innerWidth;
let breakpoint = 991;
let autoAnimateDivs = document.querySelectorAll('.auto-animate');
autoAnimateDivs.forEach(autoAnimateDiv => {

    let yFromDesktop = autoAnimateDiv.getAttribute('data-from-y') ? autoAnimateDiv.getAttribute('data-from-y') : 0;
    let yFromMobile = autoAnimateDiv.getAttribute('data-from-y-mobile') ? autoAnimateDiv.getAttribute('data-from-y-mobile') : yFromDesktop;
    let yToDesktop = autoAnimateDiv.getAttribute('data-to-y') ? autoAnimateDiv.getAttribute('data-to-y') : 0;
    let yToMobile = autoAnimateDiv.getAttribute('data-to-y-mobile') ? autoAnimateDiv.getAttribute('data-to-y-mobile') : yToDesktop;

    let xFromDesktop = autoAnimateDiv.getAttribute('data-from-x') ? autoAnimateDiv.getAttribute('data-from-x') : 0;
    let xFromMobile = autoAnimateDiv.getAttribute('data-from-x-mobile') ? autoAnimateDiv.getAttribute('data-from-x-mobile') : xFromDesktop;
    let xToDesktop = autoAnimateDiv.getAttribute('data-to-x') ? autoAnimateDiv.getAttribute('data-to-x') : 0;
    let xToMobile = autoAnimateDiv.getAttribute('data-to-x-mobile') ? autoAnimateDiv.getAttribute('data-to-x-mobile') : xToDesktop;

    let start = autoAnimateDiv.getAttribute('data-start') ? autoAnimateDiv.getAttribute('data-start') : '0%';
    let end = autoAnimateDiv.getAttribute('data-end') ? autoAnimateDiv.getAttribute('data-end') : '100%';

    let scroll = autoAnimateDiv.getAttribute('data-scroll') === 'false' ? false : true;
    let isScrollMobile = autoAnimateDiv.getAttribute('data-scroll-mobile') === 'false' ? false : true;


    new Animation({
        elem: autoAnimateDiv,
        scroll: scroll,
        isScrollMobile: isScrollMobile,
        start: start,
        end: end,
        measure: 'px', /** default px */
        from: {
            y: windowWidth > breakpoint ? parseFloat(yFromDesktop) : parseFloat(yFromMobile),
            x: windowWidth > breakpoint ? parseFloat(xFromDesktop) : parseFloat(xFromMobile),
        },
        to: {
            y: windowWidth > breakpoint ? parseFloat(yToDesktop) : parseFloat(yToMobile),
            x: windowWidth > breakpoint ? parseFloat(xToDesktop) : parseFloat(xToMobile),
        }
    });
```

## customScrollBar
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
    elems: 'body', //needed
    imagePath: './img/cursor.jpg', //needed
    position: 'top right', //default center center : top left; top right; bottom left; bottom right
    imageWidth: 200, //optional
    imageHeight: 300, //optional
    offsetY: -50, //optional
    offsetX: 50, //optional
    imageCover: false, // default true
    keepCursor: false, // default false
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

