const form = document.getElementById('form');

const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const email = document.getElementById('email');
const password = document.getElementById('password');

const button = document.getElementsByClassName('btn');


form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  if( firstName.value === '') {
    showError(firstName);
  } else {
    removeError(firstName);
  }

  if (lastName.value === '') {
    showError(lastName);
  } else {
    removeError(lastName) ;
  }

  if (password.value === '') {
    showError(password);
  } else {
    removeError(password);
  }

  if(email.value === '' && validEmail(email.value)) {
    showError(email);
  } else {
    removeError(email);
  }

})

function validEmail (email) {
  let emailRegEx =  /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegEx.test(String(email).toLowerCase());
}

function showError (field) {
  const formElement = field.parentNode;
  formElement.classList.add('error');
}

function removeError(field) {
  const formElement = field.parentNode;
  formElement.classList.remove('error');
}