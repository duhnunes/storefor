// CHANGE LOGIN EYES WHEN CLICK
const pw = document.getElementById('pw');
const eye = document.querySelector(".pw-eye");
const icon = document.querySelector('.pw-eye i');
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

// VALIDATIONS EMAIL AND PASSWORD
