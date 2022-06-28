const form = document.getElementById('form');
const email = document.getElementById('email');
const toastmsg = document.querySelector('.toast-success');

email.addEventListener('input', activeValidation)
form.addEventListener('submit', validation) 

// Actively checks the user input 
function activeValidation(e) {
  if (email.validity.valid) {
    form.classList.remove('error');
  } else {
    validationError();
  }
}

// Check when clicked submit
function validation(e) {
	e.preventDefault();
  if(!email.validity.valid) {
    validationError();
  } else {
    toastmsg.classList.add('show');
      setTimeout(function() {
      toastmsg.classList.remove('show');
    },3000)   
  }
};

// Throws an error if doesn't match the regEx pattern or if its just an empty field
function validationError() {
  if(email.validity.patternMismatch || email.validity.valueMissing) {
    form.classList.add('error')
  } 
}
