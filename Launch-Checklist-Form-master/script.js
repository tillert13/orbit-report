// Write your JavaScript code here!
window.addEventListener("load", function () {
   let form = document.querySelector("form");
   form.addEventListener("submit", function (event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      let updatedVisibilty = document.getElementById("faultyItems");
      let updatedPilot = document.getElementById("pilotStats");
      let updatedCopilot = document.getElementById("copilotStatus");
      pilotStatus.innerText = `Pilot: ${pilotNameInput.value} is ready`
      updatedCopilot.innerText = `Co-pilot: ${copilotNameInput.value} is ready`;
      launchStatus.innerText = 'Shuttle is ready for launch';
      launchStatus.style.color = 'green';
      fuelStatus.innerText = 'Fuel level high enough for launch';
      cargoStatus.innerText = 'Cargo mass low enough for launch';
      event.preventDefault();
      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required!");
         event.preventDefault();
      } else if (isNaN(pilotNameInput.value) === false || isNaN(copilotNameInput.value) === false || isNaN(fuelLevelInput.value) === true || isNaN(cargoMassInput.value) === true) {
         alert("Please enter valid information!");
         updatedVisibilty.style.visibility = 'visible';
         launchStatus.innerText = 'Shuttle not ready for launch';
         launchStatus.style.color = 'red';
         event.preventDefault();
      }
      if (fuelLevelInput.value < 10000) {
         updatedVisibilty.style.visibility = 'visible';
         launchStatus.innerText = 'Shuttle not ready for launch';
         launchStatus.style.color = 'red';
         fuelStatus.innerText = 'Fuel level too low for launch';
      }
      if (cargoMassInput.value > 10000) {
         updatedVisibilty.style.visibility = 'visible';
         launchStatus.innerText = 'Shuttle not ready for launch';
         launchStatus.style.color = 'red';
         cargoStatus.innerText = 'Cargo mass too high for launch';
      }
   });
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
