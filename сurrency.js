const buttonExchange = document.querySelector(".button-exchange");
const input = document.querySelector(".sum");
const form = document.querySelector("form");
const but = document.querySelectorAll(".but");
console.log(but);
const result = document.querySelectorAll(".result ");
const currensySelectorFrom = document.querySelector(".currensy-selector-from");
const currensySelectorTo = document.querySelector(".currensy-selector-to");
const resultSum = document.querySelector(".result-sum");

const convert = async () => {
  const response = await fetch(
    `https://open.er-api.com/v6/latest/${currensySelectorFrom.value}`
  );
  const data = await response.json();
  console.log(data);
  input.addEventListener("change", (e) => {
    const results = input.value;
    resultSum.textContent = (
      results * data.rates[currensySelectorTo.value]
    ).toFixed(2);
  });
};
currensySelectorFrom.addEventListener("change", getCash);
currensySelectorTo.addEventListener("change", getCash);
function getCash(e) {
  convert();
}
