function validateLogin() {
    var username = document.getElementById('username-signin');
    var password = document.getElementById('password-signin');
    var alertUsername = username.parentElement.querySelector('.alert');
    var alertPassword = password.parentElement.querySelector('.alert');

    var valid = true;

    if (username.value === "") {
        alertUsername.hidden = false;
        alertUsername.innerHTML = " Enter your username";
        valid = false;

    }
    else {
        alertUsername.hidden = true;

    }



    if (password.value === "") {
        alertPassword.hidden = false;
        alertPassword.innerHTML = "Enter Your Password";
        valid = false;
    }
    else {
        alertPassword.hidden = true;

    }
    return valid;

}
function validateUsername() {
    var username = document.getElementById('username-signin');
    var alertUsername = username.parentElement.querySelector('.alert');
    if (username.value === "") {
        alertUsername.hidden = false;
        alertUsername.innerHTML = " Enter your username";

    }
    else {
        alertUsername.hidden = true;

    }
}
function validatePassword() {
    var password = document.getElementById('password-signin');
    var alertPassword = password.parentElement.querySelector('.alert');
    if (password.value === "") {
        alertPassword.hidden = false;
        alertPassword.innerHTML = "Enter Your Password"
    }
    else {
        alertPassword.hidden = true;

    }
}
function resetSignin() {
    var username = document.getElementById('username-signin');
    var password = document.getElementById('password-signin');
    username.value = password.value = "";

}
function checkInformation() {
    var username = document.getElementById('username-signin').value;
    var password = document.getElementById('password-signin').value;
    var invalidSummary = document.getElementById('invalid-summary');

    var user = users.filter(x => x.username === username && x.password === password);

    if (user.length === 0) {
        invalidSummary.innerHTML = "Invalid username or password";
        invalidSummary.hidden = false;

    }
    else {
        invalidSummary.hidden = true;
        isLogin = true;
        userId = user[0].userId;

    }







}

document.getElementById('btn-signIn').addEventListener('click', function () {
    var result = validateLogin();
    if (result) {
        checkInformation();
        if (isLogin) {
            var usernameDisplay = document.getElementById('login_user');
            var navSigninSignUp = document.querySelectorAll('.nav-item__signin-signup');
            var user = users.filter(x => x.userId === userId);
            usernameDisplay.querySelector('.nav-link').innerHTML = user[0].username;
            navSigninSignUp[0].hidden = true;
            navSigninSignUp[1].hidden = true;
            usernameDisplay.hidden = false;

            resetSignin();
            hideSigninSignup();
        }

    }




});

document.getElementById('username-signin').addEventListener('keyup', validateUsername);
document.getElementById('username-signin').addEventListener('focusout ', validateUsername);


document.getElementById('password-signin').addEventListener('keyup', validatePassword);
document.getElementById('password-signin').addEventListener('focusout ', validatePassword);

//


//sign Up
function validateSignup() {
    var username = document.getElementById('username-signup');
    var errorUsername = username.parentElement.querySelector('.alert');
    var UsernameRegx = /^[a-zA-Z][a-zA-Z0-9_]{7,29}$/;
    var validUsername = username.value.match(UsernameRegx);

    var createPassword = document.getElementById('create-password');
    var passwordRegx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    var validPassword = createPassword.value.match(passwordRegx);
    var errorCreatePassword = createPassword.parentElement.querySelector('.alert');


    var confirmPassword = document.getElementById('confirm-password');
    var errorConfirmPassword = confirmPassword.parentElement.querySelector('.alert');

    var valid = true;

    if (username.value === "") {
        errorUsername.hidden = false;
        errorUsername.innerHTML = "Enter Username";
        valid = false;
    }
    else {

        if (validUsername === null) {
            errorUsername.hidden = false;
            errorUsername.innerHTML = "Username not valid";
            valid = false;

        }
        else {
            errorUsername.hidden = true;
        }


    }

    if (createPassword.value === "") {
        errorCreatePassword.hidden = false;
        errorCreatePassword.innerHTML = "Enter password";
        valid = false;
    }
    else {
        if (validPassword === null) {
            errorCreatePassword.hidden = false;
            errorCreatePassword.innerHTML = "Password is not valid"
            valid = false;
        }
        else {
            errorCreatePassword.hidden = true;
        }
    }
    if (confirmPassword.value === '') {
        errorConfirmPassword.hidden = false;
        errorConfirmPassword.innerHTML = "Enter Confirm password";
        valid = false;

    }
    else {
        if (confirmPassword.value !== createPassword.value) {
            errorConfirmPassword.hidden = false;
            errorConfirmPassword.innerHTML = "Password must be matched";
            valid = false;

        }
        else {
            errorConfirmPassword.hidden = true;
        }
    }
    return valid;

}


