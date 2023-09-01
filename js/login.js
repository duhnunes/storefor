// CHANGE LOGIN EYES WHEN CLICK
const pw = document.getElementById('pw');
const eye = document.querySelector(".pw-eye");
const icon = document.querySelector('#change');
eye.addEventListener('click', () => {
    if(pw.type == "text"){
        pw.type="password";
        pw.focus();
        if(icon.classList.contains('fa-eye-slash')){
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
        
    }else {
        pw.type="text";
        pw.focus();
        if(icon.classList.contains('fa-eye')){
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');

        }
        
    }
})
icon.classList.add('fa-solid fa-eye-slash');


// VALIDATIONS EMAIL AND PASSWORD
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

// 