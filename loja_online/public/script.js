document.addEventListener("DOMContentLoaded", () => {
    let loggedIn = false; // Controla se o usuário está logado

    // Função para exibir produtos da API
    const loadProducts = () => {
        fetch('/products')
            .then(response => response.json())
            .then(data => {
                const productDiv = document.getElementById('products');
                productDiv.innerHTML = '';
                data.forEach(product => {
                    const productElement = document.createElement('div');
                    productElement.className = 'product';
                    productElement.innerHTML = `
                        <h2>${product.title}</h2>
                        <p>${product.description}</p>
                        <p>Preço: R$${product.price}</p>
                        <img src="${product.image}" alt="${product.title}" width="100">
                        <button ${!loggedIn ? 'disabled' : ''}>Adicionar ao Carrinho</button>
                    `;
                    productDiv.appendChild(productElement);
                });
            })
            .catch(error => console.error('Erro ao carregar produtos:', error));
    };

    // Carregar produtos ao carregar a página
    loadProducts();

    // Registro de usuário
    const registerForm = document.getElementById('register-form');
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email-register').value;
        const senha = document.getElementById('senha-register').value;

        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nome, email, senha }),
        })
        .then(response => response.text())
        .then(data => {
            console.log("Resposta do servidor para registro:", data); // Debug
            alert(data);
        })
        .catch(error => console.error('Erro ao registrar:', error));
    });

    // Login de usuário
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email-login').value;
        const senha = document.getElementById('senha-login').value;

        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, senha }),
        })
        .then(response => {
            if (response.ok) {
                console.log("Login bem-sucedido"); // Debug
                alert('Login bem-sucedido!');
                loggedIn = true; // Atualiza o estado de login
                loadProducts(); // Atualiza os produtos com o botão habilitado
                toggleModal(); // Fecha o modal
            } else {
                console.log("Falha no login. Verifique suas credenciais."); // Debug
                alert('Login falhou, verifique suas credenciais.');
            }
        })
        .catch(error => console.error('Erro ao fazer login:', error));
    });
});

// Função para mostrar/esconder o modal
function toggleModal() {
    const modal = document.getElementById('modal');
    modal.style.display = modal.style.display === 'none' ? 'block' : 'none';
}

// Eventos para os botões de login e cadastro
const loginButton = document.getElementById('login-button');
const registerButton = document.getElementById('register-button');

loginButton.addEventListener('click', toggleModal);
registerButton.addEventListener('click', toggleModal);
