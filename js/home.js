const form = document.querySelector('#informação');
const tabela = document.querySelector('#tbody');
let idx = form.idx.value;


// LocalStorage e CD (conteudo)
    const salvandoLS = (conteudo) => {localStorage.setItem('conteudo', JSON.stringify(conteudo))};

    const recuperarLS = () => JSON.parse(localStorage.getItem('conteudo')||'[]') ;

    const salvarConteudo = (e) => {

        e.preventDefault();

        const description = form.description.value;
        const details = form.details.value;

        if(idx == 'new') {
            const conteudo = recuperarLS();
            conteudo.push({id:conteudo.length + 1, description,details});
            salvandoLS(conteudo);
            preencherTB();
            form.reset();
        } else {
            let conteudos = {id: idx,description,details}
            atualizarCD(idx,conteudos);
            preencherTB();
            form.reset();
            idx = 'new';

        };

        
    };

// Tabela
    const preencherTB = () => {
        const conteudo = recuperarLS();
        tabela.innerHTML ='';

        for(const valor of conteudo) {
            tabela.innerHTML +=`
            
                <tr> 
                    <th scope="row"> ${valor.id}</th>
                    <td>${valor.description}</td>
                    <td>${valor.details}</td>
                    <td>
                        <button  onclick = "removerCD(${valor.id})">Deletar</button>
                        <button  onclick = "editarCD(${valor.id})">Editar</button>
                    </td>
                </tr>
                
            `
        };
    }

    const removerCD = (id) => {

        const conteudo = recuperarLS();
        const indexCD = conteudo.findIndex((valor) => valor.id === id);
        if (indexCD < 0 ) return;
        conteudo.splice(indexCD, 1);
        salvandoLS(conteudo);
        alert("Recado Removido")
        preencherTB();

    }

    const editarCD = (id) => {

        const conteudo = recuperarLS();
        const indexCD = conteudo.findIndex((valor) => valor.id === id);
        form.description.value = conteudo [indexCD].description;
        form.details.value = conteudo[indexCD].details;
        idx = id;

    }

    const atualizarCD=(id,conteudos) => {

        const conteudo = recuperarLS();
        const indexCD = conteudo.findIndex((valor) => valor.id === id);
        conteudo[indexCD] = conteudos;
        salvandoLS(conteudo)

    }

    form.addEventListener('submit', salvarConteudo);
    document.addEventListener('DOMContentLoaded', preencherTB);



let usuario = Number (sessionStorage.getItem('logado'));

const session = localStorage.getItem("session");

    checkLogin ();

    function checkLogin(){

        if (session) { 

            sessionStorage.getItem("logi", session);
            usuario = session;

        }

        if (!usuario) {

            window.location.href = "login.html"
            return;
        };
    };

let sair = document.querySelector("#sair");

    sair.addEventListener('click', function() {

        saindo();
    });

    function saindo(){

        sessionStorage.removeItem("logado");
        localStorage.removeItem("session");

        location.href = "login.html";
    };