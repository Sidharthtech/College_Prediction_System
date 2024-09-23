const loginForm = document.getElementById('login-form');
const loginFeedbackMessage = document.getElementById('login-feedback-message');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'user' && password === 'pass') {
        window.location.href = 'marks.html';
    } else {
        loginFeedbackMessage.textContent = 'Invalid username or password!';
        loginFeedbackMessage.style.color = 'red';
    }
});
