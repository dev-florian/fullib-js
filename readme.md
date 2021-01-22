# FULLIB-JS
![Pres](github-ressources/pres.jpg?raw=true "Pres")

Multiple animation Library in full javascript

https://dev-florian.github.io/fullib-js/

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

## WORKING FOR 1.2.0
- NEW ANIM : Aerobit ( full css )
- IMAGEBLOB : Adding option for auto-responsive
- BLOTTER : check the issue on mobile device ( not displaying )
- LAX : better responsive

## Installation
Use yarn :
```python
yard add animation-felix
```
Dependencies
```python
"gsap": "^2.1.3",
"hover-effect": "^1.1.0",
"lax.js": "^2.0.2",
"three": "^0.99.0"
```
Those will be automatically installed when running yard add animation-felix

## LAX LIBRARY
https://github.com/alexfoxy/lax.js

### List of custom classes
```python
lax-opacity-start
lax-opacity-end
lax-down
lax-up
lax-left
lax-right
lax-top lax-opacity-start
lax-down lax-opacity-start
lax-left lax-opacity-start
lax-right lax-opacity-start
lax-scale-up
lax-scale-down
lax-fullwidth-left
lax-fullwidth-right
lax-fullwidth-left-rotate
lax-fullwidth-right-rotate
lax-middlewith-left
lax-middlewith-right
lax-parallax-up
lax-parallax-down
lax-parallax-left
lax-parallax-right
lax-fullrotate-right
lax-fullrotate-left
lax-parallax-up-rotate
lax-parallax-down-rotate
lax-parallax-left-rotate
lax-parallax-right-rotate
lax-parallax-up lax-opacity-start
lax-parallax-down lax-opacity-start
lax-parallax-left lax-opacity-start
lax-parallax-right lax-opacity-start
lax-rotate-left
lax-rotate-right
lax-rotate-left lax-opacity-start
lax-rotate-right lax-opacity-start
lax-skew-left
lax-skew-right
lax-blur-start
lax-scale-up-screen
lax-fixed-middle
lax-fixed-middle-soft
trans1
trans2
trans3
```
How To use ?
```python
import {laxAddons} from "animation-felix";
laxAddons();
```
Then add the class to your div !

## DRAWSVG
Put by default this class on your div :
```python
drawsvg
```
How To use ?
```python
import {drawSvg} from "animation-felix";
drawSvg();
```

## CURSOR
Display a custom cursor

How To use ?
```python
import {cursor} from "animation-felix";
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
import {text1} from "animation-felix";
text1();
```

Exceptions
```python
import {text2} from "animation-felix";
text2({media: "myAbsoluteUrlImage"});
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
import {reveal1} from "animation-felix";
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
import {button1} from "animation-felix";
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
import {menu1} from "animation-felix";
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
import {blotter} from "animation-felix";
blotter();

<div class="blotter" data-blotter-effect="liquid" data-blotter-font="'Russo One', sans-serif" data-blotter-size="120" data-blotter-color="#c69f64">ABC</div>
```
Warning : 
-You have to put the blotter className to your element
-You have to only put a valid string in the div
-The font must be loaded before the plugin

### Image Hover effect
```python
hover-effect
```
How to use ?

Easy example
```python
import {webgl} from "animation-felix";
webgl();

<div class="hover-effect" style="height: 100%;"
data-media1="https://raw.githubusercontent.com/robin-dela/hover-effect/master/images/balloon.jpg"
data-media2="https://raw.githubusercontent.com/robin-dela/hover-effect/master/images/balloon2.jpg"
data-distortion="https://raw.githubusercontent.com/robin-dela/hover-effect/master/example/img/displacement/16.jpg"></div>
</div>
```
Warning: the div parent must have a height

### Image Hover effect 2
```python
hover-effect
```
How to use ?

Easy example
```python
import {webgl2} from "animation-felix";
webgl2({id: 'myIdString'});

<img
src="https://raw.githubusercontent.com/robin-dela/hover-effect/master/images/ice2.jpg"
data-hover="https://raw.githubusercontent.com/robin-dela/hover-effect/master/images/ice.jpg"
class="tile__image"
alt="My image"
/>
<canvas id="myIdString">
</canvas>
```
Warning: the div parent must have a height

## Change color of bg if in viewport
```python
change-background
```
How to use ?

Easy example
```python
import {changeBackground} from "animation-felix";
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
import { lottie } from "animation-felix";
lottie();

<div class="mt-5 mb-5 lottie" data-lottie-scroll="false" data-lottie-click="true" data-lottie-hover="false" data-lottie-file="../../lottie/button.json" style="width: 150px;"></div>
```

## MOUSEMOOVE [NEW]

When mooving the mouse, it mooves the content ( related to mouse position )

How to use ?

Easy example
```python
import {mousemove} from "animation-felix";
mousemove();

<div class="firstcard mousemove" data-speed="3">
  <img width="50" height="50" src="https://images.freeimages.com/images/large-previews/08e/up-close-personal-2-1359478.jpg">
</div>
```

## IMAGEBLOB [NEW]

Add a round blob effect to your image

How to use ?

Easy example
```python
import {imageBlob} from "animation-felix";
imageBlob();

<img class="blobed" alt="blob" width="400" height="400" src="https://outsmartlabs.com/medias/images/redcharlie-fCRFjmM8Ll4-unsplash.jpg">
```

Warning :
Don't forget to add with and height attribute ( default take 400 x 400 )

## GENERATE BULBS [NEW]

Add a round blob effect to your image

How to use ?

Easy example
```python
import {generateBulb} from "animation-felix";
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

Warning :


