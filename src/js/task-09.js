function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const elBody = document.querySelector('body');
const elBtn = document.querySelector('.change-color');
const colorName = document.querySelector('.color');

elBtn.addEventListener('click', onChangeColor);

function onChangeColor(event) {
  const generatedColor = getRandomHexColor();
  elBody.style.backgroundColor = generatedColor;
  colorName.textContent = generatedColor;
}