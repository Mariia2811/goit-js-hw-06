const reefInputEl = document.querySelector('#validation-input');

reefInputEl.addEventListener('blur', () => {
    const length = reefInputEl.dataset.length;
    const value = reefInputEl.value;
    if (value.length === Number(length)) {
        reefInputEl.classList.add('valid');
    } else {
        reefInputEl.classList.add('invalid');
    }
})