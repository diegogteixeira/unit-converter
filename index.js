/*
Values given by Scrimba:
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

/*
More precise values:
1 meter = 3.28084 feet
1 liter = 0.2641729 gallon (US)
1 liter = 0.2199662 gallon (Imperial)
1 kilogram = 2.204623 pound
*/

const inputEl = document.querySelector("#input-el");
const convertBtn = document.querySelector("#convert-btn");
const lengthP = document.querySelector("#length-result-p");
const volumeP = document.querySelector("#volume-result-p");
const massP = document.querySelector("#mass-result-p");

function convMeterToFoot(value) {
  return value * 3.28084;
}

function convFootToMeter(value) {
  return value / 3.28084;
}

function convLiterToGallon(value) {
  return value * 0.2199662;
}

function convGallonToLiter(value) {
  return value / 0.2199662;
}

function convKilogramToPound(value) {
  return value * 2.204623;
}

function convPoundToKilogram(value) {
  return value / 2.204623;
}

function renderLengthResult(value, metricUnit, imperialUnit) {
  lengthP.textContent = `${value} meters = ${imperialUnit} feet | ${value} feet = ${metricUnit} meters`;
}

function renderVolumeResult(value, metricUnit, imperialUnit) {
  volumeP.textContent = `${value} liters = ${imperialUnit} gallons | ${value} gallons = ${metricUnit} liters`;
}

function renderMassResult(value, metricUnit, imperialUnit) {
  massP.textContent = `${value} kilograms = ${imperialUnit} pounds | ${value} pounds = ${metricUnit} kilograms`;
}

convertBtn.addEventListener("click", function() {
  const inputValue = inputEl.value;
  const foot = convMeterToFoot(inputValue).toFixed(3);
  const meter = convFootToMeter(inputValue).toFixed(3);
  renderLengthResult(inputValue, meter, foot);
  const gallon = convLiterToGallon(inputValue).toFixed(3);
  const liter = convGallonToLiter(inputValue).toFixed(3);
  renderVolumeResult(inputValue, liter, gallon);
  const pound = convKilogramToPound(inputValue).toFixed(3);
  const kilogram = convPoundToKilogram(inputValue).toFixed(3);
  renderMassResult(inputValue, kilogram, pound);
})