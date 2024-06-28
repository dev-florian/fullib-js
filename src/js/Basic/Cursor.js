import Utils from "./../Utils/Utils";
import "./../../css/cursor/Cursor.css";

export default class Cursor extends Utils {
    constructor(options = {}) {
        super();

        this.elems = options.elems ? (options.elems instanceof HTMLCollection ? options.elems : document.querySelectorAll(options.elems)) : false;
        this.imagePath = options.imagePath ? options.imagePath : false;

        if (this.elems && this.imagePath) {
            this.imageObject = new Image();
            this.imageObject.src = this.imagePath;
            this.cursorHoverDiv = false;

            this.imageCover = typeof options.imageCover === 'undefined' ? true : options.imageCover;
            this.keepCursor = typeof options.keepCursor === 'undefined' ? false : options.keepCursor;
            this.offsetY = options.offsetY ? options.offsetY : 0;
            this.offsetX = options.offsetX ? options.offsetX : 0;
            this.position = options.position ? options.position : "center center";

            if (options.imageWidth) {
                this.imageObject.style.width = options.imageWidth + 'px';
            }

            if (options.imageHeight) {
                this.imageObject.style.height = options.imageHeight + 'px';
            }

            this.imageObject.onload = function (image) {
                this.imageWidth = image.width
                this.imageHeight = image.height
            }

            this.cursorX = 0;
            this.cursorY = 0;

            this.init();
        }
    }


    init() {
        this.createAndConfigureDiv();
        this.elems.forEach(elem => {
            if (this.cursorHoverDiv) {

                if(!this.keepCursor){
                    elem.style.cursor = 'none';
                }

                window.addEventListener('load', event => {
                    this.changePosition(event)
                })

                elem.addEventListener('mouseenter', event => {
                    this.changePosition(event)
                    this.cursorHoverDiv.classList.add('active');
                });

                elem.addEventListener('mouseleave', event => {
                    this.cursorHoverDiv.classList.remove('active');
                });

                elem.addEventListener('mousemove', event => {
                    if(!this.cursorHoverDiv.classList.contains('active')){
                        this.cursorHoverDiv.classList.add('active');
                    }

                    this.changePosition(event)
                })
            }
        })
    }

    changePosition(event){
        if (this.position == "center center") {
            this.cursorX = event.clientX - (this.imageObject.width / 2);
            this.cursorY = event.clientY - (this.imageObject.height / 2);
        }

        if (this.position == "bottom right") {
            this.cursorX = event.clientX - this.imageObject.width;
            this.cursorY = event.clientY - this.imageObject.height;
        }

        if (this.position == "bottom left") {
            this.cursorX = event.clientX;
            this.cursorY = event.clientY - this.imageObject.height;
        }

        if (this.position == "top left") {
            this.cursorX = event.clientX;
            this.cursorY = event.clientY;
        }

        if (this.position == "top right") {
            this.cursorX = event.clientX - this.imageObject.width;
            this.cursorY = event.clientY;
        }

        if(this.offsetY){
            this.cursorY = this.cursorY + this.offsetY;
        }

        if(this.offsetX){
            this.cursorX = this.cursorX + this.offsetX;
        }

        let transformCss = `translateX(${this.cursorX}px) translateY(${this.cursorY}px)`;

        this.cursorHoverDiv.style.transform = transformCss;
    }

    createAndConfigureDiv() {
        const util = new Utils();
        this.cursorHoverDiv = util.addElement('div', 'cursor-hover', {
            addTo: document.body
        })

        if(this.imageCover){
            this.cursorHoverDiv.classList.add('is-cover');
        }

        this.cursorHoverDiv.style.width = this.imageObject.style.width;
        this.cursorHoverDiv.style.height = this.imageObject.style.height;
        this.cursorHoverDiv.appendChild(this.imageObject);
    }
}
