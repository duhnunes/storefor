// CHANGE LOGIN EYES WHEN CLICK

const pw = document.getElementById('pw');
const eye = document.querySelector(".pw-eye");
eye.addEventListener('click', () => {
    if(pw.type == "text"){
        pw.type="password";
        pw.focus();
    }else {
        pw.type="text";
        pw.focus();
    }
})

// VALIDATIONS EMAIL AND PASSWORD
const createBallons = () => {
    
}


const email = document.getElementById('email');

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

// PASSWORD NEEDS
