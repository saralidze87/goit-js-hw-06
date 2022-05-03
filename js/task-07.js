const inputRange = document.getElementById('font-size-control');
inputRange.addEventListener('input', onChangeTextSize);

const spanText = document.getElementById('text');
function onChangeTextSize(event) {
    spanText.style.fontSize = `${event.currentTarget.value}px`;
}