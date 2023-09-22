# Desafio Webjump | QA

## Olá, eu sou a Caroline Ita! 👋

Esse projeto faz parte do desafio da WebJump para a vaga de QA, onde o objetivo era automatizar
as seguintes funcionalidades, usando cypress:

    - Cadastro de usuário
    - Login
    - Adicionar produto ao carrinho
    - Finalização de compra

## Estrutura & Organização
```
---LumaProject
- cypress:
    -e2e:
        Nessa pasta você encontra os arquivos com os testes em si, separados por funcionalidade,
        dentro dos arquivos os testes estão agrupados por suítes 'describe', cada it dentro é um cenário de testes.
    -support:
         -commands.js:
         Nesse arquivo estão todos os comandos customizados para fazer todo tipo de ação que foi necessária nos testes,facilitando a leitura dos mesmos e a manutenção.
- cypress.config.js:
    As configurações do projeto estão organizadas nesse arquivo, é aqui por exemplo que você muda a url que o projeto está acessando.
- package.json:
   Você encontra as dependencias do projeto aqui
```

## Instalação

### Pré Requisitos
    - NodeJS
    - NPM

1. Clone o respositório:

```sh
$ git clone https://github.com/CarolineIta/LumaProject.git
```

2. Acesse a pasta raiz do projeto
```sh
$ cd LumaProject
```

3. Instale o npm 
```sh
$ npm install
```

### Tá, mas como rodar? 💻

Abrindo a Ferramenta do Cypress

```sh
$ npm run cy:open
```

Vendo os testes no terminal
```sh
$ npm run cy:run
```


### Autor ✍️
- [Caroline Ita](mailto:caroline.mg.ita@gmail.com)