let counterValue = 0;
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counterValueRef = document.getElementById('value');

decrementBtn.addEventListener('click', minusOne);
incrementBtn.addEventListener('click', plusOne);

function minusOne() {
  counterValue -= 1;
  counterValueRef.textContent = counterValue;
}

function plusOne() {
  counterValue += 1;
  counterValueRef.textContent = counterValue;
}
