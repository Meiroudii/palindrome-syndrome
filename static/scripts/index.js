console.log("check");
const systemSettingsPage = document.getElementById("systemSettings");
const mainPage = document.querySelector(".content-wrapper");
const navBar = document.querySelector(".header-wrapper");
const greetings = document.querySelector(".greetings-wrapper");

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
