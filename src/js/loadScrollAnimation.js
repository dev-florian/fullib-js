import {animation} from "fullib-js";

animation({
    classNames: '.scroll-lefttoright',
    scroll: true,
    start: '0%',
    end: '50%',
    from: {
        x: -100
    },
    to: {
        x: 0,
    }
});

animation({
    classNames: '.scroll-righttoleft',
    scroll: true,
    start: '0%',
    end: '50%',
    from: {
        x: 100
    },
    to: {
        x: 0,
    }
});

animation({
    classNames: '.scroll-toptobottom',
    scroll: true,
    start: '0%',
    end: '50%',
    from: {
        y: -100
    },
    to: {
        y: 0,
    }
});

animation({
    classNames: '.scroll-bottomtotop',
    scroll: true,
    start: '0%',
    end: '50%',
    from: {
        y: 100
    },
    to: {
        y: 0,
    }
});

animation({
    classNames: '.scroll-rotateleft',
    scroll: true,
    start: '0%',
    end: '100%',
    from: {
        rotate: -70
    },
    to: {
        rotate: 0,
    }
});

animation({
    classNames: '.scroll-rotateright',
    scroll: true,
    start: '0%',
    end: '100%',
    from: {
        rotate: 70
    },
    to: {
        rotate: 0,
    }
});

animation({
    classNames: '.scroll-scaleup',
    scroll: true,
    start: '0%',
    end: '50%',
    from: {
        scale: 0
    },
    to: {
        scale: 1,
    }
});

animation({
    classNames: '.scroll-scaledown',
    scroll: true,
    start: '0%',
    end: '50%',
    from: {
        scale: 2,
    },
    to: {
        scale: 1,
    }
});

animation({
    classNames: '.scroll-scaledown',
    scroll: true,
    start: '0%',
    end: '50%',
    from: {
        scale: 2,
    },
    to: {
        scale: 1,
    }
});

animation({
    classNames: '.scroll-opacity-up',
    scroll: true,
    start: '0%',
    end: '50%',
    from: {
        opacity: 0,
    },
    to: {
        opacity: 1,
    }
});

animation({
    classNames: '.scroll-opacity-down',
    scroll: true,
    start: '60%',
    end: '100%',
    from: {
        opacity: 1,
    },
    to: {
        opacity: 0,
    }
});

animation({
    classNames: '.scroll-extra',
    scroll: true,
    start: '0%',
    end: '100%',
    measure: 'vw',
    from: {
        x: -50,
    },
    to: {
        x: 50,
    }
});

animation({
    classNames: '.scroll-extra-2',
    scroll: true,
    start: '0%',
    end: '100%',
    measure: 'vh',
    from: {
        y: 25,
    },
    to: {
        y: -25,
    }
});