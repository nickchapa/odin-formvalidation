const email = document.querySelector('#input-email');
const form = document.querySelector('#form');
const emailError = document.querySelector('.email.error');
const countryInput = document.querySelector('#input-country');
const countryErrorSpan = document.querySelector('.country.error');
const password = document.querySelector('#input-pass');
const passwordConfirmation = document.querySelector('#input-pass-confirm');
const passErrorSpan = document.querySelector('.pass.error');
const passConfirmErrorSpan = document.querySelector('.pass-confirm.error');
const postalInput = document.querySelector('#input-postal-code');
const postalErrorSpan = document.querySelector('.postal.error');
const submitBtnSpan = document.querySelector('.submit-btn-span');

email.addEventListener("input", (e) => {
    showError();
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(!email.validity.valid){
        showError();
    }
    if(!countryInput.validity.valid){
        showCountryError();
    }
    if(!postalInput.validity.valid){
        showPostalCodeError();
    }
    if(!password.validity.valid){
        showPassError();
    }
    if(!passwordConfirmation.validity.valid){
        showPassConfirmError();
    }
})

function showError(){
    if(email.validity.typeMismatch ||
        email.validity.valueMissing
    ){
        emailError.textContent = 'Invalid Email, Mate';
        emailError.className = 'email error active';
        console.log('invalid email');
    } else {
        emailError.textContent = "Bonza Email, Mate!";
        emailError.className = 'email error';
        console.log('valid email!')
    }
}

function showPassConfirmError(){
    passwordConfirmation.pattern = password.value;
    console.log(password.validity.valid);

    if(passwordConfirmation.validity.patternMismatch){
        passConfirmErrorSpan.textContent = 'Does not match password.';
        passConfirmErrorSpan.className = 'pass-confirm error active';
    }
    else if(!password.validity.valid){
        passConfirmErrorSpan.textContent = 'Enter valid password before confirming.';
        passConfirmErrorSpan.className = 'pass-confirm error active';
    }
    else {
        passConfirmErrorSpan.textContent = 'Matchy matchy!';
        passConfirmErrorSpan.className = 'pass-confirm error';
    }
}

passwordConfirmation.addEventListener("input", (e) => {
    showPassConfirmError();
});

password.addEventListener("input", (e) => {
    showPassError();
})

function showPassError(){
    if(password.validity.valueMissing) {
        passErrorSpan.textContent = 'Please enter a password.';
        passErrorSpan.className = 'pass error active';
    }
    else if(password.validity.tooShort){
        passErrorSpan.textContent = 'Password is too short.';
        passErrorSpan.className = 'pass error active';
    } else {
        passErrorSpan.textContent = 'All good!';
        passErrorSpan.className = 'pass error';
    }

    if(passwordConfirmation.value && password.value != passwordConfirmation.value){
        passConfirmErrorSpan.textContent = "Password confirmation doesn't match.";
        passConfirmErrorSpan.className = 'pass-confirm error active';
    }
}

postalInput.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D/g, '')

    if(postalInput.value){
        postalErrorSpan.className = 'postal error';
        postalErrorSpan.textContent = '';
    }
});

countryInput.addEventListener('input', (e) => {
    if(countryInput.value){
        countryErrorSpan.className = 'country error';
        countryErrorSpan.textContent = '';
    }
})

function showPostalCodeError(){
    if(postalInput.validity.valueMissing){
        postalErrorSpan.className = 'postal error active';
        postalErrorSpan.textContent = 'Please input a valid Postal Code.'
    } else {
        postalErrorSpan.className = 'postal error';
    }
}

function showCountryError(){
    if(countryInput.validity.valueMissing){
        countryErrorSpan.className = 'country error active';
        countryErrorSpan.textContent = 'Please input a country.';
    } else {
        countryErrorSpan.className = 'country error';
    }
}