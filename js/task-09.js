const refButtonEl = document.querySelector('.change-color');
const refBodyEl = document.querySelector('body');
const refSpanEl = document.querySelector('.color');

refButtonEl.addEventListener('click', () => {
  const randomColor = getRandomHexColor();

  refBodyEl.style.backgroundColor = randomColor;
  refSpanEl.textContent = randomColor;
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


