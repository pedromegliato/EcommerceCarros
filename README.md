# EcommerceCarrosFront

Projeto realizado na versao 14.2.7 do angular CLI

## Instruções

Após realizar o clone do projeto:

1 - Rode no terminal dentro da pasta do projeto o comando `npm install` para installar todas dependencias do projeto

2 - Após a conclusão do mesmo, rode o projeto via terminal com o comando `ng serve`, e abra no navegar o caminho 
`http://localhost:4200/`

OBS: a porta padrão do angular é 4200 caso queira rodar em outra porta ultilize ng serve --port NUMERO_DESEJADO

## Observações

O cadastro habilitado no projeto é destinado a cadastro somente de superusuarios que tem acesso ao admin, não foi implementando regra para usuarios clientes

Os filtros de pesquisa não foram finalizados somente a listagem de veiculos por ordem de valor.

esta sendo ultilizado para autenticação o JWT, e o token está senso armazenado na sessão.

O banco implementdo com o banckend foi o sqlite, mas foi deixado instruções dentro do backend de como implentar outros SGBD's

No banco de dados `sqlite`  já existe um usuario e senha cadastrados caso nao queria realizar o cadastro de um usuario

`user`: `string`

`password` : `admin@@888`


## BackEnd

link do banckEnd feito em Django DRF 3.2.16, para rodar o projeto por completo

link: https://github.com/pedromegliato/EcommerceCarros

