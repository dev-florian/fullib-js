# ANIMATION FELIX
Multiple animation Library in full javascript

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

## List of laxxx classes
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

## List of svg classes
```python
drawsvg
```
How To use ?
```python
import {drawSvg} from "animation-felix";
drawSvg();
```
Then add the class to your svg !

## List of cursor classes
```python
custom-cursor
titlezoomcursor
```
How To use ?
```python
import {cursor} from "animation-felix";
cursor(10, '#000000', '#ffd5ce');
cursor(size, firstColor, secondColor);
```
Then add "custom-cursor" to your body !
If you want to zoom cursor on elements, simply add the class "titlezoomcursor" to the elements wanted

## List of text classes
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
```python
import {text1,text2,text3,text4,text5,text6,text7} from "animation-felix";
text1();
text2(string : backgroundUrl);
text3();
text4();
text5();
text6();
text7();
```
Simply add the class on the text ('text1', 'text2'......) for different view.

## List of reveal classes
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
```python
import {reveal1,reveal2,reveal3,reveal4,reveal5,reveal6,reveal7,reveal8,reveal9} from "animation-felix";
reveal1();
reveal2();
reveal3();
reveal4();
reveal5();
reveal6();
reveal7();
reveal8();
reveal9();
```
Simply add the class to your div or p ('reveal1', 'reveal2' ....)

### List of button classes
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
```
How To use ?
```python
import {button1,button3,button4,button5,button6,button7,button8,button9,button10,button11,button12,button13,button14,button15} from "animation-felix";
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
```
Simply add the class to your a balise ('button1', 'button2' ....)

### List of menu classes
menu1
menu2
menu3
menu4
menu5
How to use ?
```python
import {menu1, menu2,menu3,menu4,menu5} from "animation-felix";
menu1();
menu2();
menu3();
menu4();
menu5();

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

        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="/pages/lax">Lax</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/pages/text">Text</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/pages/buttons">Buttons</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/pages/reveal">Reveal</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/pages/menu">Menu</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/pages/hover-effect">Hover effect</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/pages/hover-effect2">Hover effect 2</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/pages/menu">menu</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/pages/menu2">menu2</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/pages/menu3">menu3</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/pages/menu4">menu4</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/pages/menu5">menu5</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/pages/blotter">blotter</a>
                </li>
            </ul>
        </div>
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
### Blotter effect ( text distortion on scroll)
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
How tu use ?
```python
import {blotter} from "animation-felix";
blotter();

<div class="blotter" data-blotter-effect="liquid" data-blotter-font="'Russo One', sans-serif" data-blotter-size="120" data-blotter-color="#c69f64">ABC</div>
Warning : 
-You have to put the blotter className to your element
-You have to only put a valid string in the div
-The font must be loaded before the plugin
```

### Image Hover effect
```python
hover-effect
```
How to use ?
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
```python
import {webgl2} from "animation-felix";
webgl2(myId);

<img
src="https://raw.githubusercontent.com/robin-dela/hover-effect/master/images/ice2.jpg"
data-hover="https://raw.githubusercontent.com/robin-dela/hover-effect/master/images/ice.jpg"
class="tile__image"
alt="My image"
/>
<canvas id="myId">
</canvas>
```
Warning: the div parent must have a height

## List of other classes
### Change color of bg if in viewport
```python
change-background
```
How to use ?
```python
import {changeBackground} from "animation-felix";
changeBackground("#ffd5ce", 'change-background', 'linear');
changeBackground("color", 'className', 'animationCss');
```

### Transition with lax
How to use ?
```python
import { transition1} from "animation-felix";
transition1();

<div class="transition1">
    <div class="trans trans1" data-lax-anchor="self" style="background-image: url('./img/bg1.png')"></div>
    <div class="trans trans2" data-lax-anchor="self" style="background-image: url('./img/bg2.png')"></div>
    <div class="trans trans3" data-lax-anchor="self" style="background-image: url('./img/bg3.png')"></div>
</div>
```