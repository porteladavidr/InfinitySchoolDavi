document.addEventListener('DOMContentLoaded', () => {
    const breedButtonsContainer = document.querySelector('#breed-buttons');
    const imageGallery = document.querySelector('#image-gallery');

    async function fetchBreeds() {
        try {
            const response = await fetch('https://dog.ceo/api/breeds/list/all');
            const data = await response.json();
            displayBreedButtons(data.message);
        } catch (error) {
            handleError('Erro ao obter lista de raças:', error);
        }
    }

    function displayBreedButtons(breeds) {
        breedButtonsContainer.innerHTML = '';
        Object.keys(breeds).forEach(breed => {
            const button = document.createElement('button');
            button.textContent = breed;
            button.addEventListener('click', () => fetchBreedImages(breed));
            breedButtonsContainer.appendChild(button);
        });
    }

    async function fetchBreedImages(breed) {
        try {
            const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/4`);
            const data = await response.json();
            displayImages(data.message);
        } catch (error) {
            handleError('Erro ao carregar imagens:', error);
        }
    }

    function displayImages(images) {
        imageGallery.innerHTML = '';
        images.forEach(imgUrl => {
            const img = document.createElement('img');
            img.src = imgUrl;
            img.alt = 'Imagem de cachorro';
            imageGallery.appendChild(img);
        });
    }

    function handleError(message, error) {
        console.error(message, error);
        alert(message.split(':')[0] + '. Tente novamente.'); // Mensagem de alerta simplificada
    }

    fetchBreeds();
});
