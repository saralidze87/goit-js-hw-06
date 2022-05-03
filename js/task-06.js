const inputItem = document.getElementById('validation-input');
const inputValue = Number(inputItem.dataset.length);

let currentInputLength = 0;
inputItem.addEventListener('input', onInput);
inputItem.addEventListener('blur', onBlur);

function onInput(event) {
  currentInputLength = event.currentTarget.value.length;
}

function onBlur(event) {
    inputItem.classList.add('invalid');
  if (currentInputLength === inputValue) {
    inputItem.classList.remove('invalid');
    inputItem.classList.add('valid');
  }
}