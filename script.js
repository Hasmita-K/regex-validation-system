const form = document.getElementById("form");

const email = document.getElementById("email");
const phone = document.getElementById("phone");
const username = document.getElementById("username");
const password = document.getElementById("password");

// Regex patterns
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^(\+91)?[6-9]\d{9}$/;
const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

// Validation functions
function validateField(input, regex, message) {
    const value = input.value.trim();
    const small = input.nextElementSibling;

    if (regex.test(value)) {
        input.classList.add("valid");
        input.classList.remove("invalid");
        small.innerText = "";
        return true;
    } else {
        input.classList.add("invalid");
        input.classList.remove("valid");
        small.innerText = message;
        return false;
    }
}

// Event listeners (real-time validation)
email.addEventListener("input", () => {
    validateField(email, emailRegex, "Invalid email format");
});

phone.addEventListener("input", () => {
    validateField(phone, phoneRegex, "Invalid phone number");
});

username.addEventListener("input", () => {
    validateField(username, usernameRegex, "3-16 chars, letters/numbers/_ only");
});

password.addEventListener("input", () => {
    validateField(password, passwordRegex, "Min 8 chars, upper, lower, number, special char");
});

// Form submit
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const isEmailValid = validateField(email, emailRegex, "Invalid email");
    const isPhoneValid = validateField(phone, phoneRegex, "Invalid phone");
    const isUsernameValid = validateField(username, usernameRegex, "Invalid username");
    const isPasswordValid = validateField(password, passwordRegex, "Invalid password");

    if (isEmailValid && isPhoneValid && isUsernameValid && isPasswordValid) {
        alert("Form submitted successfully!");
    }
});
