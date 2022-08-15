-- Um zoológico precisa de um banco de dados para armazenar informações sobre os seus animais. As informações a serem armazenadas sobre cada animal são:
-- Nome;

-- Espécie;

-- Sexo;

-- Idade;

-- Localização.
-- Cada animal também possui vários cuidadores, e cada cuidador pode ser responsável por mais de um animal. Além disso, cada cuidador possui um gerente, sendo que cada gerente pode ser responsável por mais de um cuidador.

CREATE DATABASE IF NOT EXISTS zoologico;
USE zoologico;

CREATE TABLE especie (
especie_id INT AUTO_INCREMENT PRIMARY KEY,
especie VARCHAR(40)
);

CREATE TABLE animais (
animail_id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(20) NOT NULL,
especie_id INT NOT NULL,
sexo VARCHAR(10) NOT NULL,
idade INT NOT NULL,
localizacao VARCHAR(40) NOT NULL,
FOREIGN KEY (especie_id) REFERENCES  especie (especie_id)
);

CREATE TABLE gerentes(
gerente_id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50) NOT NULL
);

CREATE TABLE cuidadores(
cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50) NOT NULL,
gerente INT NOT NULL,
FOREIGN KEY (gerente) REFERENCES gerentes(gerente_id)
);

CREATE TABLE animal_cuidador (
animal_id INT,
cuidador_id INT,
CONSTRAINT PRIMARY KEY(animal_id, cuidador_id),
FOREIGN KEY (animal_id) REFERENCES  animais (animal_id),
FOREIGN KEY (cuidador_id) REFERENCES  cuidadores (cuidador_id)
);