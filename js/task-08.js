const form = document.querySelector(".login-form");

form.addEventListener("submit", handlerSubmitForm);

function handlerSubmitForm(e) {
    e.preventDefault();

    const { email, password } = e.currentTarget.elements; 

    if (email.value === "" || password.value === "") {
        alert('Attention! All the fields must be filled');
        return;
    }
    
    const data = {
        email: email.value,
        password: password.value,
    };

    console.log(data);
    e.currentTarget.reset();
}