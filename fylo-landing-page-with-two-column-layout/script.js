const formHero = document.querySelector('.form_hero');
const formBottom = document.querySelector('.form_bottom');
const emailHero = document.querySelector('.form_hero #email');
// const emailBottom = document.querySelector('.form_bottom #email');

const errormsg = document.querySelector('.error_text');

const toastmsg = document.querySelector('.toast_success');
// const toastmsgb = document.querySelector('.toast_success_bottom');


emailHero.addEventListener('input', activeValidation);
// emailBottom.addEventListener('input', activeValidation);
formHero.addEventListener('submit',formValidation);
formBottom.addEventListener('submit', formValidation);

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

