let count = 0;

let countDisplay = document.getElementById("count");
let plusButton = document.getElementById("plus");
let minusButton = document.getElementById("minus");

plusButton.addEventListener("click", function() {
    count++;
    countDisplay.textContent = count;
});

minusButton.addEventListener("click", function() {
    if (count > 0) {
        count--;
        countDisplay.textContent = count;
    }
});