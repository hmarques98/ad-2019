<h2 align="center">Secret Friend - Send email</h2>

### Como Começar

`yarn install ou npm install`

depois `yarn dev` para iniciar o servidor em modo de desenvolvimento

### Routes

`/create`

Nessa rota é possivel fazer o cadastro dos participantes no banco de dados que inclui um objeto javascript

##### Exemplo

```javascript
{
  {
    "who":"Quem está realizando o sorteio",
    "draw":
            [
              {
                  "name": "",
                  "email": "@gmail.com",
                  "secretFriend": ""
              }, {
                  "name": "",
                  "email": "@gmail.com",
                  "secretFriend": ""
              }
                ]

}

}
```

Buscar o último cadastro feito no banco de dados e enviar um email para cada participante com a função sendEmail, usando o serviço de email SendGrid

Eu fiz uma verificação nessa rota para que só aceite sorteio que o total de participante sejam pares, para evitar não sobrar ninguem e o sorteado ser a mesma pessoa. Então só vai passar se o tamanho do array _draw_ for par

---

`/registers`

Nessa rota podemos buscar o ultimo registro feito no banco de dados e temos como resposta um objeto como na rota create e quem fez o sorteio

---

### OBS:

#### Serviço de email sendGrid

_Para usar o serviço do send grid é preciso ter uma apikey_

#### Banco de dados

_Eu usei mongoDB como banco de dados e o cloud mongo db atlas para salvar os dados_

Verificar o arquivo `.env.example` e colocar as variaveis de ambite para Banco de dados e ApiKey SendGrid
