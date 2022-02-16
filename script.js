function productUpdate(product, price, isIncreasing) {
  const productInput = document.getElementById(product + "-number");
  let productNumber = productInput.value;
  if (isIncreasing) {
    productNumber = parseInt(productNumber) + 1;
  } else if (productInput.value > 0) {
    productNumber = parseInt(productNumber) - 1;
  }
  productInput.value = productNumber;

  const productPrice = document.getElementById(product + "-price");
  productPrice.innerText = productNumber * price;
  calculateTotal();
}

function getInputValue(product) {
  const productInput = document.getElementById(product + "-number");
  const productNumber = parseInt(productInput.value);
  return productNumber;
}

function calculateTotal() {
  const phoneTotal = getInputValue("phone") * 1240;
  const caseTotal = getInputValue("case") * 59;
  const subTotal = phoneTotal + caseTotal;
  const tax = subTotal / 10;
  const totalPrice = subTotal + tax;
  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("tax-amount").innerText = tax;
  document.getElementById("total-price").innerText = totalPrice;
}
function removeSection(inputId) {
  document.getElementById(inputId).style.display = "none";
}
document
  .getElementById("phone-plus-btn")
  .addEventListener("click", function () {
    productUpdate("phone", 1240, true);
  });
document
  .getElementById("phone-minus-btn")
  .addEventListener("click", function () {
    productUpdate("phone", 1240, false);
  });
document.getElementById("case-plus-btn").addEventListener("click", function () {
  productUpdate("case", 59, true);
});
document
  .getElementById("case-minus-btn")
  .addEventListener("click", function () {
    productUpdate("case", 59, false);
  });
document.getElementById("first-btn").addEventListener("click", function () {
  removeSection("first");
});
document.getElementById("second-btn").addEventListener("click", function () {
  removeSection("second");
});
