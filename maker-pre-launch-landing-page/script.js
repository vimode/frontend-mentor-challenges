const form = document.querySelector('.cta_form');
const ctaEmail = document.querySelector('.cta_form #userEmail');

const errormsg = document.querySelector('.error_text');
const toastmsg = document.querySelector('.toast_success');

ctaEmail.addEventListener('input', activeValidation);
form.addEventListener('submit',formValidation);

function activeValidation(e) {
  if(userEmail.validity.valid) {
    form.classList.remove('error');
  } else {
    validationError();
  }
}

// FORM VALID SUBMISSION CHECK
function formValidation(e) {
  e.preventDefault();

  if(!userEmail.validity.valid){
    validationError();
  } else {
    console.log(toastmsg)
    toastmsg.classList.add('show');
    setTimeout(function() {
        toastmsg.classList.remove('show');
    }, 3000)

  }
}

// ERROR MESSAGES
function validationError() {
  if(userEmail.validity.patternMismatch){
    errormsg.textContent = "Oops! That doesn’t look like an email address";
    form.classList.add('error');
  } else  if (userEmail.validity.valueMissing){
    errormsg.textContent = "Oops! Please add your email";
    form.classList.add('error');
  }
}

