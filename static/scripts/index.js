console.log("check");
const systemSettingsPage = document.getElementById("systemSettings");
const mainPage = document.querySelector(".content-wrapper");
const navBar = document.querySelector(".header-wrapper");
const greetings = document.querySelector(".greetings-wrapper");
const time = document.getElementById("timeCounter");

// TODO: Set timer functions
let secondsElapse = 0;
let interval = null;

function setTime() {
    time.innerHTML = secondsElapse;
}

function timer() {
    secondsElapse++;
    setTime();
}

// Timer functions
function startClock() {
    interval = setInterval(timer, 1000)
}
function stopClock() {}
function resetClock() {}

// UI
function systemSettingsView() {
    console.log("clicked");
    systemSettingsPage.style.display = "block";
    mainPage.style.display = "none";
    navBar.style.display = "none";
    greetings.style.display = "none";
}

function returnHome() {
    console.log("clicked");
    systemSettingsPage.style.display = "none";
    mainPage.style.display = "flex";
    navBar.style.display = "flex";
    greetings.style.display = "none";
}
