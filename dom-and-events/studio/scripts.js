// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    console.log("all elements loaded");

const takeOffButton = document.getElementById("takeoff");
const flightStatusID = document.getElementById("flightStatus");
const flightDisplayID = document.getElementById("flightDisplay");
const shuttleBackgroundID = document.getElementById("shuttleBackground");
const spaceShuttleHeightID = document.getElementById("spaceShuttleHeight");

takeOffButton.addEventListener('click', function() {
    let takeOffClick = window.confirm("Confirm that the shuttle is ready for takeoff.");
    if (takeOffClick === true) {
        flightStatusID.innerHTML = "Shuttle in flight.";
        shuttleBackgroundID.style.background = "blue";
        spaceShuttleHeightID.innerHTML = "10000";
    }
})

///land button
const landButtonID = document.getElementById("landing");
landButtonID.addEventListener("click", function() {
    window.alert("The shuttle is landing. Landing gear engaged");


})})