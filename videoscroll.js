"use strickt";

// <!--

// KEYWORDS!
// fixed
// clientHeight
// -->

let theVideo = document.querySelector("#theVideo");
let theVideoDuration;
let currentTime;

window.addEventListener("DOMContentLoaded", init);

function init() {
    console.log("init");
    loadVideo();
}

function loadVideo() {
    console.log("loadVideo");

    // canplaythrough event
    theVideo.addEventListener("canplaythrough", videoLoaded);
}

function videoLoaded() {
    console.log("videoLoaded");
    theVideoDuration = theVideo.duration;
    console.log(theVideoDuration);
}

let scrollDistance = document.querySelector(".outerVideoContainer").scrollHeight - document.querySelector(".outerVideoContainer").clientHeight;
console.log("scrollDistance", scrollDistance);

document.querySelector(".outerVideoContainer").addEventListener("scroll", scrollFunc);

function scrollFunc(evt) {

    // pixels from top
    console.log("Scrolltop", evt.target.scrollTop);

    // log of querySelectors
    // console.log("outerVideoContainer ScrollHeight", document.querySelector(".outerVideoContainer").scrollHeight)
    // console.log("outerVideoContainer clientHeight", document.querySelector(".outerVideoContainer").clientHeight)

    let scrollRatio = evt.target.scrollTop / scrollDistance;
    theVideo.currentTime = scrollRatio * theVideoDuration;

    // How far you can scroll
    console.log("Scrolltop ratio", scrollRatio);
}