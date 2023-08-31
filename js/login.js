// CHANGE LOGIN EYES WHEN CLICK

const pw = document.getElementById('pw');
const eye = document.querySelector(".pw-eye");
eye.addEventListener('click', () => {
    if(pw.type == "text"){
        pw.type="password";
    }else {
        pw.type="text";
    }
})

// VALIDATION EMAIL AND PASSWORD
const email = document.getElementById('email');
const password = document.getElementById('pw');

const enter = document.querySelector('.btn-login');
enter.addEventListener('click', () => {
    if(email.value == ""){
        email.focus();
        email.style.outline = "1px solid red";
        alert('Digite seu email!');
    }else if(pw.value == ""){
        pw.focus();
        pw.style.outline = "1px solid red";
        alert('Digite sua senha!');
    }
})

