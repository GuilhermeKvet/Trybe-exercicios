#### Crie um arquivo HTML chamado missao_trybe.html

- missao_trybe.html

#### Crie um contêiner para manter um servidor httpd:2.4 Apache e vincule sua porta interna com a porta 4545 da sua máquina local.

- docker run -d --name site-trybe -p 4545:80 -v "$(pwd):/usr/local/apache2/htdocs" httpd:2.4

#### Após criar o contêiner, acesse a página HTML que está rodando no servidor em seu browser.

- http://localhost:4545/missao_trybe.html

#### Acesse o arquivo missao_trybe.html e acrescente a tag \<p> com o seguinte texto "Nosso negócio é GENTE! #VQV";

- Mudando arquivo missao_trybe.html

#### Obtenha o Mounts através da propriedade Source que deve mostrar o volume desse container no Docker Host.

-   docker inspect \<id do meu container>

#### Agora pare o container httpd:2.4;

- docker stop \<id do meu container>

#### Exclua o seu container;

- docker rm \<id do meu container>

#### Verifique se a pasta onde você salvou o arquivo html permanece no mesmo lugar;

- ls -la

#### Obtenha o IMAGE ID do servidor;

- docker images

#### Depois de obter o IMAGE ID, exclua a imagem.

- docker rmi -f \<id da imagem>