let livros = [];

function carregarLivros() {
    fetch('livros.json')
        .then(response => response.json())
        .then(data => {
            livros = data;
            listarLivros();
        })
        .catch(error => console.error('Erro ao carregar livros:', error));
}

function listarLivros() {
    const lista = document.getElementById('livros');
    lista.innerHTML = '';
    livros.forEach((livro, index) => {
        const item = document.createElement('li');
        item.textContent = `${livro.titulo} - ${livro.autor} (${livro.genero}, ${livro.ano}) Avaliação: ${livro.avaliacao}`;
        lista.appendChild(item);
    });
}

function adicionarLivro() {
    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    const genero = document.getElementById('genero').value;
    const ano = document.getElementById('ano').value;
    const avaliacao = document.getElementById('avaliacao').value;

    if (titulo && autor && genero && ano && avaliacao) {
        const novoLivro = { titulo, autor, genero, ano: parseInt(ano), avaliacao: parseInt(avaliacao) };
        livros.push(novoLivro);
        listarLivros();
        salvarLivros();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

function buscarLivro() {
    const termo = document.getElementById('termoBusca').value.toLowerCase();
    const resultados = livros.filter(livro =>
        livro.titulo.toLowerCase().includes(termo) ||
        livro.autor.toLowerCase().includes(termo) ||
        livro.genero.toLowerCase().includes(termo)
    );

    const lista = document.getElementById('livros');
    lista.innerHTML = '';
    resultados.forEach((livro) => {
        const item = document.createElement('li');
        item.textContent = `${livro.titulo} - ${livro.autor} (${livro.genero}, ${livro.ano}) Avaliação: ${livro.avaliacao}`;
        lista.appendChild(item);
    });
}

function classificarLivros(criterio) {
    livros.sort((a, b) => a[criterio] > b[criterio] ? 1 : -1);
    listarLivros();
}

function salvarLivros() {
    const blob = new Blob([JSON.stringify(livros, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'livros.json';
    a.click();
    URL.revokeObjectURL(url);
}

window.onload = carregarLivros;
