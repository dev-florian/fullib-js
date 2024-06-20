import Utils from "./../Utils/Utils";
export default class Cursor extends Utils{
    constructor(options = {}) {
        super();
        this.firstCursor = options.firstCursor ? options.firstCursor : false;
        this.secondCursor = options.secondCursor ? options.secondCursor : false;

        this.activeFirstCursor = options.activeFirstCursor ? options.activeFirstCursor : true;
        this.activeSecondCursor = options.activeSecondCursor ? options.activeSecondCursor : false;

        this.removeOriginalCursor = options.removeOriginalCursor ? options.removeOriginalCursor : false;
        this.removeAt = options.removeAt ? options.removeAt : 991;

        this.elems = options.elems ? document.querySelectorAll(options.elems) : document.querySelectorAll('.custom-cursor');

        this.mouseTargets = document.querySelectorAll(options && options.zoomOnDiv ? options.zoomOnDiv : '.titlezoomcursor');

        if(this.elems){
            this.init();
        }
    }


    init() {

        let localStorage = this;

        if (window.innerWidth > this.removeAt) {
            if (this.elems) {
                if (this.removeOriginalCursor) {
                    document.body.style.cursor = 'none';
                }

                //CURSOR1
                let cursor1 = null;
                if (this.activeFirstCursor) {
                    //ADDING CSS
                    cursor1 = this.addElement('div', ['rounded-cursor', 'cursor-follower']);
                    cursor1.style.backgroundColor = this.firstCursor && this.firstCursor.backgroundColor ? this.firstCursor.backgroundColor : "#000000";
                    cursor1.style.width = (this.firstCursor.size ? this.firstCursor.size : 10) + 'px';
                    cursor1.style.height = (this.firstCursor.size ? this.firstCursor.size : 10) + 'px';
                    cursor1.style.border = this.firstCursor && this.firstCursor.border ? this.firstCursor.border : "";
                    cursor1.style.transition = this.firstCursor && this.firstCursor.transition ? this.firstCursor.transition : "top .1s, left .1s, width .5s, height .5s";
                    cursor1.style.borderRadius = this.firstCursor && this.firstCursor.type === "round" ? "50%" : this.firstCursor && this.firstCursor.type === "square" ? "0" : (this.firstCursor && this.firstCursor.type ? this.firstCursor.type : "50%");
                    cursor1.style.position = "absolute";
                    cursor1.style.zIndex = 9999;
                    cursor1.style.pointerEvents = 'none';
                }

                //CURSOR2 ( FOLLOWED BY THE FIRST ONE )
                let cursor2 = null;
                if (this.activeSecondCursor) {

                    //ADDING CSS
                    cursor2 = this.addElement('div', ['rounded-cursor', 'cursor-dot']);
                    cursor2.style.backgroundColor = this.secondCursor && this.secondCursor.backgroundColor ? this.secondCursor.backgroundColor : "#000000";
                    cursor2.style.width = (this.secondCursor.size ? this.secondCursor.size : 10) + 'px';
                    cursor2.style.height = (this.secondCursor.size ? this.secondCursor.size : 10) + 'px';
                    cursor2.style.border = this.secondCursor && this.secondCursor.border ? this.secondCursor.border : "";
                    cursor2.style.transition = this.secondCursor && this.secondCursor.transition ? this.secondCursor.transition : "top .25s, left .25s, width .7s, height .7s";
                    cursor2.style.borderRadius = this.secondCursor && this.secondCursor.type === "round" ? "50%" : this.secondCursor && this.secondCursor.type === "square" ? "0" : (this.secondCursor && this.secondCursor.type ? this.secondCursor.type : "50%");
                    cursor2.style.position = "absolute";
                    cursor2.style.zIndex = 9999;
                    cursor2.style.pointerEvents = 'none';
                }


                //LOOP ON EACH ELEMENT TO ZOOM IN
                this.mouseTargets.forEach(mouseTarget => {
                    mouseTarget.style.cursor = "none";

                    //MOUSEENTER : ZOOM
                    mouseTarget.addEventListener('mouseenter', e => {
                        if (cursor1) {
                            cursor1.classList.add('focus');
                            cursor1.style.opacity = '.5';
                            cursor1.style.width = localStorage.firstCursor && localStorage.firstCursor.hoverSize ? localStorage.firstCursor.hoverSize + 'px' : localStorage.firstCursor.size * 2 + 'px';
                            cursor1.style.height = localStorage.firstCursor && localStorage.firstCursor.hoverSize ? localStorage.firstCursor.hoverSize + 'px' : localStorage.firstCursor.size * 2 + 'px';
                        }

                        if (cursor2) {
                            cursor2.classList.add('focus');
                            cursor2.style.opacity = '.5';
                            cursor2.style.width = localStorage.secondCursor && localStorage.secondCursor.hoverSize ? localStorage.secondCursor.hoverSize + 'px' : localStorage.secondCursor.size * 2 + 'px';
                            cursor2.style.height = localStorage.secondCursor && localStorage.secondCursor.hoverSize ? localStorage.secondCursor.hoverSize + 'px' : localStorage.secondCursor.size * 2 + 'px';
                        }
                    })

                    //MOUSEENTER : DEZOOM
                    mouseTarget.addEventListener('mouseleave', e => {
                        if (cursor1) {
                            cursor1.classList.remove('focus');
                            cursor1.style.opacity = '1';
                            cursor1.style.width = localStorage.firstCursor && localStorage.firstCursor.size ? localStorage.firstCursor.size + 'px' : 10 + 'px';
                            cursor1.style.height = localStorage.firstCursor && localStorage.firstCursor.size ? localStorage.firstCursor.size + 'px' : 10 + 'px';
                        }

                        if (cursor2) {
                            cursor2.classList.remove('focus');
                            cursor2.style.opacity = '1';
                            cursor2.style.width = localStorage.secondCursor && localStorage.secondCursor.size ? localStorage.secondCursor.size + 'px' : 5 + 'px';
                            cursor2.style.height = localStorage.secondCursor && localStorage.secondCursor.size ? localStorage.secondCursor.size + 'px' : 5 + 'px';
                        }
                    })
                });



                //UPDATE MOOSE POSITION ON THE PAGE

                let firstCursorSize = this.firstCursor.size ? this.firstCursor.size : 10;
                let secondCursorCursorSize = this.secondCursor.size ? this.secondCursor.size : 10;

                let onmousemove = function (e) {
                    let xpos = e.pageX;
                    let ypos = e.pageY;

                    if (cursor1) {
                        cursor1.style.left = (xpos - (firstCursorSize / 2)) + 'px';
                        cursor1.style.top = (ypos - (firstCursorSize / 2)) + 'px';
                    }

                    if (cursor2) {
                        cursor2.style.left = (xpos - (secondCursorCursorSize / 2)) + 'px';
                        cursor2.style.top = (ypos - (secondCursorCursorSize / 2)) + 'px';
                    }
                }

                document.addEventListener('mousemove', onmousemove);
            }
        }
    }
}
