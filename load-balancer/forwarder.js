const express = require('express');
const axios = require('axios'); 
const https = require('https');

const app = express();

app.get('/', (req, res) => {
    const host = 'dummy-api1';

    const url = 'http://' + host + ':3000';

    axios.get(url, {
        httpsAgent: new https.Agent({ rejectUnauthorized: false })
    })
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.error('Erro ao obter dados da API:', error);
      res.status(500).json({ error: 'Erro ao obter dados da API'});
    });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Forwarder rodando na porta: ${PORT}`);
});
