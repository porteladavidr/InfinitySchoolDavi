let allMovies = []; // Variável global para armazenar todos os filmes

async function fetchMovies() {
  const apiKey = '77c4e2b070a2e1396500d0b42ebf7cec';
  const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Armazena todos os filmes
    allMovies = data.results;

    // Exibe os filmes no carrossel
    displayCarousel(allMovies);
    
    // Inicia o carrossel
    setInterval(rotateSlides, 3000); // Muda os slides a cada 3 segundos
  } catch (error) {
    console.error('Erro ao buscar filmes:', error);
  }
}

function displayCarousel(movies) {
  const carrossel = document.querySelector('#carrossel');
  carrossel.innerHTML = ''; // Limpa o carrossel antes de adicionar novos filmes

  const melhoresFilmes = movies
    .sort((a, b) => b.vote_average - a.vote_average)
    .slice(0, 10);

  melhoresFilmes.forEach(movie => {
    const slide = document.createElement('div');
    slide.classList.add('slide');

    const img = document.createElement('img');
    img.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    img.alt = movie.title;

    const title = document.createElement('p');
    title.textContent = `${movie.title} (${movie.vote_average})`;

    slide.appendChild(img);
    slide.appendChild(title);
    carrossel.appendChild(slide);
  });
}

// Função para buscar filmes a partir da entrada do usuário
async function searchMovies(query) {
  const apiKey = '77c4e2b070a2e1396500d0b42ebf7cec';
  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pt-BR&query=${encodeURIComponent(query)}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.results; // Retorna os resultados da busca
  } catch (error) {
    console.error('Erro ao buscar filmes:', error);
    return [];
  }
}

// Função para filtrar filmes conforme a digitação
async function filterMovies() {
  const input = document.querySelector('#searchInput').value;
  const resultsContainer = document.querySelector('#searchResults');
  resultsContainer.innerHTML = ''; // Limpa resultados anteriores

  if (input) {
    const filteredMovies = await searchMovies(input);
    
    filteredMovies.forEach(movie => {
      const resultDiv = document.createElement('div');
      resultDiv.classList.add('result-item');

      const img = document.createElement('img');
      img.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
      img.alt = movie.title;
      img.classList.add('result-image'); // Adiciona classe para estilização

      const title = document.createElement('h4');
      title.textContent = movie.title;

      const synopsis = document.createElement('p');
      synopsis.textContent = movie.overview; // A sinopse já está em português

      const average = document.createElement('p');
      average.textContent = `Média: ${movie.vote_average}`;

      resultDiv.appendChild(img); // Adiciona a imagem à div do resultado
      resultDiv.appendChild(title);
      resultDiv.appendChild(synopsis);
      resultDiv.appendChild(average);
      resultsContainer.appendChild(resultDiv);
    });
  }
}

// Adicionando um evento para o campo de entrada
document.querySelector('#searchInput').addEventListener('input', filterMovies);
fetchMovies();
