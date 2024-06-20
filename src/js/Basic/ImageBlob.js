import './../../css/imageBlob/imageBlob.css'
import Utils from "./../Utils/Utils";

export default class ImageBlob extends Utils{
    constructor(options = {}) {
        super();
        this.elems = options.elems ? (options.elems instanceof HTMLCollection ? options.elems : document.querySelectorAll(options.elems)) : document.querySelectorAll('.blobed');
        this.currentWindowWidth = window.innerWidth;
        this.width = options.width ? options.width : 400;
        this.height = options.height ? options.height : 400;
        this.autoResponsive = options.autoResponsive ? options.autoResponsive : true;

        if(this.elems){
            this.init();
        }
    }


    init() {
        this.elems.forEach(imageElem => {
            let srcElem = imageElem.getAttribute('src');
            let classNamesElem = imageElem.classList;
            let idElem = imageElem.getAttribute('id');
            let parentElem = imageElem.parentNode;
            let imageWidth = imageElem.getAttribute('width') ? imageElem.getAttribute('width') : this.width;
            let imageHeight = imageElem.getAttribute('height') ? imageElem.getAttribute('height') : this.height;

            imageElem.classList.add('blob');
            imageElem.remove();

            //ADDING DIV TO DOM
            let higther = this.addElement('div', classNamesElem, {
                id: idElem,
                addTo: parentElem,
            })

            let medium = this.addElement('div', 'blob-inner', {
                id: idElem,
                addTo: higther,
            })

            let little = this.addElement('span', 'blob-img', {
                id: idElem,
                addTo: medium,
            })

            //ADDING CSS
            little.style.backgroundImage = "url('" + srcElem + "')";
            medium.style.minWidth = imageWidth ? imageWidth + "px" : '400px';
            medium.style.maxWidth = imageWidth ? imageWidth + "px" : '400px';
            medium.style.minHeight = imageHeight ? imageHeight + "px" : '400px';
            medium.style.maxHeight = imageHeight ? imageHeight + "px" : '400px';

            //AUTO RESPONSIVE
            if (this.autoResponsive && this.currentWindowWidth < 767) {
                let sizeResized = this.currentWindowWidth - 80;
                if (sizeResized < imageWidth) {
                    medium.style.minWidth = sizeResized + "px";
                    medium.style.maxWidth = sizeResized + "px";
                    medium.style.minHeight = sizeResized + "px";
                    medium.style.maxHeight = sizeResized + "px";
                }
            }

            //AUTO RESPONSIVE RESIZE
            if (this.currentWindowWidth < 767 && this.autoResponsive) {
                window.addEventListener("resize", function () {
                    let resizedWindowWidth = window.innerWidth;
                    if (resizedWindowWidth < 767) {
                        let sizeResized = resizedWindowWidth - 80;
                        if (sizeResized < imageWidth) {
                            medium.style.minWidth = sizeResized + "px";
                            medium.style.maxWidth = sizeResized + "px";
                            medium.style.minHeight = sizeResized + "px";
                            medium.style.maxHeight = sizeResized + "px";
                        }
                    }
                });
            }
        })

    }
}
