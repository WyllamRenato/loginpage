document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('remember-me').checked;
  
    const loginData = { username, password, rememberMe };
  
    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Login successful');
      } else {
        alert(data.message);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });

// script.js

document.addEventListener('DOMContentLoaded', function() {
  const leftCircle = document.querySelector('.left-circle');
  const socialLoginButtons = document.querySelectorAll('.social-login button');

  leftCircle.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');

      // Alterna as classes dos botões do social-login para o modo escuro
      socialLoginButtons.forEach(button => {
          button.classList.toggle('dark-mode');
      });
  });
});
