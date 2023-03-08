// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   let missionTarget = document.getElementById("missionTarget");
   missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
   `
}

function validateInput(testInput) {
    if (testInput===""){
        return "Empty";
    } else if (isNaN(Number(testInput))){
        return "Not a Number";
    } else if (!isNaN(Number(testInput))){
        return "Is a Number";
    }
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    
    if(validateInput(pilot)==="Empty"||validateInput(copilot)==="Empty"||validateInput(fuelLevel)==="Empty"||validateInput(cargoLevel)==="Empty"){
        alert("All fields are required!");
    }
    else if(validateInput(pilot)==="Is a Number"||validateInput(copilot)==="Is a Number"||validateInput(fuelLevel)==="Not a Number"||validateInput(cargoLevel)==="Not a Number"){
        alert("Put the correct input types");
    }
    else {
        list.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Copilot ${copilot} is ready for launch`;
        if (fuelLevel<10000){
            fuelStatus.innerHTML = "Not enough fuel for the journey";
            launchStatus.innerHTML = "Shuttle is not ready for launch";
            launchStatus.style.color = "#FF0000";
        } if(cargoLevel>10000){
            cargoStatus.innerHTML = "Too much cargo for takeoff"
            launchStatus.innerHTML = "Shuttle is not ready for launch";
            launchStatus.style.color = "#FF0000";
        }
        if (fuelLevel>=10000 && cargoLevel<=10000) {
            launchStatus.innerHTML = (`Shuttle is ready for launch`);
            launchStatus.style.color = "#00FF00";
            cargoStatus.innerHTML = "Cargo mass low enough for launch"
            fuelStatus.innerHTML = "Fuel level high enough for launch";
        }

    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let randomNumber = Math.floor(Math.random()* planets.length);
    return (planets[randomNumber]);
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
