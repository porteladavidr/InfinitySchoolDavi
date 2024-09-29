const express = require('express');
const bcrypt = require('bcrypt');
const session = require('express-session');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const csv = require('csv-parser');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Configuração da sessão
app.use(session({
  secret: 'chave-secreta',
  resave: false,
  saveUninitialized: false,
}));

// Função para ler CSV de usuários com mapeamento correto
const readUsersFromCSV = (callback) => {
  const users = [];
  fs.createReadStream('data/usuarios.csv')
    .pipe(csv(['id', 'nome', 'email', 'senha']))  // Mapeamento das colunas
    .on('data', (data) => users.push(data))
    .on('end', () => {
      console.log("Usuários lidos do CSV:", users); // Debug
      callback(users);
    });
};

// Registro de usuário
app.post('/register', (req, res) => {
  const { nome, email, senha } = req.body;
  const hashedPassword = bcrypt.hashSync(senha, 10);
  const newUser = `${Date.now()},${nome},${email},${hashedPassword}\n`;

  fs.appendFileSync('data/usuarios.csv', newUser);
  console.log("Novo usuário registrado:", newUser); // Debug
  res.send('Usuário registrado com sucesso!');
});

// Login de usuário
app.post('/login', (req, res) => {
  const { email, senha } = req.body;

  readUsersFromCSV((users) => {
    const user = users.find((u) => u.email === email);

    if (!user) {
      console.log("Usuário não encontrado:", email); // Debug
      return res.status(401).send('Usuário não encontrado');
    }

    // Verifique o valor da senha armazenada no CSV
    console.log("Senha armazenada no CSV (hash):", user.senha);

    bcrypt.compare(senha, user.senha.trim(), (err, isMatch) => {
      if (err) {
        console.error('Erro ao comparar senhas:', err);
        return res.status(500).send('Erro interno do servidor');
      }

      if (isMatch) {
        console.log("Senha correta! Login bem-sucedido."); // Debug
        req.session.user = user;
        res.send('Login bem-sucedido!');
      } else {
        console.log("Senha incorreta."); // Debug
        res.status(401).send('Senha incorreta');
      }
    });
  });
});

// Obter produtos da Fake Store API
app.get('/products', async (req, res) => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    res.json(response.data);
  } catch (error) {
    console.error("Erro ao obter produtos da API:", error); // Debug
    res.status(500).send('Erro ao obter produtos da API');
  }
});

// Iniciar o servidor
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
