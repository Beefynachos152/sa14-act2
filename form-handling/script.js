const registrationForm = document.getElementById('registrationForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

registrationForm.addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    clearErrors();
    let isValid = true;

    // Validate username
    if (usernameInput.value.trim() === '') {
        usernameError.textContent = 'Username is required';
        isValid = false;
    } else if (usernameInput.value.length < 6) {
        usernameError.textContent = 'Username must be at least 6 characters';
        isValid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email is required';
        isValid = false;
    } else if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Invalid email format';
        isValid = false;
    }

    // Validate password
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (passwordInput.value.trim() === '') {
        passwordError.textContent = 'Password is required';
        isValid = false;
    } else if (!passwordPattern.test(passwordInput.value)) {
        passwordError.textContent = 'Password must be at least 8 characters long and contain at least one capital letter and one number';
        isValid = false;
    }

    if (isValid) {
        alert('Registration successful!');
        registrationForm.reset();
    }
}

function clearErrors() {
    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
}