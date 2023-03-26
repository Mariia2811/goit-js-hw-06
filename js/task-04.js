let counterValue = 0;

const refButtonDecr = document.querySelector('[data-action="decrement"]');
const refButtonIncr = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');

refButtonDecr.addEventListener("click", () => {
    counterValue -= 1;
    value.textContent = counterValue;
});

refButtonIncr.addEventListener("click", () => {
    counterValue += 1;
    value.textContent = counterValue;
});