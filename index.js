const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.json());
app.use(express.static(__dirname + '/public'));

//página incial com o formulário
router.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
})

//pagina com os resultados da coleta
router.post('/results', function(req, res){
    res.sendFile(path.join(__dirname + '/public/results.html'));
})

app.use('/', router);
app.listen(process.env.port || 3000);

console.log('server is running on port 3000');
