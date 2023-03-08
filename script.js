// Write your JavaScript code here!

// const { pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let chosenPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(document, chosenPlanet.name, chosenPlanet.diameter, chosenPlanet.star, chosenPlanet.distance, chosenPlanet.moons, chosenPlanet.image);
   })
let list = document.getElementById("faultyItems");
let form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    let pilotName = document.querySelector("input[name=pilotName]");
    let pilot = pilotName.value;
    let copilotName = document.querySelector("input[name=copilotName]");
    let copilot = copilotName.value;
    let fuel = document.querySelector("input[name=fuelLevel]");
    let fuelLevel = fuel.value;
    let cargoMass = document.querySelector("input[name=cargoMass]");
    let cargoLevel = cargoMass.value;
    

    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    });
    
  });