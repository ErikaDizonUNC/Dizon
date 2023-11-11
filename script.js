// script.js
function login() {
  // Your login logic here
  alert('Login logic to be implemented.');
}

function showRegistrationForm() {
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('registrationForm').style.display = 'block';
}

function register() {
  var regUsername = document.getElementById('regUsername').value;
  var regEmail = document.getElementById('regEmail').value;
  var regPassword = document.getElementById('regPassword').value;

  // Simple validation, replace this with actual registration logic
  if (regUsername && regEmail && regPassword) {
      alert('Registration successful! Check your email for verification.');
      // Redirect to another page or perform other actions as needed
  } else {
      alert('Please fill in all fields.');
  }
}
