const reefInputEl = document.querySelector('#validation-input');

reefInputEl.addEventListener('blur', () => {
    const length = reefInputEl.dataset.length;
    const value = reefInputEl.value;
    if (value.length === Number(length)) {
        reefInputEl.classList.add('valid');
        reefInputEl.classList.remove('invalid');
    } else {
        reefInputEl.classList.add('invalid');
        reefInputEl.classList.remove('valid');
    }
})