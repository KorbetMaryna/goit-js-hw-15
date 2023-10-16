const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', (e) => {
    const inputValue = e.target.value;
    nameOutput.textContent = inputValue || "Anonymous";
});


