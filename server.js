const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

app.use('/', router);
app.listen(process.env.PORT || 3000);
console.log('Servidor rodando');

app.use(express.static(path.join(__dirname, 'public')));

// Rota para servir a imagem
app.get('/src', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'imagens', 'minha_imagem.jpg'));
});