import Utils from "./../Utils/Utils";

export default class Animation extends Utils {
    constructor(options = {}) {
        super();
        this.elems = options.elems ? (options.elems instanceof HTMLCollection ? options.elems : document.querySelectorAll(options.elems)) : false;
        this.mobileBreakpoint = options.mobileBreakpoint ? options.mobileBreakpoint : 991;
        this.isScroll = options.scroll ? options.scroll : false;
        this.isScroll = options.isScrollMobile && window.innerWidth < this.mobileBreakpoint ? options.isScrollMobile : this.isScroll;
        this.transition = options.transition ? options.transition : 'all 0.1s linear';
        this.duration = options.duration ? options.duration : 500;
        this.delay = options.delay ? options.delay : 0;
        this.fromCss = options.from ? options.from : false;
        this.toCss = options.to ? options.to : false;
        this.start = options.start ? options.start : '0%';
        this.end = options.end ? options.end : '100%';
        this.timingFunction = options.timingFunction ? options.timingFunction : 'ease';
        this.screenHeight = window.screen.height;
        this.measure = options.measure ? options.measure : 'px';
        this.currentPurcent = 0;

        if(this.elems){
            this.init();
        }
    }


    init() {
        this.convertVariables();

        let localStorage = this;

        this.elems.forEach(elem => {
            elem.style.opacity = this.fromCssOpacity;
            let cssPosition = this.getDefaultPosition();
            elem.style.transform = cssPosition.transformFromCss;


            if (!this.isScroll) {
                if (this.isElementInViewport(elem)) {
                    elem.style.transition = 'all ' + this.duration + 'ms ' + this.timingFunction + ' ' + this.delay + 'ms';
                    elem.style.transform = cssPosition.transformToCss;
                    elem.style.opacity = this.toCssOpacity;
                }

                window.addEventListener("scroll", (event) => {
                    if (this.isElementInViewport(elem)) {
                        elem.style.transition = 'all ' + localStorage.duration + 'ms ' + localStorage.timingFunction + ' ' + localStorage.delay + 'ms';
                        elem.style.transform = cssPosition.transformToCss;
                        elem.style.opacity = this.toCssOpacity;
                    } else {
                        elem.style.transform = cssPosition.transformFromCss;
                        elem.style.opacity = localStorage.fromCssOpacity;
                    }
                });
            }

            if (this.isScroll) {
                this.currentPurcent = this.actionScroll(elem);
                elem.style.transition = this.transition;

                window.addEventListener("scroll", (event) => {
                    localStorage.currentPurcent = localStorage.actionScroll(elem);
                });
            }
        })
    }

    convertVariables() {
        //CONVERT
        this.fromCssY = typeof this.fromCss.y !== 'undefined' ? this.fromCss.y.toString() : false;
        this.toCssY = typeof this.toCss.y !== 'undefined' ? this.toCss.y.toString() : false;

        this.fromCssOpacity = typeof this.fromCss.opacity !== 'undefined' ? parseFloat(this.fromCss.opacity) : 1;
        this.toCssOpacity = typeof this.toCss.opacity !== 'undefined' ? parseFloat(this.toCss.opacity) : 1;

        this.fromCssX = typeof this.fromCss.x !== 'undefined' ? this.fromCss.x.toString() : false;
        this.toCssX = typeof this.toCss.x !== 'undefined' ? this.toCss.x.toString() : false;

        this.fromCssScale = typeof this.fromCss.scale !== 'undefined' ? this.fromCss.scale.toString() : false;
        this.toCssScale = typeof this.toCss.scale !== 'undefined' ? this.toCss.scale.toString() : false;

        this.fromCssRotate = typeof this.fromCss.rotate !== 'undefined' ? this.fromCss.rotate.toString() : false;
        this.toCssRotate = typeof this.toCss.rotate !== 'undefined' ? this.toCss.rotate.toString() : false;

        this.fromCssSkewX = typeof this.fromCss.skewX !== 'undefined' ? this.fromCss.skewX.toString() : false;
        this.toCssSkewX = typeof this.toCss.skewX !== 'undefined' ? this.toCss.skewX.toString() : false;

        this.fromCssSkewY = typeof this.fromCss.skewY !== 'undefined' ? this.fromCss.skewY.toString() : false;
        this.toCssSkewY = typeof this.toCss.skewY !== 'undefined' ? this.toCss.skewY.toString() : false;

        this.start = parseFloat(this.start);
        this.end = parseFloat(this.end);
        //END
    }

