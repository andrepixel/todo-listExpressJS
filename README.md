# Todo-list com NodeJS e Express

### Build
* [NODEJS] (https://nodejs.org/en/download/) 
* [NPM] (https://nodejs.org/en/download/)
* [EXPRESSJS] (https://www.npmjs.com/package/express)
* [EXPRESS-HANDLEBARS] (https://www.npmjs.com/package/express-handlebars)
* [SEQUELIZE] (https://www.npmjs.com/package/sequelize)
* [NODEMON] (https://www.npmjs.com/package/nodemon)
* [NPM-MYSQL2] (https://www.npmjs.com/package/mysql2)
* [BODYPARSER] (https://www.npmjs.com/package/body-parser)
* [MYSQL] (https://dev.mysql.com/downloads/installer/)

### Instalação
1. Ter um editor, recomendado vscode (https://code.visualstudio.com/download)
2. Instalar o Mysql Server
3. Criar uma database chamado "postapp" com o comando
```sh
    create database postapp;
```
4. Clonar o repositório
```sh
    git clone https://github.com/devandrev/estagioDevGPM.git
```
5. Instalar as dependências necessárias para o projeto, com o NPM, apartir do seu shell dentro da raiz do repositório baixado
```sh
    npm i nodemon@latest sequelize@latest express@latest express-handlebars@latest mysql2@latest --save 
```
4. Toda aplicação gira em torno do "index.js", então para funcionar, basta usar o comando abaixo
```sh
    nodemon index.js
```
