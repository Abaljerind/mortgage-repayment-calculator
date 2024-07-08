document.addEventListener("DOMContentLoaded", function () {
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
  });
});
