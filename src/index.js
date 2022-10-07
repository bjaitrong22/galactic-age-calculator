import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import galacticAgeCalculator from './js/galacticAgeCalculator.js';

function handlegalacticAgeCalcForm() {
  event.preventDefault();
  document.querySelector('#response').innerText = null;
  const age = parseInt(document.querySelector('#age').value);
  const sex = document.querySelector("input[name='sex']:checked").value;
  const galacticAgeCal = new galacticAgeCalculator(age,sex);
  const response = galacticAgeCal.getAgeMercury();
  const pTag = document.createElement("p");
  pTag.append(response);
  document.querySelector('#response').append(pTag);
}

window.addEventListener("load", function() {
  document.querySelector("#galacticAgeCalculator-form").addEventListener("submit", handlegalacticAgeCalcForm);
});
