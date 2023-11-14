const buttonExchange = document.querySelector(".button-exchange");
console.log(buttonExchange);
const input = document.querySelector(".sum");
const resultSum = document.querySelector(".result-sum");
console.log(resultSum);
const form = document.querySelector(".form");
const ryRub = document.querySelector(".ryRub");
console.log(ryRub);
const pyAed = document.querySelector(".pyAed");
console.log(pyAed);
const but = document.querySelectorAll(".but");
const result = document.querySelectorAll(".result ");
console.log(result);
const currensySelector = document.querySelector(".currensy-selector");
console.log(currensySelector);

const convert = async () => {
  const response = await fetch(`https://open.er-api.com/v6/latest/RUB`);
  const data = await response.json();
  console.log(data);
  input.addEventListener("change", (e) => {
    const results = input.value;
    console.log(
      (resultSum.textContent =
        results * data.rates[currensySelector.value].toFixed(2))
    );
  });
};
convert();