function validateSignupUsername() {
    var username = document.getElementById('username-signup');
    var errorUsername = username.parentElement.querySelector('.alert');
    var UsernameRegx = /^[a-zA-Z][a-zA-Z0-9_]{7,29}$/;
    var validUsername = username.value.match(UsernameRegx);

    if (username.value === "") {
        errorUsername.hidden = false;
        errorUsername.innerHTML = "Enter Username";
    }
    else {

        if (validUsername === null) {
            errorUsername.hidden = false;
            errorUsername.innerHTML = "Username not valid";
        }
        else {
            errorUsername.hidden = true;
        }


    }
}
function validateSignupCreatePassword() {
    var createPassword = document.getElementById('create-password');
    var passwordRegx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    var validPassword = createPassword.value.match(passwordRegx);
    var errorCreatePassword = createPassword.parentElement.querySelector('.alert');

    if (createPassword.value === "") {
        errorCreatePassword.hidden = false;
        errorCreatePassword.innerHTML = "Enter password"
    }
    else {
        if (validPassword === null) {
            errorCreatePassword.hidden = false;
            errorCreatePassword.innerHTML = "Password is not valid"
        }
        else {
            errorCreatePassword.hidden = true;
        }
    }
}

function validPasswordMatch() {

    var confirmPassword = document.getElementById('confirm-password');
    var errorConfirmPassword = confirmPassword.parentElement.querySelector('.alert');

    if (confirmPassword.value === '') {
        errorConfirmPassword.hidden = false;
        errorConfirmPassword.innerHTML = "Enter Confirm password";
    }
    else {
        if (confirmPassword.value !== createPassword.value) {
            errorConfirmPassword.hidden = false;
            errorConfirmPassword.innerHTML = "Password must be matched";
        }
        else {
            errorConfirmPassword.hidden = true;
        }
    }
}



document.getElementById('username-signup').addEventListener('keyup', validateSignupUsername);
document.getElementById('username-signup').addEventListener('focusout', validateSignupUsername);

document.getElementById('create-password').addEventListener('keyup', validateSignupCreatePassword);
document.getElementById('create-password').addEventListener('focusout', validateSignupCreatePassword);

document.getElementById('confirm-password').addEventListener('focusout', validateSignupCreatePassword);


function resetSignup() {
    var username = document.getElementById('username-signup');
    var createPassword = document.getElementById('create-password');
    var confirmPassword = document.getElementById('confirm-password');
    username.value = createPassword.value = confirmPassword.value = "";

}


function addInformation() {

    var username = document.getElementById('username-signup').value;
    var password = document.getElementById('create-password').value;
    var randomValue = Math.ceil(Math.random() * 1000);

    var user = {
        userId: randomValue.toString(),
        username: username,
        Password: password
    }

    users.push(user);
}

document.getElementById('btn-signUp').addEventListener('click', function () {
    var result = validateSignup();
    if (result) {
        addInformation();
        resetSignup();

        document.querySelector('.pg-signup').setAttribute("hidden", "true");
        routeLoginSignup('pg-signin');
    }
});

document.getElementById('btn-logout').addEventListener('click', function () {
    isLogin = false;
    userId = "";
    var usernameDisplay = document.getElementById('login_user');
    usernameDisplay.innerHTML = "";
    usernameDisplay.hidden = true;
    var navSigninSignUp = document.querySelectorAll('.nav-item__signin-signup');
    navSigninSignUp[0].hidden = false;
    navSigninSignUp[1].hidden = false;
})








