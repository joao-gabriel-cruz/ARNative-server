const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Servir arquivos estáticos
app.use(express.static(__dirname));

// Rota para verificar acesso aos modelos
app.get('/models/:filename', (req, res, next) => {
    console.log('Tentando acessar modelo:', req.params.filename);
    next();
});

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar o servidor
app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
    console.log('Para acessar de outros dispositivos na rede, use seu IP local');
    console.log('Verificando modelos disponíveis:');
    console.log('- /models/model1.glb');
    console.log('- /models/model2.glb');
}); 