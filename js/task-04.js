const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const span = document.getElementById('value');

let counterValue = 0;

const decrement = (e) => {
    counterValue = counterValue - 1;
    span.textContent = counterValue;
};

const increment = (e) => {
    counterValue = counterValue + 1;
    span.textContent = counterValue;
};

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);