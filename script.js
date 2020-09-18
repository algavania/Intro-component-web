var form = document.forms[0];
var fname = form.elements["fname"];
var lname = form.elements["lname"];
var email = form.elements["email"];
var password = form.elements["password"];
var errorMsg = document.getElementsByClassName("error-msg");
var btnClaim = document.getElementById('trial-box');
var imgError = document.getElementsByClassName('img-error');
var isError;
var windowMatch = window.matchMedia('(min-width: 1200px)');

function trialClick() {
    if (fname.value === '') {
        isError = true;
        fname.style.border = "2px solid red";
        errorMsg['fname'].style.display = 'block';
        imgError[0].style.display = 'block';
    } else {
        isError = false;
        fname.style.border = "1px solid lightgray";
        errorMsg['fname'].style.display = 'none';
    }

    if (lname.value === '') {
        isError = true;
        lname.style.border = "2px solid red";
        errorMsg['lname'].style.display = 'block';
        if (fname.value != '') {
            imgError[1].style.marginTop = '0';
        }
        imgError[1].style.display = 'block';
    } else {
        isError = false;
        fname.style.border = "1px solid lightgray";
        errorMsg['lname'].style.display = 'none';
    }

    if (email.value === '' || !validateEmail(email.value)) {
        isError = true;
        if (!validateEmail(email.value)) {
            errorMsg['email'].innerHTML = 'Looks like this is not an email';
            errorMsg['email'].style.display = 'block';
        } else {
            errorMsg['email'].style.display = 'none';
        }
        if (lname.value != '') {
            imgError[2].style.marginTop = '0';
        }
        imgError[2].style.display = 'block';
        email.style.border = "2px solid red";
    } else {
        isError = false;
        fname.style.border = "1px solid lightgray";
        errorMsg['email'].style.display = 'none';
    }

    if (password.value === '' || password.value.length < 6) {
        isError = true;
        if (password.value != '' && password.value.length < 6) {
            errorMsg['password'].innerHTML = 'Password must be at least 6 characters'
        }
        if (validateEmail(email.value)) {
            imgError[3].style.marginTop = '0';
        }
        errorMsg['password'].style.display = 'block';
        if (windowMatch.matches) {
            btnClaim.style.margin = '40px 50px 10px 50px'
        } else {
            btnClaim.style.margin = '40px 35px 10px 35px'
        }
        password.style.border = "2px solid red";
        imgError[3].style.display = 'block';
    } else {
        isError = false;
        fname.style.border = "1px solid lightgray";
        errorMsg['password'].style.display = 'none';
    }

    if (fname.value != '' && lname.value != '' && validateEmail(email.value) && password.value.length >= 6) {
        if (windowMatch.matches) {
            btnClaim.style.margin = '20px 50px 10px 50px'
        } else {
            btnClaim.style.margin = '20px 35px 10px 35px'
        }
        fname.style.border = "1px solid lightgray";
        lname.style.border = "1px solid lightgray";
        email.style.border = "1px solid lightgray";
        password.style.border = "1px solid lightgray";
        alert('Success');
    }
}

function checkError(index) {
    if (windowMatch.matches) {
        btnClaim.style.margin = '20px 50px 10px 50px'
    } else {
        btnClaim.style.margin = '20px 35px 10px 35px'
    }    for (let index = 0; index < imgError.length; index++) {
        errorMsg[index].style.display = 'none';
        imgError[index].style.display = 'none';
    }
    fname.style.border = "1px solid lightgray";
    lname.style.border = "1px solid lightgray";
    email.style.border = "1px solid lightgray";
    password.style.border = "1px solid lightgray";
    form.elements[index].style.border = "1px solid black";

}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}