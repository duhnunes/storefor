const createForm = document.getElementById('createForm');
createForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const cpf = document.getElementById('cpf').value;
    const birthday = document.getElementById('birthday').value;
    const phone = document.getElementById('phone').value;
    const remail = document.getElementById('remail').value;
    const password = document.getElementById('pw').value;

    const data = {
        username,
        cpf,
        birthday,
        phone,
        remail,
        password
    };

    const response = await fetch('../../../js/users.js', {
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(data),
    });

    if(response.ok){
        const userData = await response.json();
        console.log('Usuário Cadastrado' + userData);
    }else{
        console.error('Error ao cadastrar usuário');
    }
})