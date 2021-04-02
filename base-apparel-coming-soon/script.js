const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
	e.preventDefault();
  const emailValue = email.value;

  if(!validEmail(emailValue)) {
    form.classList.add('error');
  } else {
    form.classList.remove('error');
  }
});

function validEmail (email) {
  let emailRegEx =  /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegEx.test(String(email).toLowerCase());
}
