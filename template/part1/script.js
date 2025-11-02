// TODO 10: add this script to index.html


const countDisplay = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

let count = 0;

function updateDisplay() {
  countDisplay.textContent = count;
}

// TODO 11: Add click event to increment button
incrementBtn.addEventListener("click", () => {
  
});

// TODO 12: Add click event to decrement button
decrementBtn.addEventListener("click", () => {
  
});

// Click event to reset button
resetBtn.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});