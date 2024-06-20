import Utils from "./../Utils/Utils";
import './../../css/orbit/orbit.css'

export default class DynamicBackground extends Utils {
    constructor(options = {}) {
        super();
        this.elems = options.elems ? (options.elems instanceof HTMLCollection ? options.elems : document.querySelectorAll(options.elems)) : false;

        //GENERAL
        this.position = options && options.position ? options.position : "right-top";
        this.indexPixel = options && options.indexPixel ? options.indexPixel : 150;
        this.inverseRotation = options && options.inverseRotation ? options.inverseRotation : false;

        //line
        this.lineDisplay = options && options.line && options.line.display ? options.line.display : true;
        this.lineBorderColor = options && options.line && options.line.borderColor ? options.line.borderColor : "#ffffff";
        this.lineBorderSize = options && options.line && options.line.borderSize ? options.line.borderSize : 3;
        this.lineSize = options && options.line && options.line.size ? options.line.size : 500;

        //Bulb
        this.bulbDisplay = options && options.bulb && options.bulb.display ? options.bulb.display : true;
        this.bulbBackgroundColor = options && options.bulb && options.bulb.backgroundColor ? options.bulb.backgroundColor : "#000000";
        this.bulbBorder = options && options.bulb && options.bulb.border ? options.bulb.border : "";
        this.bulbSize = options && options.bulb && options.bulb.size ? options.bulb.size : 50;
        this.bulbPosition = this.bulbSize / 2;
        if(this.elems){
            this.init();
        }
    }


    init() {
        this.elems.forEach(elem => {
            if (this.inverseRotation) {
                elem.style.animationDirection = "reverse";
            }

            if (this.lineDisplay) {
                elem.classList.add('orbit');
                elem.style.border = this.lineBorderSize + "px solid " + this.lineBorderColor;
                elem.style.width = this.lineSize + "px";
                elem.style.height = this.lineSize + "px";

                if (this.position === "right-top") {
                    elem.style.right = -this.indexPixel + "px";
                    elem.style.top = -this.indexPixel + "px";
                } else if (this.position === "right-bottom") {
                    elem.style.right = -this.indexPixel + "px";
                    elem.style.bottom = -this.indexPixel + "px";
                } else if (this.position === "left-top") {
                    elem.style.left = -this.indexPixel + "px";
                    elem.style.top = -this.indexPixel + "px";
                } else if (this.position === "left-bottom") {
                    elem.style.left = -this.indexPixel + "px";
                    elem.style.bottom = -this.indexPixel + "px";
                }

                if (this.bulbDisplay) {
                    //Bulb
                    let beforeElem = this.addElement('div', 'orbit-before', {addTo: elem});

                    beforeElem.style.setProperty("--data-backgroundColor", this.bulbBackgroundColor);
                    beforeElem.style.setProperty("--data-border", this.bulbBorder);
                    beforeElem.style.setProperty("--data-width", this.bulbSize + 'px');
                    beforeElem.style.setProperty("--data-height", this.bulbSize + 'px');

                    if (this.position === "right-top") {
                        beforeElem.style.setProperty("--data-right", -this.bulbPosition + 'px');
                        beforeElem.style.setProperty("--data-top", '50%');
                    } else if (this.position === "right-bottom") {
                        beforeElem.style.setProperty("--data-right", -this.bulbPosition + 'px');
                        beforeElem.style.setProperty("--data-bottom", '50%');
                    } else if (this.position === "left-top") {
                        beforeElem.style.setProperty("--data-left", -this.bulbPosition + 'px');
                        beforeElem.style.setProperty("--data-top", '50%');
                    } else if (this.position === "left-bottom") {
                        beforeElem.style.setProperty("--data-left", -this.bulbPosition + 'px');
                        beforeElem.style.setProperty("--data-bottom", '50%');
                    }
                }
            } else {
                elem.style.display = "none";
            }
        })
    }
}
