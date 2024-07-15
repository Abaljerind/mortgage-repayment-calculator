/* 
TODO::
? yang belum dikerjain:
! 2. mobile, tablet & desktop completed
*/

document.addEventListener("DOMContentLoaded", function () {
  const clear = document.querySelector("button[type=button]");
  const formCalculator = document.getElementById("form-calculator");
  const calculate = document.querySelector("button[type=submit]");
  const amountSpan = document.getElementById("amount-span");
  const amount = document.getElementById("amount");
  const amountInvalid = document.getElementById("amount-invalid");

  const term = document.getElementById("term");
  const termSpan = document.getElementById("term-span");
  const termInvalid = document.getElementById("term-invalid");

  const rate = document.getElementById("rate");
  const rateSpan = document.getElementById("rate-span");
  const rateInvalid = document.getElementById("rate-invalid");

  const repayment = document.getElementById("repayment");
  const interest = document.getElementById("interest");
  const typeInvalid = document.getElementById("type-invalid");

  // showing results
  const zeroResult = document.getElementById("zero-result");
  const results = document.getElementById("results");

  // tag p for result
  const monthlyRepayments = document.getElementById("monthly-repayments");
  const totalRepay = document.getElementById("total-repay");

  // form event
  clear.addEventListener("click", function () {
    formCalculator.reset();

    amountInvalid.classList.add("hidden");
    amountSpan.classList.remove("invalid-span");
    amountSpan.classList.add("valid-span");
    amount.classList.remove("invalid-input");
    amount.classList.add("valid-input");

    termInvalid.classList.add("hidden");
    termSpan.classList.remove("invalid-span");
    termSpan.classList.add("valid-span");
    term.classList.remove("invalid-input");
    term.classList.add("valid-input");

    rateInvalid.classList.add("hidden");
    rateSpan.classList.remove("invalid-span");
    rateSpan.classList.add("valid-span");
    rate.classList.remove("invalid-input");
    rate.classList.add("valid-input");

    typeInvalid.classList.add("hidden");

    zeroResult.classList.remove("hidden");
    results.classList.add("hidden");

    // monthlyRepayments.textContent = "£0.00";
    // totalRepay.textContent = "£0.00";
  });

  //   calculate repayments
  calculate.addEventListener("click", function (e) {
    e.preventDefault();

    if (amount.value.length === 0 || isNaN(amount.value)) {
      amountInvalid.classList.remove("hidden");
      amountSpan.classList.remove("valid-span");
      amountSpan.classList.add("invalid-span");
      amount.classList.remove("valid-input");
      amount.classList.add("invalid-input");
    } else {
      amountInvalid.classList.add("hidden");
      amountSpan.classList.remove("invalid-span");
      amountSpan.classList.add("valid-span");
      amount.classList.remove("invalid-input");
      amount.classList.add("valid-input");
    }

    if (term.value.length === 0 || isNaN(term.value)) {
      termInvalid.classList.remove("hidden");
      termSpan.classList.remove("valid-span");
      termSpan.classList.add("invalid-span");
      term.classList.remove("valid-input");
      term.classList.add("invalid-input");
    } else {
      termInvalid.classList.add("hidden");
      termSpan.classList.remove("invalid-span");
      termSpan.classList.add("valid-span");
      term.classList.remove("invalid-input");
      term.classList.add("valid-input");
    }

    if (rate.value.length === 0 || isNaN(rate.value)) {
      rateInvalid.classList.remove("hidden");
      rateSpan.classList.remove("valid-span");
      rateSpan.classList.add("invalid-span");
      rate.classList.remove("valid-input");
      rate.classList.add("invalid-input");
    } else {
      rateInvalid.classList.add("hidden");
      rateSpan.classList.remove("invalid-span");
      rateSpan.classList.add("valid-span");
      rate.classList.remove("invalid-input");
      rate.classList.add("valid-input");
    }

    if (repayment.checked == true || interest.checked == true) {
      typeInvalid.classList.add("hidden");
    } else {
      typeInvalid.classList.remove("hidden");
    }

    // count and display the results
    zeroResult.classList.add("hidden");
    results.classList.remove("hidden");

    const amountCount = parseFloat(
      document.getElementById("amount").value.replace(/,/g, ""),
    );
    const rateCount =
      parseFloat(document.getElementById("rate").value) / 100 / 12;
    const termCount = parseFloat(document.getElementById("term").value) * 12;
    const mortgageTypeChecked = document.querySelector(
      'input[name="mortgage-type"]:checked',
    ).value;

    let monthRepay;
    if (mortgageTypeChecked === "repayment") {
      monthRepay =
        (amountCount * rateCount * Math.pow(1 + rateCount, termCount)) /
        (Math.pow(1 + rateCount, termCount) - 1);
    } else {
      monthRepay = amountCount * rateCount;
    }

    const yearlyRepayment = monthRepay * 12;
    const totalRepayment = monthRepay * termCount;

    monthlyRepayments.textContent = "£" + formatNumber(monthRepay.toFixed(2));
    totalRepay.textContent = "£" + formatNumber(totalRepayment.toFixed(2));
  });

  function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
});
