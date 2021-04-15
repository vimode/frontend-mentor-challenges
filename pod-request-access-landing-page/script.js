const form = document.getElementById('form');
const email = document.getElementById('email');

const errormsg = document.querySelector('.error-text');

const toastmsg = document.querySelector('.toast-success');

email.addEventListener('input', activeValidation);
form.addEventListener('submit',formValidation);

function activeValidation(e) {
  if(email.validity.valid) {
    form.classList.remove('error');
  } else {
    validationError();
  }
}

// FORM VALID SUBMISSION CHECK
function formValidation(e) {
  e.preventDefault();

  if(!email.validity.valid){
    validationError();
  } else {
    toastmsg.classList.add('show');
    setTimeout(function() {
        toastmsg.classList.remove('show');
    }, 3000)

  }
}

// ERROR MESSAGES
function validationError() {
  if(email.validity.patternMismatch){
    errormsg.textContent = "Oops! Please check your email";
    form.classList.add('error');
  } else  if (email.validity.valueMissing){
    errormsg.textContent = "Oops! Please add your email";
    form.classList.add('error');
  }
}

