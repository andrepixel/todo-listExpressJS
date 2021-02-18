const express = require('express');
const app = express();
const path = require('path');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post');

// Caminho do Style, de modo estático para sempre estar presente na aplicação
app.use(express.static(__dirname + '/src'));

// Express Handlebars 
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rotas
app.get('/', (req, res) => {
    res.render('form');
});

// Rota para listar todas as tarefas da Database
app.post('/req', (req, res) => {
    Post.findAll({ order: [['id', 'DESC']] }).then((posts) => {
        // Filtrando os dados antes de mandar para View Req
        const context = {
            postsContext: posts.map(post => {
                return {
                    id: post.id,
                    titulo: post.titulo,
                    conteudo: post.conteudo,
                    createdAt: post.createdAt,
                    updatedAt: post.updatedAt
                }
            })
        }
        res.render('req', { posts: context.postsContext })
    })
})

// Rota de adicionar uma tarefa na Database
app.post('/add', (req, res) => {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(() => {
        res.redirect('/')
    })
});

// Rota de deletar uma tarefa pegando um id pela GET e excluindo na Database
app.get('/deletar/:id', (req, res) => {
    Post.destroy({ where: { id: req.params.id } }).then(() => {
        res.redirect('/')
    })
});

// Testa a porta da aplicação e retorna o funcionamento em um log
app.listen(8081, () => {
    console.log("Aplicação está funcionando normalmente!");
});