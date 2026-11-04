const email = document.querySelector('#input-email');
const form = document.querySelector('#form');
const emailError = document.querySelector('.error-email');
const password = document.querySelector('#input-pass');
const passwordConfirmation = document.querySelector('#input-pass-confirm');

email.addEventListener("input", (e) => {
    showError();
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log('submit button pressed!');
    console.log(email.validity.valid);
})

function showError(){
    if(email.validity.typeMismatch ||
        email.validity.valueMissing
    ){
        emailError.textContent = 'Invalid Email, Mate';
        emailError.className = 'error active';
        console.log('invalid email');
    } else {
        emailError.textContent = "Bonza Email, Mate!";
        emailError.className = 'error';
        console.log('valid email!')
    }
}

function passConfirmError(){
    if(password.value != passwordConfirmation.value){
        console.log('password and confirmation does not match');
    }
    else console.log('passwords match');
}

passwordConfirmation.addEventListener("input", (e) => {
    passConfirmError();
});

password.addEventListener("input", (e) => {
    if(password.validity.valueMissing) console.log('no password entered');
    if(password.validity.tooShort){
        console.log('console validity tooShort triggered');
    } else console.log('password long enough');
})