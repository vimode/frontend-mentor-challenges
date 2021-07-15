const billInput = document.querySelector('#bill_amount');
const numPeople = document.querySelector('#totalPeople');
const otherTip = document.querySelector('.btn_custom');

const tipAmount = document.querySelector("#finalAmount");
const finalAmount = document.querySelector("#totalAmount");

const resetBtn = document.querySelector('.btn_reset');

// update the views
function updateNumbers(tip, split) {
  if (tip == Infinity || split == Infinity || isNaN(tip) || isNaN(split)) {
    tipAmount.innerText = "$0.00";
    finalAmount.innerText = "$0.00";
  } else {
    tipAmount.innerText = `${tip.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maxmimumFractionDigits: 2
    })}`;
    finalAmount.innerText = `${split.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    })}`;

    tipAmount.animate([
      { color: 'var(--clr-neutral-other)' },
      { color: 'var(--clr-primary-highlight)' }
    ], 1500)

    finalAmount.animate([
      { color: 'var(--clr-neutral-other)' },
      { color: 'var(--clr-primary-highlight)' }
    ], 1500)

    resetBtn.removeAttribute("disabled");
  }
}

// Listen to tip inputs
const allTipBtns = document.querySelector(".tip_option_buttons");

let tipBtnSelection = "";
allTipBtns.addEventListener('click', (e) => {
  let selectedOption = e.target;

  if (tipBtnSelection) {
    tipBtnSelection.classList.remove('selectedOption');
  }
  tipBtnSelection = selectedOption
  selectedOption.classList.add('selectedOption');

  if (selectedOption.type == "button") {
    tipCalc(+billInput.value, +selectedOption.value);
    otherTip.value = otherTip.defaultValue;
  } else {
    customTip(+selectedOption.value);
  }
})

// custom tip button
function customTip(customValue) {
  let convertedCustomTip = customValue / 100;
  tipCalc(+billInput.value, convertedCustomTip)
}

otherTip.addEventListener('input', () => {
  if (+billInput.value) {
    customTip(+otherTip.value);
  }
})

// Listen to input values
billInput.addEventListener('input', () => {
  numValidation(billInput)
})

// people
numPeople.addEventListener('input', () => {
  numPeople.parentElement.classList.remove('show');
  numValidation(numPeople)
})

// calculate tip
function tipCalc(billAmount, selectedTip) {
  let tipAmt = (billAmount * selectedTip);
  let totalBill = tipAmt + billAmount;
  let billSplit = totalBill / (+numPeople.value);
  let tipSplit = tipAmt / (+numPeople.value)
  updateNumbers(tipSplit, billSplit);
}

// number validation
function numValidation(inputNum) {
  if (inputNum.value < 0) {
    inputNum.value = inputNum.defaultValue;
  } else if (inputNum.value == 0) {
    inputNum.parentElement.classList.add('show');
  } else if (inputNum.value) {
    if (billInput.value && tipBtnSelection.type == "button") {
      tipCalc(+billInput.value, +tipBtnSelection.value);
    } else if (billInput.value && otherTip.value) {
      customTip(+otherTip.value)
    }
  }
}

// reset button
resetBtn.addEventListener('click', reset);
function reset() {
  if (!resetBtn.hasAttribute('disabled')) {
    billInput.value = billInput.defaultValue;
    numPeople.value = numPeople.defaultValue;
    otherTip.value = otherTip.defaultValue;
    tipBtnSelection.classList.remove('selectedOption');
    tipAmount.innerText = "$0.00";
    finalAmount.innerText = "$0.00";
    resetBtn.setAttribute("disabled", true);
  }
}