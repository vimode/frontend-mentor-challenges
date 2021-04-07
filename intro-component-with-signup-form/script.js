const form = document.getElementById('form');
const input = document.querySelectorAll('input');
const btn = document.querySelector('.btn');

const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const email = document.getElementById('email');
const password = document.getElementById('password');

const toastmsg = document.querySelector('.toast-success');



email.addEventListener('input', emailValidation)

// This function is just check for the regEx pattern for valid email, the regEx pattern is part of the form markup. It does actively as the user types so removes error as soon as it passes the regEx pattern.
function emailValidation (e) {
  if (email.validity.patternMismatch) {
    email.parentElement.classList.add('error');
  } else {
    email.parentElement.classList.remove('error');
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault(); 

  input.forEach((item) => {
      if(item.validity.valueMissing) {
          item.parentElement.classList.add('error');
        } else {
          if (item.name === "email") {
            if (!email.validity.patternMismatch) {
              item.parentElement.classList.add('error');
            }
          }
          item.parentElement.classList.remove('error');
          toastmsg.classList.add('show');
          setTimeout(function() {
            toastmsg.classList.remove('show');
          },3000)
        }
  })
});
    
