# open-market

## Pre-requisitos

1. [Docker](https://docs.docker.com/get-docker/)
2. [Docker Compose](https://docs.docker.com/compose/install/)
3. [NVM](https://github.com/nvm-sh/nvm#installing-and-updating)
4. Node 14: `nvm install 14`
5. NPM - Empacotado com o node
6. [Visual Studio Code](https://code.visualstudio.com/Download)

## Como executar o projeto

1. Execute `npm install` para instalar as dependências
2. Execute `docker-compose up -d` para subir os containers necessários para o ambiente de desenvolvimento. Certifique-se que as portas da sua máquina estão abertas (consulte o docker-compose.yml)
3. Execute o comando `cp -v .env.example .env` para gerar um arquivo .env com as variáveis de ambiente de exemplo preenchidas. Certifique-se que não precisa ajustar nenhuma das variáveis
3. Execute o comando `npm run dev` para executar o app.

## Como testar o projeto

* Execute o comando `npm test` para executar todos os testes unitários do projeto
* O Jest já está configurado para gerar o relatório de cobertura (coverage)
* O Coverage Threshold está configurado com o percentual de aceitação de *80%*. Portanto o jest retornará erro (error code > 0) caso o percentual de cobertura esteja abaixo. Isso irá "quebrar" o build, certifique-se que este critério de aceitação esteja satisfeito.
* Para escrever um teste unitário crie um arquivo com o mesmo nome do modulo a ser testado e com a extensão *.test.ts*
* O projeto possui a dependência *ts-auto-mock* que facilita a geração de stubs.

# Formatter e Linter

* Execute o comando `npm run fmt` para formatar o código segundo os critérios do projeto.
* Execute o comando `npm run lint` para verificar se o projeto está em compliance com os critérios de aceitação do linter.

# Documentação da API

A API está documentada em formato Swagger. Para expor a documentação local basta executar o ambiente de desenvolvimento (`npm run dev`) e acessar a url **http://localhost:3000/api-docs**. 
A recomendação é que use o Swagger apenas como documentação mas utilize alguma ferramenta externa como CURL ou Postman como client.