// form

const bill = document.querySelector(".bill");
const people = document.querySelector(".people");
const billLabel = document.querySelector(".bill-label");
const peopleLabel = document.querySelector(".people-label");

bill.addEventListener("focus", () => {
  billLabel.setAttribute(
    "style",
    "transform: translateY(-100%); transition: 0.3s ease-out; color: #6c41d6"
  );
});

bill.addEventListener("focusout", () => {
  if (bill.value.length == 0) {
    billLabel.setAttribute(
      "style",
      "transform: translateY(0%); transition: 0.3s ease-out"
    );
  } else {
    billLabel.setAttribute(
      "style",
      "transform: translateY(-100%); transition: 0.3s ease-out; color: #6c41d6"
    );
  }
});

people.addEventListener("focus", () => {
  peopleLabel.setAttribute(
    "style",
    "transform: translateY(-100%); transition: 0.3s ease-out; color: #6c41d6"
  );
});

people.addEventListener("focusout", () => {
  if (people.value.length == 0) {
    peopleLabel.setAttribute(
      "style",
      "transform: translateY(0%); transition: 0.3s ease-out"
    );
  } else {
    peopleLabel.setAttribute(
      "style",
      "transform: translateY(-100%); transition: 0.3s ease-out; color: #6c41d6"
    );
  }
});

function tipCalculator() {
  const bill = document.querySelector(".bill");
  const people = document.querySelector(".people");
  const quality = document.querySelector(".qualities");
  const calculate = document.querySelector("#submit");
  const qualityOptions = document.querySelectorAll(".qualities option");

  calculate.addEventListener("click", calculateTip);

  function calculateTip(event) {
    event.preventDefault();
    const billNumber = Number(bill.value);
    const peopleNumber = Number(people.value);
    const qualityPercent = Number(
      quality.options[quality.selectedIndex].dataset.percent
    );
    const putAmount = document.querySelector(".amount");
    let tipAmount = (billNumber * (qualityPercent / 100)) / peopleNumber;
    const fixedTipAmount = tipAmount.toFixed(2);

    putAmount.innerHTML = "";
    putAmount.innerHTML = `<h4>Tip Amount</h4><br><span>${fixedTipAmount}</span><br><h6>For Each</h6>`;
  }
}

tipCalculator();
