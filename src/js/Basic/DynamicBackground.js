import Utils from "./../Utils/Utils";

export default class DynamicBackground extends Utils {
    constructor(options = {}) {
        super();
        this.elems = options.elems ? (options.elems instanceof HTMLCollection ? options.elems : document.querySelectorAll(options.elems)) : document.querySelectorAll('.dynamic-background');
        this.transition = options.transition ? options.transition : 'background-color 1s linear';
        this.body = document.body;
        this.backgroundColor = options.backgroundColor ? options.backgroundColor : 'initial';

        if(this.elems){
            this.init();
        }
    }


    init() {
        let localStore = this;

        this.elems.forEach(elem => {
            elem.classList.add('change-background');
            this.body.style.transition = this.transition;

            let backgroundColorVar = elem.getAttribute('data-background-color') ? elem.getAttribute('data-background-color') : this.backgroundColor;


            if (this.isElementInViewport(elem)) {
                this.body.style.backgroundColor = backgroundColorVar;
            }

            window.addEventListener('scroll', function () {
                if (localStore.isElementInViewport(elem)) {
                    localStore.body.style.backgroundColor = backgroundColorVar;
                } else {
                    localStore.body.style.backgroundColor = "initial";
                }
            });
        })
    }
}
