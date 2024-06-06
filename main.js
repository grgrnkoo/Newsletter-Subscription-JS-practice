import { checkEmail } from './validation.js'

const form = document.querySelector('form');
const emailField = form.querySelector('input');
const errorMessage = form.querySelector('label span');
const signForm = document.querySelector('.signform');
const successMessage = document.querySelector('.successmessage');
const dismissButton = successMessage.querySelector('button');

function getEmail(e) {
    const currentEmail = e.target.querySelector('input');
    console.log(currentEmail.value.toLowerCase());
    return currentEmail.value.toLowerCase();
}

function handleSubmit(e) {
    e.preventDefault();

    const currentEmail = getEmail(e);

    if(checkEmail(currentEmail)) {
        const mailLink = successMessage.querySelector('span.email');
        const newHeight = signForm.offsetHeight;
        signForm.classList.replace('active', 'hidden');
        setTimeout(() => {
            successMessage.classList.replace('hidden', 'active');
        }, 200);

        mailLink.textContent = currentEmail;
        emailField.value = '';
    } else {
        emailField.classList.replace('noerror', 'error');
        errorMessage.classList.replace('noerror', 'error');
    }

    
}

form.addEventListener('submit', handleSubmit);

emailField.addEventListener('keydown', (event) => {
    if (emailField.classList.contains('error')) {
        emailField.classList.replace('error', 'noerror');
        errorMessage.classList.replace('error', 'noerror');
        if (event.key === 'Backspace') {
            emailField.value = '';
        };
    };
});

dismissButton.addEventListener('click', () => {
    successMessage.classList.replace('active', 'hidden');
    setTimeout(() => {
        signForm.classList.replace('hidden', 'active');
    }, 200);
})

