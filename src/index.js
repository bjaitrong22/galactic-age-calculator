import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GalacticAgeCalculator from './js/galacticAgeCalculator.js';

function handlegalacticAgeCalcForm() {
  event.preventDefault();
  document.querySelector('#response').innerText = null;
  const age = parseInt(document.querySelector('#age').value);
  const lifeExpectancy = document.querySelector('#lifeExpectancy').value;
  const galacticAgeCal = new GalacticAgeCalculator(age,lifeExpectancy);
  const mercuryResponse = galacticAgeCal.getMercuryAge();
  const venusResponse = galacticAgeCal.getVenusAge();
  const marsResponse = galacticAgeCal.getMarsAge();
  const jupiterResponse = galacticAgeCal.getJupiterAge();

  const mercuryLfeExptncy = galacticAgeCal.getMercuryLfeExpctncy();
  const venusLfeExptncy = galacticAgeCal.getVenusLfeExpctncy();
  const marsyLfeExptncy = galacticAgeCal.getMarsLfeExpctncy();
  const jupiterLfeExptncy = galacticAgeCal.getJupiterLfeExpctncy();

  const pTag = document.createElement("p");
  const pTag1 = document.createElement("p");
  const pTag2 = document.createElement("p");
  const pTag3 = document.createElement("p");
  const pTag4 = document.createElement("p");

  pTag.append("Your age is " + mercuryResponse + " in Mercury years, " + venusResponse +" Venus years, " + marsResponse + " Mars years, " + jupiterResponse + " Jupiter years.");
  document.querySelector('#response').append(pTag);

  pTag1.append(mercuryLfeExptncy);
  document.querySelector('#response2').append(pTag1);

  pTag2.append(venusLfeExptncy);
  document.querySelector('#response3').append(pTag2);

  pTag3.append(marsyLfeExptncy);
  document.querySelector('#response4').append(pTag3);

  pTag4.append(jupiterLfeExptncy);
  document.querySelector('#response5').append(pTag4);

}

window.addEventListener("load", function() {
  let form = document.querySelector("#galacticAgeCalculator-form");
  let submitBtn = document.getElementById("submitBtn");
  let resetBtn = document.getElementById("resetBtn");

  document.querySelector("#galacticAgeCalculator-form").addEventListener("submit", handlegalacticAgeCalcForm);

  submitBtn.removeAttribute("hidden");
  
  form.addEventListener("submit", function() {
    submitBtn.setAttribute("hidden","hidden");
    resetBtn.removeAttribute("class");
  });

  resetBtn.addEventListener("click", function() {
    submitBtn.removeAttribute("hidden");
    document.querySelector('#response').innerText = null;
    document.querySelector('#response2').innerText = null;
    document.querySelector('#response3').innerText = null;
    document.querySelector('#response4').innerText = null;
    document.querySelector('#response5').innerText = null;
    resetBtn.setAttribute("class","hidden");
  });

});
