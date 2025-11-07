const BASE_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll("#dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector("#from select");
const toCurr = document.querySelector("#to select");
const msg = document.querySelector("#msg");
const swapBtn = document.querySelector("#swap");
const lastUpdated = document.querySelector("#last-updated");

for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    }
    if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

const updateExchangeRate = async () => {
  let amount = document.querySelector("#amount input");
  let amtVal = amount.value || 1;
  const from = fromCurr.value.toLowerCase();
  const to = toCurr.value.toLowerCase();
  try {
    const URL = `${BASE_URL}/${from}.json`;
    const response = await fetch(URL);
    const data = await response.json();
    const rate = data[from][to];
    const lastDate = data.date;

    let finalAmount = (amtVal * rate).toFixed(2);
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
    lastUpdated.textContent = `Last Updated: ${lastDate}`;
  } catch (err) {
    msg.innerText = "Error fetching rate. Try again.";
    console.log(err);
  }
};

swapBtn.addEventListener("click", () => {
  let temp = fromCurr.value;
  fromCurr.value = toCurr.value;
  toCurr.value = temp;

  updateFlag(fromCurr);
  updateFlag(toCurr);
  updateExchangeRate();
});

window.addEventListener("load", updateExchangeRate);
