document.querySelector('#cadastro').addEventListener('click', (e)=>{
    e.preventDefault();
    let email = document.querySelector('#conta').value;
    let password = document.querySelector('.senhaC').value;

    salvar(email,password);

});

function salvar(e,p) {
   
    let banco = JSON.parse(localStorage.getItem('usuarios') || '[]');

    let usuario = {
        id: banco.length + 1,
        login: e,
        senha:p
    };

    banco.push (usuario);

    localStorage.setItem('usuarios', JSON.stringify(banco));
    location.href = 'login.html'
}