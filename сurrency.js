const buttonExchange = document.querySelector(".button-exchange");
const input = document.querySelector(".sum");
const form = document.querySelector("form");
const currensySelectorFrom = document.querySelector(".currensy-selector-from");
const currensySelectorTo = document.querySelector(".currensy-selector-to");
const resultSum = document.querySelector(".result-sum");

const convert = async () => {
  const response = await fetch(
    `https://open.er-api.com/v6/latest/${currensySelectorFrom.value}`
  );
  const data = await response.json();
  console.log(data);
  const results = input.value;
  resultSum.textContent =
    (results * data.rates[currensySelectorTo.value]).toFixed(2) +
    currensySelectorTo.value;
};
input.addEventListener("change", getCash);
currensySelectorFrom.addEventListener("change", getCash);
currensySelectorTo.addEventListener("change", getCash);
function getCash(e) {
  convert();
}
//Текущий курс
const courses = {};
const elementRUB = document.querySelector("[data-value='RUB']");
const elementUSD = document.querySelector("[data-value='USD']");
const elementEUR = document.querySelector("[data-value='EUR']");
const elementPLN = document.querySelector("[data-value='PLN']");

getCurrencies();

async function getCurrencies() {
  const response = await fetch("https://open.er-api.com/v6/latest/AED");
  const datas = await response.json();
  const res = await datas;
  courses.RUB = res.rates.RUB;
  courses.USD = res.rates.USD;
  courses.EUR = res.rates.EUR;
  courses.PLN = res.rates.PLN;
  console.log(courses);
  elementRUB.textContent = courses.RUB.toFixed(2) + " " + "RUB";
  elementUSD.textContent = courses.USD.toFixed(2) + " " + "USD";
  elementEUR.textContent = courses.EUR.toFixed(2) + " " + "EUR";
  elementPLN.textContent = courses.PLN.toFixed(2) + " " + "AED";
}
