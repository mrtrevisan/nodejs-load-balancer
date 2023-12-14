# nodejs-load-balancer
Load balancer feito em nodejs com express e axios, usando docker compose.

# Instalação:

* Ceritifique-se de ter instalado:
    - NodeJS;
    - Yarn;
    - Docker;

* Clone o repositório

### Passo 1: Provisionamento da API
* Navegue até a pasta /api:

```
docker compose up -d
```

* Isso vai subir 4 containers iguais com os seguintes domínios:
```
dummy-api1.cloud.local
dummy-api2.cloud.local
dummy-api3.cloud.local
dummy-api4.cloud.local
```

* Obs.: É necessário estar rodando a rede traefik-proxy: <br/>
<a href="https://github.com/mrtrevisan/stack-containers">github.com/mrtrevisan/stack-containers</a>

* Adicione os domínios ao arquivo /etc/hosts:
```
sudo nano /etc/hosts
```
### Passo 2: Execução do proxy

* Navegue até a pasta load-balancer e rode:
```
yarn balancer
```

### Passo 3: Testes

* Em uma nova aba de terminal, navegue até a pasta raiz do repo e rode:
```
chmod a+x test.sh
./test.sh
```

O curl irá gerar métricas de desempenho com base no arquivo 'curl-format.txt'.

Pode-se comparar o Load-Balancer com um Forwarder, rodando no <b>Passo 2</b>.
``` 
yarn forwarder 
``` 
