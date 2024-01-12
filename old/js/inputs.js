// GLOBAL VARIABLES
const email = document.querySelector('#email');     // login
const pw = document.querySelector('#pw');           // login

const name = document.querySelector('#username');
const cpf = document.querySelector('#cpf');
const birthday = document.querySelector('#birthday');
const phone = document.querySelector('#phone');
const remail = document.querySelector('#remail');
const rpw = document.querySelector('.rpw');
const cpw = document.querySelector('#confirm-password');
const terms = document.querySelector('#terms');


// CHANGE LOGIN EYES WHEN CLICK
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

// MASK INPUT
cpf.addEventListener('input', () => {
    let i = cpf.value.length;
    let str = cpf.value;
    if(isNaN(Number(str.charAt(i-1)))){
        cpf.value = str.substr(0, i-1);
    }
});
cpf.addEventListener('keydown', (e) => {
    if(e.keyCode != 46 && e.keyCode != 8){
        let i = cpf.value.length
        if(i === 3 || i === 7){
            cpf.value = cpf.value + ".";
        } else if(i === 11){
            cpf.value = cpf.value + "-";
        }
    }
});

birthday.addEventListener('input', () => {
    let i = birthday.value.length;
    let str = birthday.value;
    if(isNaN(Number(str.charAt(i-1)))){
        birthday.value = str.substr(0, i-1);
    }
});
birthday.addEventListener('keydown', (e) =>{
    if(e.keyCode != 46 && e.keyCode != 8){
        let i = birthday.value.length;
        if(i === 2 || i === 5){
            birthday.value = birthday.value + "/";
        }
    }
});

phone.addEventListener('input', () => {
    let i = phone.value.length;
    let str = phone.value;
    if(isNaN(Number(str.charAt(i-1)))){
        phone.value = str.substr(0, i-1);
    }
});
phone.addEventListener('keydown', (e) =>{
    if(e.keyCode != 46 && e.keyCode != 8){
        let i = phone.value.length;
        if (i === 0){
            phone.value = phone.value + "(";
        }else if (i === 3){
            phone.value = phone.value + ")";
        }else if (i === 7 || i === 11){
            phone.value = phone.value + "-";
        }
    }
});
