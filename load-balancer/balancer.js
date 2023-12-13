const express = require('express');
const axios = require('axios'); 
const https = require('https');

const app = express();

app.get('/', (req, res) => {
    const urls = [
        'https://dummy-api1.cloud.local/',
        'https://dummy-api2.cloud.local/',
        'https://dummy-api3.cloud.local/',
        'https://dummy-api4.cloud.local/'
    ];

    // Random num from 0 to 3:
    const idx = Math.floor(Math.random() * 4);
    console.log(`Redirecionando para api ${idx}`);

    axios.get(urls[idx], {
        httpsAgent: new https.Agent({ rejectUnauthorized: false })
    })
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.error(`Erro ao obter dados da API: ${idx}`, error);
      res.status(500).json({ error: 'Erro ao obter dados da API'});
    });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Load Balancer rodando na porta: ${PORT}`);
});
