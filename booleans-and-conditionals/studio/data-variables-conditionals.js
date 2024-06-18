// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = true;
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7 &&
// add logic below to verify all astronauts are ready
astronautStatus === "ready" &&
// add logic below to verify the total mass does not exceed the maximum limit of 850000
totalMassKg < maximumMassLimit &&
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
fuelTempCelsius >= -300 && fuelTempCelsius <= -150 &&
// add logic below to verify the fuel level is at 100%
fuelLevel === "100%" &&
// add logic below to verify the weather status is clear
weatherStatus === "clear") {
// Verify shuttle launch can proceed based on above conditions
console.log("Date:", date);
console.log("Time:", time);
console.log("Astronaut Count:", astronautCount);
console.log("Crew Mass (kg):", crewMassKg);
console.log("Fuel Mass (kg):", fuelMassKg);
console.log("Shuttle Mass (kg):", shuttleMassKg);
console.log("Total Mass (kg):", totalMassKg);
console.log("Fuel Temperature (Celsius):", fuelTempCelsius + "°C");
console.log("Fuel Temperature (Celsius): ${fuelTempCelsius} °C");
console.log("Weather Status:", weatherStatus);


    // Wish astronauts a safe flight!
    console.log("Have a safe flight!");

} else {
    // If conditions are not met, shutdown launch 
    console.log("Launch conditions are not met. ABORT LAUNCH!");
}