function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.getElementById('toggle-icon');
    
    // Toggle between password and text
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.src = 'vison.png'; // Change to "eye-slash" icon when password is shown
        toggleIcon.alt = 'Hide Password';
    } else {
        passwordInput.type = 'password';
        toggleIcon.src = 'visoff.png'; // Change back to "eye" icon when password is hidden
        toggleIcon.alt = 'Show Password';
    }
}