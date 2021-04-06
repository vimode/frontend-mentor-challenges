const form = document.getElementById('form');
const email = document.getElementById('email');
const toastmsg = document.querySelector('.toast-success');

form.addEventListener('submit', validation) 

email.addEventListener('input', activeValidation)

function activeValidation (e) {
  if (email.validity.patternMismatch) {
    form.classList.add('error');
  } else {
    form.classList.remove('error');
  }
}

function validation(e) {
	e.preventDefault();

  if (email.validity.valueMissing) {
    form.classList.add('error') 
  } else {
      toastmsg.classList.add('show');
    setTimeout(function() {
      toastmsg.classList.remove('show');
    },3000)
  }

};
