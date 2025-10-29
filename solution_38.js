export default function validate(event) {
    // Reset error messages
    clearErrorMessages();

    // Get form fields
    let code = document.getElementById("code").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("pass").value.trim();
    let passwordConf = document.getElementById("pass_conf").value.trim();

    // Validate Code
    if (code === "" || isNaN(code) || code.length > 15) {
        displayErrorMessage("code_error", "Code must be a number and cannot be empty or exceed 15 characters.");
        return false;
    }

    // Validate Email
    if (!isValidEmail(email)) {
        displayErrorMessage("email_error", "Invalid email format.");
        return false;
    }

    // Validate Password
    if (password.length < 9) {
        displayErrorMessage("password_error", "Password must be at least 9 characters long.");
        return false;
    }

    // Confirm Password
    if (password !== passwordConf) {
        displayErrorMessage("password_error", "Password and confirmation do not match.");
        return false;
    }

    // Form is valid
    return true;
}

// Function to check if the given email has basic characteristics of a standard email
function isValidEmail(email) {
    // This is a simple check, you may want to use a more sophisticated email validation method
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Function to display error messages
function displayErrorMessage(elementId, message) {
    let errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.innerText = message;
    }
}

// Function to clear error messages
function clearErrorMessages() {
    let errorElements = document.querySelectorAll(".error_message");
    errorElements.forEach((element) => {
        element.innerText = "";
    });
}

// Execute code when the window has finished loading
window.onload = function () {
    let form = document.getElementById("mainform");
    if (!form) {
        return;
    }
    form.onsubmit = validate;
};
