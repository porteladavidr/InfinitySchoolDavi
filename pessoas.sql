----- Criação do DB
CREATE DATABASE IF NOT EXISTS Cadastro;
USE Cadastro;

CREATE TABLE Pessoas (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    NomeCompleto VARCHAR(100),
    Idade INT,
    Genero VARCHAR(10),
    Nacionalidade VARCHAR(50),
    Email VARCHAR(100),
    EstadoCivil VARCHAR(20),
    NomePai VARCHAR(100),
    NomeMae VARCHAR(100)
);
--- Inserindo 3 pessoas
INSERT INTO Pessoas (NomeCompleto, Idade, Genero, Nacionalidade, Email, EstadoCivil, NomePai, NomeMae) VALUES
('João da Silva', 30, 'Masculino', 'Brasileiro', 'joao.silva@example.com', 'Solteiro', 'Carlos da Silva', 'Maria da Silva'),
('Maria Santos', 25, 'Feminino', 'Brasileira', 'maria.santos@example.com', 'Casada', 'José Santos', 'Ana Santos'),
('Pedro Oliveira', 35, 'Masculino', 'Brasileiro', 'pedro.oliveira@example.com', 'Divorciado', 'Antonio Oliveira', 'Clara Oliveira');


-- Atualizando o ID 2
UPDATE Pessoas
SET NomeCompleto = 'Maria Santos Almeida', Idade = 26, Email = 'maria.almeida@example.com'
WHERE ID = 2;

-- Removendo o ID 1
DELETE FROM Pessas
WHERE ID = 1;

