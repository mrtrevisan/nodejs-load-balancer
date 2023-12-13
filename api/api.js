const express = require('express');
const fs = require('fs');

const app = express();
let isAvailable = true;

app.get('/', async (req, res) => {

  function waitForAPI() {
    if (isAvailable) {

      const biblia = fs.readFileSync('biblia-em-txt.txt');
      res.send(String(biblia)); 

      isAvailable = false; 

      setTimeout(() => {
        isAvailable = true; 
      }, Math.random() * 3000);

    } else {
      setTimeout(waitForAPI, 100);
    }
  }

  waitForAPI();
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});