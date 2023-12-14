const express = require('express');
const axios = require('axios'); 
const https = require('https');

const app = express();

app.get('/', (req, res) => {
    const hosts = [
      'dummy-api1',
      'dummy-api2',
      'dummy-api3',
      'dummy-api4'
    ];

    // Random num from 0 to 3:
    const idx = Math.floor(Math.random() * 4);
    console.log(`Redirecionando para o host ${idx +1}`);

    var url = 'http://' + hosts[idx] + ':3000';
    axios.get(url, {
        httpsAgent: new https.Agent({ rejectUnauthorized: false })
    })
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.error(`Erro ao obter dados da API: ${idx +1}`, error);
      res.status(500).json({ error: 'Erro ao obter dados da API'});
    });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Load Balancer rodando na porta: ${PORT}`);
});
