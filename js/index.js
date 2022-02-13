const userNameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const emailValidation = document.querySelector('#emailValidation');
const passwordInput = document.querySelector('#password');
const passwordCheck = document.querySelector('#passwordCheck');
const cPassword = document.querySelector('#cPassword');
const passwordConfirm = document.querySelector('#passwordConfirm');
const submitBtn = document.querySelector('.submitBtn');
const togglePass = document.querySelector('.toggle-password');
const eyeSlash = document.querySelector('.fa-eye-slash');
const eye = document.querySelector('.fa-eye');


emailInput.addEventListener('change', (e) => {
    if (e.target.value.includes('.com')) {
        emailValidation.style.display = 'none';
    }
});

passwordInput.addEventListener('blur', (e) => {
    if (e.target.value.length <= 8) {
        passwordCheck.style.display = 'block';
    } else {
        passwordCheck.style.display = 'none';
    }
});

cPassword.addEventListener('blur', () => {
    if (cPassword.value === passwordInput.value) {
        passwordConfirm.style.display = 'none';
    }if (cPassword.value !== passwordInput.value || cPassword.value === ''){
        console.log(1)
        passwordConfirm.style.display = 'block';
    }
});

function user(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
}

submitBtn.addEventListener('click', (e) => {
    console.log(e.target)
    let newUser = new user(userNameInput.value, emailInput.value, passwordInput.value);
    localStorage.setItem('users', JSON.stringify(newUser));
});

togglePass.addEventListener("click", function () {
    if (passwordInput.type == "text") {
        passwordInput.type = "password";
        eye.style.display = 'inline-block';
        eyeSlash.style.display = 'none';
    } else {
        passwordInput.type = "text";
        eye.style.display = 'none';
        eyeSlash.style.display = 'inline-block';
    }
});