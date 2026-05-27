# Sistema de Pagamento de Boletos
Trabalho de Conclusão da Disciplina de Programação para Automação de Testes.

Este projeto foi desenvolvido como requisito para a conclusão da disciplina de Programação para Automação de Testes, focando na aplicação de lógica em JavaScript e na estruturação de testes unitários.

## Estrutura do Projeto

*   src/: Contém a lógica da classe ServicoDePagamentoDeBoleto.js.
*   test/: Contém os testes unitários utilizando Mocha e Assert.

## Pré-requisitos

É necessário ter o ambiente de execução Node.js instalado para interpretar e executar os arquivos JavaScript.

## Instalação e Configuração

1. Inicie o projeto para gerar o arquivo package.json:
   npm init -y
2. No package.json, altere obrigatoriamente a propriedade "type" para "module" para permitir o uso de import/export 
3. Instale o framework de testes Mocha:
   npm i mocha
4. No campo "scripts" do package.json, substitua a linha de teste por: "test": "mocha".

## Como rodar os testes

Após configurar o atalho no package.json, utilize o comando:
npm test.

## Regras de Negócio

O sistema categoriza os pagamentos automaticamente seguindo estas regras:
*   Valor superior a 100.00: categoria 'caro'.
*   Valor igual ou inferior a 100.00: categoria 'padrão'.

A organização dos testes segue o padrão AAA (Arrange, Act, Assert) para garantir clareza na execução.