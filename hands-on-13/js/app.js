//pegar o tbody para apresentar na tela
const tbody = document.querySelector('tbody');

// pegar o form - atribuir o escutador para o evento submit - cancelar esse evento - criar a função
// que apresenta as informações na tela

document.querySelector('form').addEventListener('submit', function (e) {
    // cancelar o evento 
    e.preventDefault();

    //recuperar os campos
    const campos = [
        document.querySelector('#usuario'),
        document.querySelector('#email'),
        document.querySelector('#dataCadastro'),
        document.querySelector('#tipoConta')
    ];

    // criar uma TR para escrever no tbody
    const tr = document.createElement('tr');

    // vamos montar um forEach para percorrer o Array e para cada ocorrência , criar uma td e vincular à tr
    campos.forEach((campo) => {

        // criar a td 
        const td = document.createElement('td');

        //inserir o conteúdo dos campos na td
        td.textContent = campo.value;

        //vincule a td na tr
        tr.appendChild(td);
    })

    // vincular a tr criada no tbody
    tbody.appendChild(tr);

    //limpar os dados digitados
    this.reset();
})