
const nameError = document.getElementById('name-error');
const phoneError = document.getElementById('phone-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const submitBtn = document.getElementById('submitBtn');
const submitError = document.getElementById('submit-error');

const fullName = document.getElementById('full_name');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const message = document.getElementById('comment');


const nameRegex = /^[A-Za-z]+\s[A-Za-z]+$/;
const phoneRegex = /^[0-9]{10}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function nameValidator() {
    const value = fullName.value;

    if (value === "") {
        nameError.innerHTML = "Name is required";
        return false;

    } else if (!nameRegex.test(value)) {
        nameError.innerHTML = "Write full name (First Last)";
        return false;

    } else {
        nameError.innerHTML = "<i class='fa-solid fa-circle-check'></i>";
        return true;
    }
}

function phoneValidator() {
    const value = phone.value;

    if (value === "") {
        phoneError.innerHTML = "Phone is required";
        return false;

    } else if (!phoneRegex.test(value)) {
        phoneError.innerHTML = "Phone must be 10 digits";
        return false;

    } else {
        phoneError.innerHTML = "<i class='fa-solid fa-circle-check'></i>";
        return true;
    }
}

function emailValidator() {
    const value = email.value;

    if (value === "") {
        emailError.innerHTML = "Email is required";
        return false;

    } else if (!emailRegex.test(value)) {
        emailError.innerHTML = "Invalid email format";
        return false;

    } else {
        emailError.innerHTML = "<i class='fa-solid fa-circle-check'></i>";
        return true;
    }
}

function messageValidator() {
    const value = message.value;
    const required = 30;
    const left = required - value.length;

    if (value === "") {
        messageError.innerHTML = "Message is required";
        return false;

    } else if (value.length < required) {
        messageError.innerHTML = left + " characters remaining";
        return false;

    } else {
        messageError.innerHTML = "<i class='fa-solid fa-circle-check'></i>";
        return true;
    }
}

fullName.addEventListener('input', nameValidator);
phone.addEventListener('input', phoneValidator);
email.addEventListener('input', emailValidator);
message.addEventListener('input', messageValidator);

function submitValidation() {
    

    if (
        !nameValidator() ||
        !phoneValidator() ||
        !emailValidator() ||
        !messageValidator()
    ) {
    submitError.innerHTML = "Form not submitted. Please fix errors before submitting";
        setTimeout(function () {
            submitError.innerHTML = "";
    }, 3000);
            // return false;
    }
            return true;
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    submitValidation();
})