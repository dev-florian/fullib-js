
export default class Mousemoove {
    constructor(options = {}) {
        this.elems = options.elems ? (options.elems instanceof HTMLCollection ? options.elems : document.querySelectorAll(options.elems)) : document.querySelectorAll('.mousemove');
        this.force = options && options.force ? options.force : 100;
        this.speed = options && options.speed ? options.speed : 3;
        this.inverse = options && options.inverse ? options.inverse : false;
        this.breakpoint = options && options.breakpoint ? options.breakpoint : 320;
        if(this.elems){
            this.init();
        }
    }


    init() {
        let localStorage = this;

        if (window.innerWidth > this.breakpoint) {
            document.addEventListener("mousemove", parallaxOnMouse);
        }

        function parallaxOnMouse(e) {

            localStorage.elems.forEach(layer => {

                //PARAMS
                const speedVar = layer.getAttribute('data-speed') ? layer.getAttribute('data-speed') : localStorage.speed;
                const forceVar = layer.getAttribute('data-force') ? layer.getAttribute('data-force') : localStorage.force;
                const inverseVar = layer.getAttribute('data-inverse') ? layer.getAttribute('data-force') : localStorage.inverse;
                const x = inverseVar ? (window.innerWidth + e.pageX * speedVar) / forceVar : (window.innerWidth - e.pageX * speedVar) / forceVar;
                const y = inverseVar ? (window.innerHeight + e.pageY * speedVar) / forceVar : (window.innerHeight - e.pageY * speedVar) / forceVar;

                //ADD CSS
                layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
            })
        }
    }
}
