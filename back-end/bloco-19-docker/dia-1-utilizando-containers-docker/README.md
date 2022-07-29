## Aprendendo a utilizar Docker

#### No Docker Hub, baixe a imagem da Distribuição do Linux Debian utilizando a tag tag: stable-slim

#### Crie e execute um container no modo interativo, utilizando a imagem Distribuição do Linux Debian com a tag tag: stable-slim. 

- [x] docker run -it debian:stable-slim

#### No terminar, rode o comando cat /etc/*-release, e encerre o terminal.

- [x] cat /etc/*-release
- [x] exit

#### Inicie o mesmo container novamente, sem criar outro.

- [x] docker ps -a
- [x] docker start (id do meu container)
- [x] docker ps

#### Retome o mesmo container criado e rode o comando cat /etc/debian_version. Apos, encerre novamente o terminal.

- [x] docker attach (id do meu container)
- [x] cat /etc/debian_version
- [x] exit

#### Remova o container criado nesse exercício.

- [x] docker rm (id do meu container)
- [x] docker ps -a