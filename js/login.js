document.querySelector('#botaoL').addEventListener('click', (e)=>{

    e.preventDefault();
    entrar();

});

function entrar(){

    let usuario = document.querySelector(".login");
    let senha = document.querySelector(".senha");

    let userLista = [];

    let userValido = {
        login: "",
        senha: ""

    };

    userLista = JSON.parse(localStorage.getItem('usuarios'));

    userLista.forEach( item => {

        if (usuario.value === item.login && senha.value === item.senha) {

            userValido = {
                id: item.id,
                login: item.login,
                senha : item.senha
            }
        }

    })

    if (usuario.value === userValido.login && senha.value){

        alert("Bem Vindo!");
        saveSession(userValido.id);
        location.href='home.html';

    } else{
        alert('Senha ou E-mail incorretos')
    }
}

function saveSession(data){
    if(saveSession){
        localStorage.setItem("session",data);
    }

    sessionStorage.setItem("logado",JSON.stringify(data));
}