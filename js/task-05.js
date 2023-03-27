const refInputEl = document.querySelector('#name-input');
const refSpanEl = document.querySelector('#name-output');

refInputEl.addEventListener('input', (event) => {
    if (refInputEl.value) {
        refSpanEl.textContent = event.currentTarget.value;
    } else {
        refSpanEl.textContent = 'Anonymous';
    }
})