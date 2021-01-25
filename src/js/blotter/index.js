const MathUtils = {
    // Equation of a line.
    lineEq: (y2, y1, x2, x1, currentVal) => {
        var m = (y2 - y1) / (x2 - x1), b = y1 - m * x1;
        return m * currentVal + b;
    },
    // Linear Interpolation function.
    lerp: (a, b, n) => (1 - n) * a + n * b
};

let blotters = document.getElementsByClassName('blotter');

let rolling = new Blotter.RollingDistortMaterial(),
    rolling2 = new Blotter.RollingDistortMaterial(),
    rolling3 = new Blotter.RollingDistortMaterial(),
    rolling4 = new Blotter.RollingDistortMaterial(),
    rolling5 = new Blotter.RollingDistortMaterial(),
    liquid = new Blotter.LiquidDistortMaterial(),
    liquid2 = new Blotter.LiquidDistortMaterial()

// liquid
liquid.uniforms.uSpeed.value = .5;
liquid.uniforms.uVolatility.value = 0;
liquid.uniforms.uSeed.value = 0.4;
let liquidVolatility = 1;

// liquid-2
liquid2.uniforms.uSpeed.value = .9;
liquid2.uniforms.uVolatility.value = 0;
liquid2.uniforms.uSeed.value = 0.1;
let liquid2Volatility = 0.1;

// rolling
rolling.uniforms.uSineDistortSpread.value = 0.28
rolling.uniforms.uSineDistortCycleCount.value = 5
rolling.uniforms.uSineDistortAmplitude.value = 0
rolling.uniforms.uNoiseDistortVolatility.value = 0
rolling.uniforms.uNoiseDistortAmplitude.value = 0
rolling.uniforms.uDistortPosition.value = [0, 0]
rolling.uniforms.uRotation.value = 90
rolling.uniforms.uSpeed.value = 0.3
let rollingVolatility = 0;

// rolling-2
rolling2.uniforms.uSineDistortSpread.value = 0.354
rolling2.uniforms.uSineDistortCycleCount.value = 5
rolling2.uniforms.uSineDistortAmplitude.value = 0
rolling2.uniforms.uNoiseDistortVolatility.value = 0
rolling2.uniforms.uNoiseDistortAmplitude.value = 0.168
rolling2.uniforms.uDistortPosition.value = [0.38, 0.68]
rolling2.uniforms.uRotation.value = 48
rolling2.uniforms.uSpeed.value = 0.421
let rolling2Volatility = 0;

// rolling-3
rolling3.uniforms.uSineDistortSpread.value = 0.54
rolling3.uniforms.uSineDistortCycleCount.value = 2
rolling3.uniforms.uSineDistortAmplitude.value = 0
rolling3.uniforms.uNoiseDistortVolatility.value = 0
rolling3.uniforms.uNoiseDistortAmplitude.value = 0.15
rolling3.uniforms.uDistortPosition.value = [0.18, 0.98]
rolling3.uniforms.uRotation.value = 90
rolling3.uniforms.uSpeed.value = 0.3
let rolling3Volatility = 0.05;

// rolling-4
rolling4.uniforms.uSineDistortSpread.value = 0.44
rolling4.uniforms.uSineDistortCycleCount.value = 5
rolling4.uniforms.uSineDistortAmplitude.value = 0
rolling4.uniforms.uNoiseDistortVolatility.value = 0
rolling4.uniforms.uNoiseDistortAmplitude.value = 0.85
rolling4.uniforms.uDistortPosition.value = [0, 0]
rolling4.uniforms.uRotation.value = 0
rolling4.uniforms.uSpeed.value = 0
let rolling4Volatility = 0.35;

// rolling-5
rolling5.uniforms.uSineDistortSpread.value = 0.74
rolling5.uniforms.uSineDistortCycleCount.value = 7
rolling5.uniforms.uSineDistortAmplitude.value = 0
rolling5.uniforms.uNoiseDistortVolatility.value = 0
rolling5.uniforms.uNoiseDistortAmplitude.value = 0.15
rolling5.uniforms.uDistortPosition.value = [0.1, 0.5]
rolling5.uniforms.uRotation.value = 20
rolling5.uniforms.uSpeed.value = 0.7
let rolling5Volatility = 0.1;

let bliquid = new Blotter(liquid);
let bliquid2 = new Blotter(liquid2);
let brolling = new Blotter(rolling);
let brolling2 = new Blotter(rolling2);
let brolling3 = new Blotter(rolling3);
let brolling4 = new Blotter(rolling4);
let brolling5 = new Blotter(rolling5);

