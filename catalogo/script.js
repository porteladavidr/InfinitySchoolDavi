let todosOsFilmes = [];

async function buscarFilmes() {
  const chaveApi = '77c4e2b070a2e1396500d0b42ebf7cec';
  const urlApi = `https://api.themoviedb.org/3/movie/popular?api_key=${chaveApi}&language=pt-BR`;

  try {
    const resposta = await fetch(urlApi);
    const dados = await resposta.json();
    todosOsFilmes = dados.results;
    exibirCarrossel(todosOsFilmes);
    setInterval(rotacionarSlides, 3000);
  } catch (erro) {
    console.error('Erro ao buscar filmes:', erro);
  }
}

function exibirCarrossel(filmes) {
  const carrossel = document.querySelector('#carrossel');
  carrossel.innerHTML = '';

  const melhoresFilmes = filmes
    .sort((a, b) => b.vote_average - a.vote_average)
    .slice(0, 10);

  melhoresFilmes.forEach(filme => {
    const slide = document.createElement('div');
    slide.classList.add('slide');

    const img = document.createElement('img');
    img.src = `https://image.tmdb.org/t/p/w500/${filme.poster_path}`;
    img.alt = filme.title;

    const titulo = document.createElement('p');
    titulo.textContent = `${filme.title} (${filme.vote_average})`;

    slide.appendChild(img);
    slide.appendChild(titulo);
    carrossel.appendChild(slide);
  });
}

async function buscarFilmesPorConsulta(consulta) {
  const chaveApi = '77c4e2b070a2e1396500d0b42ebf7cec';
  const urlApi = `https://api.themoviedb.org/3/search/movie?api_key=${chaveApi}&language=pt-BR&query=${encodeURIComponent(consulta)}`;

  try {
    const resposta = await fetch(urlApi);
    const dados = await resposta.json();
    return dados.results;
  } catch (erro) {
    console.error('Erro ao buscar filmes:', erro);
    return [];
  }
}

async function filtrarFilmes() {
  const entrada = document.querySelector('#searchInput').value;
  const containerResultados = document.querySelector('#searchResults');
  containerResultados.innerHTML = '';

  if (entrada) {
    const filmesFiltrados = await buscarFilmesPorConsulta(entrada);
    
    filmesFiltrados.forEach(filme => {
      const divResultado = document.createElement('div');
      divResultado.classList.add('resultado-item');

      const img = document.createElement('img');
      img.src = `https://image.tmdb.org/t/p/w500/${filme.poster_path}`;
      img.alt = filme.title;
      img.classList.add('resultado-imagem');

      const titulo = document.createElement('h4');
      titulo.textContent = filme.title;

      const sinopse = document.createElement('p');
      sinopse.textContent = filme.overview;

      const media = document.createElement('p');
      media.textContent = `Média: ${filme.vote_average}`;

      divResultado.appendChild(img);
      divResultado.appendChild(titulo);
      divResultado.appendChild(sinopse);
      divResultado.appendChild(media);
      containerResultados.appendChild(divResultado);
    });
  }
}

document.querySelector('#searchInput').addEventListener('input', filtrarFilmes);
buscarFilmes();
