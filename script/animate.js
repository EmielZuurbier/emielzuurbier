/*global TweenMax, TimelineMax, colorize, TweenLite, $*/



//basic gradient demo using webkit gradient + ColorPropsPlugin
var iOS = /iPad|iPhone|iPod/.test(navigator.platform),
    isChrome_iOS = false;

var isChromium = window.chrome,
    vendorName = window.navigator.vendor,
    isOpera = window.navigator.userAgent.indexOf("OPR") > -1,
    isChrome = false;
if (isChromium !== null && isChromium !== undefined && vendorName === "Google Inc." && isOpera === false) {
    isChrome = true;
}

//create an object to store initial color values
var colors = {top: "#569e65", bottom: "#e84a4a"},
    tl = new TimelineMax({paused: false, delay: 2, repeat: -1});

//create a paused tween
//use ColorPropsPlugin to tween the top and bottom colors
tl.to(colors, 20, {colorProps: {top: "#61309a", bottom: "#e84a4a"}, onUpdate: colorize, onUpdateParams: [".background"]});
tl.to(colors, 20, {colorProps: {top: "#61309a", bottom: "#4ebab2"}, onUpdate: colorize, onUpdateParams: [".background"]});
tl.to(colors, 20, {colorProps: {top: "#569e65", bottom: "#4ebab2"}, onUpdate: colorize, onUpdateParams: [".background"]});
tl.to(colors, 20, {colorProps: {top: "#569e65", bottom: "#e84a4a"}, onUpdate: colorize, onUpdateParams: [".background"]});


function colorize(element) {
    "use strict";
    if (isChrome) {
        TweenLite.set(element, {background: "-webkit-linear-gradient(45deg," + colors.top + ", " + colors.bottom + ")"});
    } else {
        TweenLite.set(element, {background: "linear-gradient(45deg," + colors.top + ", " + colors.bottom + ")"});
    }
}
