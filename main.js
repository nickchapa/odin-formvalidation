const email = document.querySelector('#input-email');
const form = document.querySelector('#form');

email.addEventListener("input", (e) => {
    if(email.validity.typeMismatch){
        email.setCustomValidity("Invalid Email Mate");
        console.log('invalid email');
    } else {
        email.setCustomValidity("");
        console.log('valid email');
    }
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log('submit button pressed!');
    console.log(email.validity.valid);
})