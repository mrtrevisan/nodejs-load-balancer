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

* Isso vai subir 4 containers iguais no modo 'detached'.

* Obs.: É necessário estar rodando a rede traefik-proxy: <br/>
<a href="https://github.com/mrtrevisan/stack-containers">github.com/mrtrevisan/stack-containers</a>

### Passo 2: Provisionamento do Load-Balancer

* Navegue até a pasta load-balancer e rode:
```
docker compose up 
```
* Esse comando sobe o container sem liberar o terminal, para que possa ser observado o log do programa.

* Adicione o domínio do load-balancer ao arquivo /etc/hosts:
```
sudo nano /etc/hosts
```
Ou use outro editor de sua preferência.

* Copie e cole ao final do arquivo
```
<seu ip localhost>  load-balancer.cloud.local
```

### Passo 3: Testes

* Em uma nova aba de terminal, navegue até a pasta raiz do repo e rode:
```
chmod a+x test.sh
./test.sh
```

O curl irá gerar métricas de desempenho com base no arquivo 'curl-format.txt'.

Pode-se comparar o Load-Balancer com um Forwarder, editando o arquivo <i>/load-balancer/script/startup.sh</i>,
Substitua "yarn balancer" por:

``` 
yarn forwarder 
``` 