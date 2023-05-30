const form = document.getElementById("form-agenda");
const Nome = [];
const Telefone = [];

let linhas = '';

form.addEventListener('submit', function(e) {e.preventDefault();

adicionarLinha();
atualizaTabela ();

});

function adicionarLinha () {
    const inputTelefone = document.getElementById('Telefone');
    const inputNome = document.getElementById('Nome');

    if (Nome.includes(inputNome.value)) {
        alert (`nome: ${inputNome.value} ja inserido`)
    }

    else {
        Nome.push (inputNome.value);
        Telefone.push (inputTelefone.value);

        let linha = '<tr>';
        linha += `<td>${inputNome.value} </td>`;
        linha += `<td>${inputTelefone.value} </td>`;
        linha += '<tr>';

        linhas += linha
    }
    
    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizaTabela () {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}