window.addEventListener('load', function () {

    let variablesOpacity = {
        from: 0,
        middle: 1,
        to: 1,
    };

    let variablesLeftRight = {
        from: -50,
        middle: 0,
        to: 0,
    };

    let variablesTopDown = {
        from: -50,
        middle: 0,
        to: 0,
    };

    let variablesScaleUp = {
        from: 1,
        middle: 1.2,
        to: 1.2,
    };

    let variablesScaleDown = {
        from: 1.2,
        middle: 1,
        to: 1,
    };


    let variablesParallaxTopDown = {
        from: 0,
        to: -300,
    };

    let variablesParallaxLeftRight = {
        from: 0,
        to: -100,
    };

    let variablesRotate = {
        from: -30,
        to: 0,
    };

    let variablesSkew = {
        from: -50,
        to: 0,
    };

    let variablesBlur = {
        from: 10,
        to: 0,
    };


    // lax.init();
    //
    // // Add a driver that we use to control our animations
    // lax.addDriver('scrollY', function () {
    //     return window.scrollY
    // })


    //************************************START OPACITY**************************************
    lax.addElements('.lax-opacity-start', {
        scrollY: {                // Driver name
            opacity: [
                ['elInY', "elCenterY-200", 'elOutY'],  // Driver value map
                [variablesOpacity.from, variablesOpacity.middle, variablesOpacity.to],   // Animation value map
            ]
        }
    })
    lax.addElements('.lax-opacity-end', {
        scrollY: {                // Driver name
            opacity: [
                ['elInY', "elCenterY-200", 'elOutY'],  // Driver value map
                [variablesOpacity.to, variablesOpacity.middle, variablesOpacity.from],   // Animation value map
            ]
        }
    })
    //************************************END OPACITY**************************************


    //************************************START ANIMATION TOP BOTTOM**************************************
    lax.addElements('.lax-down', {
        scrollY: {                // Driver name
            translateY: [
                ['elInY', "elCenterY-200", 'elOutY'],  // Driver value map
                [variablesTopDown.from, variablesTopDown.middle, variablesTopDown.to],   // Animation value map
            ]
        }
    })
    lax.addElements('.lax-up', {
        scrollY: {                // Driver name
            translateY: [
                ['elInY', "elCenterY-200", 'elOutY'],  // Driver value map
                [inverse(variablesTopDown.from), inverse(variablesTopDown.middle), inverse(variablesTopDown.to)],   // Animation value map
            ]
        }
    })
//************************************END ANIMATION TOP BOTTOM**************************************

//************************************START ANIMATION LEFT RIGHT**************************************
    lax.addElements('.lax-right', {
        scrollY: {                // Driver name
            translateX: [
                ['elInY', "elCenterY-200", 'elOutY'],  // Driver value map
                [variablesLeftRight.from, variablesLeftRight.middle, variablesLeftRight.to],   // Animation value map
            ]
        }
    })

    lax.addElements('.lax-left', {
        scrollY: {                // Driver name
            translateX: [
                ['elInY', "elCenterY-200", 'elOutY'],  // Driver value map
                [inverse(variablesLeftRight.from), inverse(variablesLeftRight.middle), inverse(variablesLeftRight.to)],   // Animation value map
            ]
        }
    })

    //************************************END ANIMATION LEFT RIGHT**************************************


    //************************************START ANIMATION SCALES**************************************
    lax.addElements('.lax-scale-up', {
        scrollY: {                // Driver name
            scale: [
                ['elInY', "elCenterY-200", 'elOutY'],  // Driver value map
                [variablesScaleUp.from, variablesScaleUp.middle, variablesScaleUp.to],   // Animation value map
            ]
        }
    })

    lax.addElements('.lax-scale-down', {
        scrollY: {                // Driver name
            scale: [
                ['elInY', "elCenterY-200", 'elOutY'],  // Driver value map
                [variablesScaleDown.from, variablesScaleDown.middle, variablesScaleDown.to],   // Animation value map
            ]
        }
    })

    lax.addElements('.lax-scale-up-screen', {
        scrollY: {                // Driver name
            scale: [
                ['elInY', 'elCenterY','elOutY'],  // Driver value map
                [1, 1,8],   // Animation value map
            ],
            translateY: [['elInY', 'elCenterY', 'elOutY'], [300, 0, 450]],
            opacity: [
                ['elInY', 'elCenterY', 'elOutY-200', 'elOutY'],  // Driver value map
                [1,1,1, 0],   // Animation value map
            ],
        }
    })
    //************************************END ANIMATION SCALES**************************************

    //************************************START ANIMATION FULL ROTATE**************************************
    lax.addElements('.lax-fullrotate-right', {
        scrollY: {                // Driver name
            rotate: [
                ['elInY', 'elOutY'],  // Driver value map
                [0, 360],   // Animation value map
            ]
        }
    })
    lax.addElements('.lax-fullrotate-left', {
        scrollY: {                // Driver name
            rotate: [
                ['elInY', 'elOutY'],  // Driver value map
                [0, -360],   // Animation value map
            ]
        }
    })
    //************************************END ANIMATION FULL ROTATE**************************************

    //************************************START ANIMATION FULLWIDTH**************************************
    lax.addElements('.lax-fullwidth-left', {
        scrollY: {                // Driver name
            translateX: [
                ['elInY', 'elOutY'],  // Driver value map
                ['elOutX', 'elInX'],   // Animation value map
            ]
        }
    })
    lax.addElements('.lax-fullwidth-right', {
        scrollY: {                // Driver name
            translateX: [
                ['elInY', 'elOutY'],  // Driver value map
                ['elInX', 'elOutX'],   // Animation value map
            ]
        }
    })

    lax.addElements('.lax-fullwidth-left-rotate', {
        scrollY: {                // Driver name
            translateX: [
                ['elInY', 'elOutY'],  // Driver value map
                ['elOutX', 'elInX'],   // Animation value map
            ],
            rotate: [
                ['elInY', 'elOutY'],  // Driver value map
                [0, -360],   // Animation value map
            ]
        }
    })
    lax.addElements('.lax-fullwidth-right-rotate', {
        scrollY: {                // Driver name
            translateX: [
                ['elInY', 'elOutY'],  // Driver value map
                ['elInX', 'elOutX'],   // Animation value map
            ],
            rotate: [
                ['elInY', 'elOutY'],  // Driver value map
                [0, 360],   // Animation value map
            ]
        }
    })

    lax.addElements('.lax-middlewidth-left', {
        scrollY: {                // Driver name
            translateX: [
                ['elInY', 'elCenterY-200'],  // Driver value map
                ['elOutX', 'elCenterX'],   // Animation value map
            ]
        }
    })
    lax.addElements('.lax-middlewidth-right', {
        scrollY: {                // Driver name
            translateX: [
                ['elInY', 'elCenterY-200'],  // Driver value map
                ['elInX', 'elCenterX'],   // Animation value map
            ]
        }
    })
    //************************************END ANIMATION FULLWIDTH**************************************

    //************************************START ANIMATION PARALLAX**************************************
    lax.addElements('.lax-parallax-up-rotate', {
        scrollY: {
            translateY: [
                ['elInY', 'elOutY'],  // Driver value map
                [variablesParallaxTopDown.from, variablesParallaxTopDown.to],   // Animation value map
            ],
            rotate: [
                ['elInY', 'elOutY'],  // Driver value map
                [0, 360],   // Animation value map
            ]
        }
    })

    lax.addElements('.lax-parallax-down-rotate', {
        scrollY: {
            translateY: [
                ['elInY', 'elOutY'],  // Driver value map
                [inverse(variablesParallaxTopDown.from), inverse(variablesParallaxTopDown.to)],   // Animation value map
            ],
            rotate: [
                ['elInY', 'elOutY'],  // Driver value map
                [0, 360],   // Animation value map
            ]
        }
    })

    lax.addElements('.lax-parallax-left-rotate', {
        scrollY: {
            translateX: [
                ['elInY', 'elOutY'],  // Driver value map
                [variablesParallaxLeftRight.from, variablesParallaxLeftRight.to],   // Animation value map
            ],
            rotate: [
                ['elInY', 'elOutY'],  // Driver value map
                [0, 360],   // Animation value map
            ]
        }
    })

    lax.addElements('.lax-parallax-right-rotate', {
        scrollY: {
            translateX: [
                ['elInY', 'elOutY'],  // Driver value map
                [inverse(variablesParallaxLeftRight.from), inverse(variablesParallaxLeftRight.to)],   // Animation value map
            ],
            rotate: [
                ['elInY', 'elOutY'],  // Driver value map
                [0, 360],   // Animation value map
            ]
        }
    })

    lax.addElements('.full-rotate-right', {
        scrollY: {                // Driver name
            rotate: [
                ['elInY', 'elOutY'],  // Driver value map
                [0, -360],   // Animation value map
            ]
        }
    })
    lax.addElements('.lax-parallax-up', {
        scrollY: {                // Driver name
            translateY: [
                ['elInY', 'elOutY'],  // Driver value map
                [variablesParallaxTopDown.from, variablesParallaxTopDown.to],   // Animation value map
            ]
        }
    })
    lax.addElements('.lax-parallax-up-lighter', {
        scrollY: {                // Driver name
            translateY: [
                ['elInY', 'elCenterY+200'],  // Driver value map
                [variablesParallaxTopDown.from, variablesParallaxTopDown.to],   // Animation value map
            ]
        }
    })
    lax.addElements('.lax-parallax-up-low', {
        scrollY: {                // Driver name
            translateY: [
                ['elInY', 'elCenterY'],  // Driver value map
                [variablesParallaxTopDown.from, variablesParallaxTopDown.to],   // Animation value map
            ]
        }
    })
    lax.addElements('.lax-parallax-down', {
        scrollY: {                // Driver name
            translateY: [
                ['elInY', 'elOutY'],  // Driver value map
                [inverse(variablesParallaxTopDown.from), inverse(variablesParallaxTopDown.to)],   // Animation value map
            ]
        }
    })

    lax.addElements('.lax-parallax-left', {
        scrollY: {                // Driver name
            translateX: [
                ['elInY', 'elOutY'],  // Driver value map
                [variablesParallaxLeftRight.from, variablesParallaxLeftRight.to],   // Animation value map
            ]
        }
    })
    lax.addElements('.lax-parallax-right', {
        scrollY: {                // Driver name
            translateX: [
                ['elInY', 'elOutY'],  // Driver value map
                [inverse(variablesParallaxLeftRight.from), inverse(variablesParallaxLeftRight.to)],   // Animation value map
            ]
        }
    })

    //************************************END ANIMATION PARALLAX**************************************

    //************************************START ANIMATION ROTATE**************************************

    lax.addElements('.lax-rotate-right', {
        scrollY: {                // Driver name
            rotate: [
                ['elInY', 'elCenterY-200'],  // Driver value map
                [variablesRotate.from, variablesRotate.to],   // Animation value map
            ]
        }
    })

    lax.addElements('.lax-rotate-left', {
        scrollY: {                // Driver name
            rotate: [
                ['elInY', 'elCenterY-200'],  // Driver value map
                [inverse(variablesRotate.from), inverse(variablesRotate.to)],   // Animation value map
            ]
        }
    })

    //************************************END ANIMATION ROTATE**************************************

    //************************************START ANIMATION SKEW**************************************

    lax.addElements('.lax-skew-right', {
        scrollY: {                // Driver name
            skew: [
                ['elInY', 'elCenterY-200'],  // Driver value map
                [variablesSkew.from, variablesSkew.to],   // Animation value map
            ]
        }
    })

    lax.addElements('.lax-skew-left', {
        scrollY: {                // Driver name
            skew: [
                ['elInY', 'elCenterY-200'],  // Driver value map
                [inverse(variablesSkew.from), inverse(variablesSkew.to)],   // Animation value map
            ]
        }
    })

    //************************************END ANIMATION ROTATE**************************************

    //************************************START ANIMATION SKEW**************************************

    lax.addElements('.lax-blur-start', {
        scrollY: {                // Driver name
            blur: [
                ['elInY', 'elCenterY-200'],  // Driver value map
                [variablesBlur.from, variablesBlur.to],   // Animation value map
            ]
        }
    })

    //************************************END ANIMATION ROTATE**************************************
    //************************************START ANIMATION TRANSITION**************************************
    lax.addElements('.trans1', {
        scrollY: {
            translateY: [
                ["elInY", "elOutY"],
                [0, -300]
            ],
        }
    })

    lax.addElements('.trans2', {
        scrollY: {
            translateY: [
                ["elInY", "elOutY"],
                [0, 200]
            ],
        }
    })

    lax.addElements('.trans3', {
        scrollY: {
            translateY: [
                ["elInY", "elOutY"],
                [0, 700]
            ],
        }
    })
    //************************************END ANIMATION TRANSITION**************************************
    //************************************START ANIMATION FIXED**************************************
    //************************************START ANIMATION FIXED**************************************

    lax.addElements('.lax-fixed-middle', {
        scrollY: {                // Driver name
            translateY: [['elInY', 'elCenterY', 'elOutY'], [300, 0, 450]],
        }
    })

    lax.addElements('.lax-fixed-middle-soft', {
        scrollY: {                // Driver name
            translateY: [['elInY', 'elCenterY', 'elOutY'], [0, 0, 'elHeight']],
        }
    })
    //************************************END ANIMATION FIXED**************************************

});

function inverse(arg) {
    return arg * -1;
}