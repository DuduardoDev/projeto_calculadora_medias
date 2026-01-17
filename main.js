const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class= "resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class= "resultado reprovado">Reprovado</span>';

let notaMinima;

do {
    notaMinima = parseFloat(prompt("Digite a nota mínima:"));
} while (isNaN(notaMinima) || notaMinima < 1);


let linhas = '';

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-atividade');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        adicionaLinha();
        atualizaTabela();
        atualizaMediaFinal();
    });
});

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade ${inputNomeAtividade.value} ja foi inserida`);
    } else {

    const nota = parseFloat(inputNotaAtividade.value);

    atividades.push(inputNomeAtividade.value);
    notas.push(nota);

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${nota}</td>`;
    linha += `<td>${nota >= notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';

    linhas += linha;
    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela() {
    document.querySelector('tbody').innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();
4
    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(1);
    document.getElementById('media-final-resultado').innerHTML =
        mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}
