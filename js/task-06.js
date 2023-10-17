const input = document.querySelector(`#validation-input`);
const dataLength = Number(input.getAttribute("data-length"));

input.addEventListener("blur", handlerInput);

function handlerInput(e) {
    const inputLength = e.currentTarget.value.length;

    if (dataLength === inputLength) {
        e.currentTarget.classList.remove('invalid');
        e.currentTarget.classList.add('valid');
    }
    else {
        e.currentTarget.classList.remove('valid');
        e.currentTarget.classList.add('invalid');
    }
}



