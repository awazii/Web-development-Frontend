document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        let valid = true;
        const name = document.getElementById('name').value;
        const nameError = document.getElementById('nameError');
        if (!/^[a-zA-Z\s]+$/.test(name)) {
            nameError.style.display = 'block';
            valid = false;
        } else {
            nameError.style.display = 'none';
        }
        const email = document.getElementById('email').value;
        const emailError = document.getElementById('emailError');
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            emailError.style.display = 'block';
            valid = false;
        } else {
            emailError.style.display = 'none';
        }
        const password = document.getElementById('password').value;
        const passwordError = document.getElementById('passwordError');
        if (password.length < 8) {
            passwordError.style.display = 'block';
            valid = false;
        } else {
            passwordError.style.display = 'none';
        }
        const successMessage = document.getElementById('successMessage');
        if (valid) {
            successMessage.style.display = 'block';
        } else {
            successMessage.style.display = 'none';
        }
    });
});
