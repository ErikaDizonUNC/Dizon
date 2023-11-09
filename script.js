const registrationForm = document.getElementById('registrationForm');

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();


  
const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Send registration data to server using AJAX
  fetch('/register.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      // Registration successful, show verification message
      registrationForm.style.display = 'none';
      const verificationContainer = document.querySelector('.container.verification');
      verificationContainer.style.display = 'block';
    } else {
      // Registration error, display error message
      alert(data.error);
    }
  });
});