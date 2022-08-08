-- Vamos lá! Faça uma consulta que retorne todas as peças que começam com as letras GR.
SELECT * FROM pecasfornecedores.pecas
WHERE name LIKE 'GR%';

-- Agora, escreva uma query para mostrar todos os fornecimentos que contenham a peça com code 2. Organize o resultado por ordem alfabética de fornecedor.
SELECT * FROM pecasfornecedores.fornecimentos
WHERE peca = 2 
ORDER BY fornecedor;

-- Em seguida, faça uma consulta para exibir as peças, preço e fornecedor de todos os fornecimentos em que o código do fornecedor tenha a letra N.
SELECT peca, Preco, fornecedor FROM pecasfornecedores.fornecimentos
WHERE fornecedor LIKE '%n%';

-- Avante, falta pouco! Escreva uma query para exibir todas as informações dos fornecedores que são empresas limitadas (LTDA). Ordene esses resultados em ordem alfabética decrescente.
SELECT * FROM pecasfornecedores.fornecedores
WHERE name LIKE '%LTDA'
ORDER BY name DESC;

-- Agora, faça uma consulta para exibir o número de empresas (fornecedores) que contém a letra F no código.
SELECT COUNT(*) FROM pecasfornecedores.fornecedores
WHERE name LIKE '%f%';

-- Quase lá! Agora escreva uma query para exibir os fornecimentos onde as peças custam mais de R$15,00 e menos de $40,00. Ordene os resultados por ordem crescente.
SELECT * FROM pecasfornecedores.fornecimentos
WHERE Preco >= 15 AND Preco <= 40
ORDER BY Preco;

-- Ufa! Por fim, faça uma query para exibir o número de vendas feitas entre o dia 15/04/2018 e o dia 30/07/2019.
SELECT COUNT(*) FROM pecasfornecedores.vendas
WHERE order_date BETWEEN '2018-04-15' AND '2019-07-30';

