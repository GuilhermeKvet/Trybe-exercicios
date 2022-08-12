USE pixar;
SELECT * FROM box_office;
SELECT * FROM movies;
SELECT * FROM theater;


-- Exercício 1: Utilizando o INNER JOIN, encontre as vendas nacionais (domestic_sales) e internacionais (international_sales) de cada filme.
SELECT m.title, b.domestic_sales, b.international_sales
FROM box_office AS b
INNER JOIN movies AS m
ON b.movie_id = m.id;

-- 🚀 Exercício 2: Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais (international_sales) do que vendas nacionais (domestic_sales).
SELECT m.title, (v.domestic_sales + v.international_sales) AS 'Numero de vendas'
FROM box_office AS v
INNER JOIN movies AS m
ON v.movie_id = m.id
WHERE v.domestic_sales < v.international_sales;

-- 🚀 Exercício 3: Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente.
SELECT m.title, b.rating
FROM movies AS m
INNER JOIN box_office AS b
ON m.id = b.movie_id
ORDER BY m.title DESC;

-- Exercício 4: Utilizando o LEFT JOIN, faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT t.`name`, t.location, m.title, m.director, m.`year`, m.length_minutes
FROM theater AS t
LEFT JOIN movies AS m
ON t.id = m.theater_id
ORDER BY t.`name`;

-- Exercício 5: Utilizando o RIGHT JOIN, faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
SELECT m.title, m.director, m.`year`, m.length_minutes, t.`name`, t.location
FROM theater AS t
RIGHT JOIN movies AS m
ON t.id = m.theater_id
ORDER BY t.`name`;
