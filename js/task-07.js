const refInputEl = document.querySelector('#font-size-control');
const refTextEl = document.querySelector('#text');

refInputEl.addEventListener('input', () => {
    const fontSize = refInputEl.value;
    refTextEl.style.fontSize = `${fontSize}px`;
})

