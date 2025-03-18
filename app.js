//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Lista para armazenar os nomes dos amigos
const listaNomes = [];

// Exibe um texto dentro de um elemento HTML
function exibirTexto(tag, texto) {
    const campo = document.querySelector(tag);
    if (campo) campo.innerHTML = texto;
}

// Adiciona um nome à lista de amigos
function adicionarAmigo() {
    const inputNome = document.querySelector('input');
    const nome = inputNome.value.trim();

    if (!nome) {
        alert('Erro: Por favor, insira um nome!');
        return;
    }

    listaNomes.push(nome);
    atualizarLista();
    limparCampo();
}

// Atualiza a exibição da lista de amigos na interface
function atualizarLista() {
    const listaElement = document.querySelector('ul');
    listaElement.innerHTML = ''; // Limpa a lista antes de atualizar

    listaNomes.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome;
        listaElement.appendChild(li);
    });
}

// Sorteia um amigo da lista
function sortearAmigo() {
    if (listaNomes.length === 0) {
        alert('Erro: Nenhum nome na lista para sortear.');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * listaNomes.length);
    const nomeSorteado = listaNomes[indiceSorteado];

    exibirTexto('ul', `Seu amigo sorteado é: <strong>${nomeSorteado}</strong>`);
}

// Limpa o campo de input
function limparCampo() {
    const inputNome = document.querySelector('input');
    inputNome.value = '';
}