    getDefaultPosition() {
        let transformFromCss = "";
        let transformToCss = "";

        if (this.validNumber(this.fromCssX) && this.validNumber(this.toCssX)) {
            transformFromCss += "translateX(" + this.fromCssX + this.measure + ") ";
            transformToCss += "translateX(" + this.toCssX + this.measure + ") ";
        }

        if (this.validNumber(this.fromCssY) && this.validNumber(this.toCssY)) {
            transformFromCss += "translateY(" + this.fromCssY + this.measure + ") ";
            transformToCss += "translateY(" + this.toCssY + this.measure + ") ";
        }

        if (this.validNumber(this.fromCssScale) && this.validNumber(this.toCssScale)) {
            transformFromCss += "scale(" + this.fromCssScale + ") ";
            transformToCss += "scale(" + this.toCssScale + ") ";
        }

        if (this.validNumber(this.fromCssRotate) && this.validNumber(this.toCssRotate)) {
            transformFromCss += "rotate(" + this.fromCssRotate + "deg)";
            transformToCss += "rotate(" + this.toCssRotate + "deg)";
        }

        if (this.validNumber(this.fromCssSkewX) && this.validNumber(this.toCssSkewX)) {
            transformFromCss += "skewX(" + this.fromCssSkewX + "deg)";
            transformToCss += "skewX(" + this.toCssSkewX + "deg)";
        }

        if (this.validNumber(this.fromCssSkewY) && this.validNumber(this.toCssSkewY)) {
            transformFromCss += "skewY(" + this.fromCssSkewY + "deg)";
            transformToCss += "skewY(" + this.toCssSkewY + "deg)";
        }

        return {
            transformFromCss: transformFromCss,
            transformToCss: transformToCss,
        }
    }

    actionScroll(elem) {
        let scrollGlobal = window.scrollY;

        let elemHeight = elem.offsetHeight;
        let windowHeight = window.innerHeight;
        let scrollPositionToElem = elem.getBoundingClientRect().bottom - elemHeight;
        let currentPurcent = ((windowHeight - scrollPositionToElem) * 100) / (windowHeight + elemHeight);
        let resPurcent = Math.max(0, Math.min(100, currentPurcent));

        if (currentPurcent >= 0 && scrollPositionToElem <= this.screenHeight && currentPurcent >= this.start && currentPurcent <= this.end) {

            let scrollPurcentInView = ((currentPurcent - this.start) * 100) / (this.end - this.start);

            if (this.toCssOpacity >= 0) {
                let opacityRes = this.calcCss(this.fromCssOpacity, this.toCssOpacity, scrollPurcentInView);
                elem.style.opacity = opacityRes;
            }

            let transformCss = "";

            if (this.validNumber(this.fromCssX) && this.validNumber(this.toCssX)) {
                let cssXRes = this.calcCss(this.fromCssX, this.toCssX, scrollPurcentInView);
                transformCss += "translateX(" + cssXRes + this.measure + ") ";
            }

            if (this.validNumber(this.fromCssY) && this.validNumber(this.toCssY)) {
                let cssYRes = this.calcCss(this.fromCssY, this.toCssY, scrollPurcentInView);
                transformCss += "translateY(" + cssYRes + this.measure + ") ";
            }

            if (this.validNumber(this.fromCssScale) && this.validNumber(this.toCssScale)) {
                let cssScaleRes = this.calcCss(this.fromCssScale, this.toCssScale, scrollPurcentInView);
                transformCss += "scale(" + cssScaleRes + ")";
            }

            if (this.validNumber(this.fromCssRotate) && this.validNumber(this.toCssRotate)) {
                let cssRotateRes = this.calcCss(this.fromCssRotate, this.toCssRotate, scrollPurcentInView);
                transformCss += "rotate(" + cssRotateRes + "deg)";
            }

            if (this.validNumber(this.fromCssSkewX) && this.validNumber(this.toCssSkewX)) {
                let cssSkewXRes = this.calcCss(this.fromCssSkewX, this.toCssSkewX, scrollPurcentInView);
                transformCss += "skewX(" + cssSkewXRes + "deg)";
            }

            if (this.validNumber(this.fromCssSkewY) && this.validNumber(this.toCssSkewY)) {
                let cssSkewYRes = this.calcCss(this.fromCssSkewY, this.toCssSkewY, scrollPurcentInView);
                transformCss += "skewY(" + cssSkewYRes + "deg)";
            }


            elem.style.transform = transformCss;
        }

        let cssPosition = this.getDefaultPosition();

        if (currentPurcent < this.start && currentPurcent < this.end) {
            if (this.validNumber(this.toCssOpacity)) {
                elem.style.opacity = this.fromCssOpacity;
            }
            if (cssPosition.transformToCss) {
                elem.style.transform = cssPosition.transformFromCss;
            }
        }

        if (currentPurcent > this.start && currentPurcent > this.end) {
            if (this.validNumber(this.toCssOpacity)) {
                elem.style.opacity = this.toCssOpacity;
            }
            if (cssPosition.transformFromCss) {
                elem.style.transform = cssPosition.transformToCss;
            }
        }

        return currentPurcent;
    }

    calcCss(from, to, scrollPurcentInView) {
        return parseFloat(((to - from) / 100) * scrollPurcentInView + from);
    }
}
