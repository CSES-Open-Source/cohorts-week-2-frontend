// TODO 10: add this script to index.html

// TODO 11: make variables for each of the buttons and displays, the first is done for you
const countDisplay = document.getElementById("count");
const incrementBtn = document.getElementById("INSERT CORRECT ID HERE");
const decrementBtn =  // INSERT CORRECT FUNCTION HERE
// CREATE A NEW resetBtn const here

let count = 0;

function updateDisplay() {
  countDisplay.textContent = count;
}

// TODO 11: Add click event to increment button
incrementBtn.addEventListener("click", () => {});

// TODO 12: Add click event to decrement button
decrementBtn.addEventListener("click", () => {});

// Click event to reset button
resetBtn.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});
