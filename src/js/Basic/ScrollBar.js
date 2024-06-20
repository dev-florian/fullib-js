
export default class ScrollBar {
    constructor(options = {}) {
        this.elem = options.elem ? options.elem : '.scrollbar';
        this.width = options.width ? options.width+'px' : 'auto';
        this.scrollbarColor = options.scrollbarColor ? options.scrollbarColor : '#ffffff';
        this.scrollbarBackground = options.scrollbarBackground ? options.scrollbarBackground : '#000000';
        this.border = options.border ? options.border : 'none';
        this.borderRadius = options.borderRadius ? options.borderRadius : 0;
        if(this.elem){
            this.init();
        }
    }


    init() {
        let cssScrollbar =
            this.elem + "{" +
            "scrollbar-width: " + this.width + ";" +
            "scrollbar-color: " + this.scrollbarColor + " " + this.scrollbarBackground + ";" +
            "}" +
            this.elem + "::-webkit-scrollbar {" +
            "width: " + this.width + ";" +
            "}" +
            this.elem + "::-webkit-scrollbar-track {" +
            "background: " + this.scrollbarBackground + ";" +
            "}" +
            this.elem + "::-webkit-scrollbar-thumb {" +
            "background-color: " + this.scrollbarColor + ";" +
            "border-radius: " + this.borderRadius + ";" +
            "border: " + this.border + ";" +
            "}";

        document.head.insertAdjacentHTML("beforeend", '<style>' + cssScrollbar + '</style>')
    }
}
