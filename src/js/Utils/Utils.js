export default class Utils {
    constructor() {}

    //FUNCTION TO CHECK IF IS ELEMENT IN VIEWPORT
    isElementInViewport(item) {
        let bounding = item.getBoundingClientRect(),
            myElementHeight = item.offsetHeight,
            myElementWidth = item.offsetWidth;

        if (bounding.top >= -myElementHeight
            && bounding.left >= -myElementWidth
            && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + myElementWidth
            && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight) {
            return true;
        } else {
            return false;
        }
    }

    //FUNCTION TO CHECK IF A STRING IF A VALID NUMBER
    validNumber(number) {
        if (parseFloat(number) == 0) {
            return true;
        }

        return number;
    }

    //FUNCTION TO ADD A NEW ELEMENT IN HTML
    addElement(type, classes, options = null) {
        let newDiv = document.createElement(type);

        if (Array.isArray(classes)) {
            newDiv.classList.add(...classes);
        } else if (classes instanceof DOMTokenList) {
            newDiv.classList.add(...classes)
        } else {
            if (classes !== '') {
                newDiv.classList.add(classes);
            }
        }

        if (options && options.text) {
            newDiv.innerHTML = options.text;
        }

        if (options && options.id) {
            newDiv.setAttribute('id', options.id);
        }

        if (options && options.href) {
            newDiv.setAttribute('href', options.href);
        }

        if (options && options.rel) {
            newDiv.setAttribute('rel', options.rel);
        }

        if (options && options.target) {
            newDiv.setAttribute('target', options.target);
        }

        if (options && options.type) {
            newDiv.setAttribute('type', options.type);
        }

        if (options && options.src) {
            newDiv.setAttribute('src', options.src);
        }

        if (options && options.addTo) {
            options.addTo.appendChild(newDiv);
        } else {
            document.body.appendChild(newDiv);
        }

        return newDiv;
    }
}
