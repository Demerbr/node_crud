# Indice

- [Sobre](#-sobre)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Como baixar o projeto](#-como-baixar-o-projeto)

## 🔖&nbsp; Sobre

O projeto **CadVid** é um app de videos que foi criado a partir video <a href="https://www.youtube.com/watch?v=9AO2hZJsHrs&t=23s"> Node Crud no canal da Rockert Seat</a>
 Onde utilizei tal projeto como base e adicionei novas funcionalidades, tecnologias e conceitos SOLID.

---

## 🚀 Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias

- [NodeJs](https://nodejs.org)
- [Express](https://expressjs.com/)
- [Docker](https://www.docker.com/)
- [JWT](https://jwt.io/)

---

## 🗂 Como baixar o projeto

```bash

    # Clonar o repositório
    $ git clone https://github.com/Demerbr/node_crud.git

    # Entrar no diretório
    $ cd node_crud

    # Instalar as dependências
    $ yarn install

   
```
## 🗂 Como executar o projeto

```bash

    # Buildar containers
    $  docker-compose up --build -d

    # Instalar migrations no banco de dados
    $ yarn typeorm migration:run
   
```

<a href="http://localhost:5555/api-docs"> Acessar documentação swagger</a>
