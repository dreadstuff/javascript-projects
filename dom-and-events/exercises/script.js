function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    let liftOff = document.getElementById("liftoffButton");
    liftOff.addEventListener("click", function(event) {
        document.getElementById("statusReport").textContent = "Houston, we have liftoff!";
        console.log("Houston, we have liftoff!");
    })
    // window.addEventListener("load", function() {
    //     let redAlert = document.getElementById("abortMission");
    //     redAlert.addEventListener("mouseover", function (event) {
    //         let element = event.target;
    //         element.
    //     })
    // })

    // function changeColor() {
    //     document.getElementById("abortMission");
    //     button.style.backgroundColor = "red";
    // }
    
    abortMission.addEventListener('mouseover', function (event) {
       event.target.style.backgroundColor = "red";
    })
    abortMission.addEventListener('mouseout', function (event) {
        event.target.style.backgroundColor = "";
    })
    abortMission.addEventListener('click', function (event) {
 //      window.confirm("Are you sure you want to abort the mission?");
        if (confirm("Are you sure you want to abort the mission?") == true) {
            document.getElementById("statusReport").textContent = "Mission aborted! Space shuttle returning home.";
        } else {
            document.getElementById("statusReport").textContent = "Not aborting! The shuttle is on the ground."
        }
    })
}

window.addEventListener("load", init);
