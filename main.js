const email = document.querySelector('#input-email');
const form = document.querySelector('#form');
const emailError = document.querySelector('.error-email');

email.addEventListener("input", (e) => {
    showError();
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log('submit button pressed!');
    console.log(email.validity.valid);
})

function showError(){
    if(email.validity.typeMismatch){
        emailError.textContent = 'Invalid Email, Mate';
        emailError.className = 'error active';
        console.log('invalid email');
    } else {
        emailError.textContent = "Bonza Email, Mate!";
        emailError.className = 'error';
        console.log('valid email!')
    }
}