for (let i = 0, len = blotters.length; i < len; i++) {
    let myElem = blotters[i];
    let myText = myElem.textContent;
    myElem.textContent = "";
    let myColor = myElem.getAttribute('data-blotter-color');
    let mySize = myElem.getAttribute('data-blotter-size');
    let myFont = myElem.getAttribute('data-blotter-font');
    let myEffect = myElem.getAttribute('data-blotter-effect');


    let text = new Blotter.Text(myText, {
        family: myFont,
        size: mySize,
        fill: myColor
    });

    if (myEffect === "liquid") {
        bliquid.addText(text);
        var scope = bliquid.forText(text);
        scope.appendTo(myElem);
    }

    if (myEffect === "rolling") {
        brolling.addText(text);
        var scope = brolling.forText(text);
        scope.appendTo(myElem);
    }

    if (myEffect === "liquid-2") {
        bliquid2.addText(text);
        var scope = bliquid2.forText(text);
        scope.appendTo(myElem);
    }

    if (myEffect === "rolling-2") {
        brolling2.addText(text);
        var scope = brolling2.forText(text);
        scope.appendTo(myElem);
    }

    if (myEffect === "rolling-3") {
        brolling3.addText(text);
        var scope = brolling3.forText(text);
        scope.appendTo(myElem);
    }

    if (myEffect === "rolling-4") {
        brolling4.addText(text);
        var scope = brolling4.forText(text);
        scope.appendTo(myElem);
    }

    if (myEffect === "rolling-5") {
        brolling5.addText(text);
        var scope = brolling5.forText(text);
        scope.appendTo(myElem);
    }
}

// Now, change one (or more) uniform value as we scroll.
// The faster the scrolling the more the value changes.
let currentScroll = window.pageYOffset;

// It will go from 0 (not scrolling) to 0.9 (scrolling at a speed of maxscroll).
const maxscroll = 20;
const uniformValuesRange = [0, 0.1];
// Using requestAnimationFrame + linear interpolation for the effect.
const render = () => {
    // Current scroll position
    const newScroll = window.pageYOffset;
    // How much was scrolled from the last repaint.
    const scrolled = Math.abs(newScroll - currentScroll);
    // Get the new value of volatility.
    liquidVolatility = MathUtils.lerp(liquidVolatility, Math.min(MathUtils.lineEq(uniformValuesRange[1], uniformValuesRange[0], maxscroll, 0, scrolled), 0.9), 0.05);
    rollingVolatility = MathUtils.lerp(rollingVolatility, Math.min(MathUtils.lineEq(uniformValuesRange[1], uniformValuesRange[0], maxscroll, 0, scrolled), 0.2), 0.03);
    liquid2Volatility = MathUtils.lerp(liquid2Volatility, Math.min(MathUtils.lineEq(uniformValuesRange[1], uniformValuesRange[0], maxscroll, 0, scrolled), 0.2), 0.05);
    rolling2Volatility = MathUtils.lerp(rolling2Volatility, Math.min(MathUtils.lineEq(uniformValuesRange[1], uniformValuesRange[0], maxscroll, 0, scrolled), 0.2), 0.05);
    rolling3Volatility = MathUtils.lerp(rolling3Volatility, Math.min(MathUtils.lineEq(uniformValuesRange[1], uniformValuesRange[0], maxscroll, 0, scrolled), 0.2), 0.05);
    rolling4Volatility = MathUtils.lerp(rolling4Volatility, Math.min(MathUtils.lineEq(uniformValuesRange[1], uniformValuesRange[0], maxscroll, 0, scrolled), 0.2), 0.05);
    rolling5Volatility = MathUtils.lerp(rolling5Volatility, Math.min(MathUtils.lineEq(uniformValuesRange[1], uniformValuesRange[0], maxscroll, 0, scrolled), 0.2), 0.05);
    // Set the volatility.
    liquid.uniforms.uVolatility.value = liquidVolatility;
    rolling.uniforms.uSineDistortAmplitude.value = rollingVolatility;
    liquid2.uniforms.uVolatility.value = liquid2Volatility;
    rolling2.uniforms.uSineDistortAmplitude.value = rolling2Volatility;
    rolling3.uniforms.uSineDistortAmplitude.value = rolling3Volatility;
    rolling4.uniforms.uSineDistortAmplitude.value = rolling4Volatility;
    rolling5.uniforms.uSineDistortAmplitude.value = rolling5Volatility;
    // Update the current scroll.
    currentScroll = newScroll;
    // Repeat.
    requestAnimationFrame(render);
}
requestAnimationFrame(render);