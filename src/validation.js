// Validation utilities
function validateEmail(email) {
    return email.includes('@');
}

module.exports = { validateEmail };
function validatePassword(password) {
    return password.length >= 8;

function sanitizeInput(input) {
    return input.replace(/[<>]/g, '');  // защита от XSS


