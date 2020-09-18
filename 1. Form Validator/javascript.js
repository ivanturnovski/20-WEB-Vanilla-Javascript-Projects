const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show input error Message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

//Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

//Check email is valid
function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//Event Listeners
form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('submit');
  console.log(username.value);

  if (username.value === '') {
    showError(username, 'Username is required');
  } else if (username.value.length < 2) {
    showError(username, 'Enter correct username');
  } else {
    showSuccess(username);
  }

  if (email.value === '') {
    showError(email, 'Username is required');
  } else if (!isValidEmail(email.value)) {
    showError(email, "Email it's not valid!");
  } else {
    showSuccess(email);
  }

  if (password.value === '') {
    showError(password, 'Username is required');
  } else {
    showSuccess(password);
  }

  if (password2.value === '') {
    showError(password2, 'Username is required');
  } else {
    showSuccess(password2);
  }
});