# Terceira avaliação Programação Web I

Baseado no protótipo entregue na segunda avaliação, faça as seguintes alterações para a terceira
avaliação:

Deverá haver um novo item no menu chamado “CADASTRO” e que deverá carregar uma nova
página.

Nesta nova página deverá ter campo ``<input type=”text”>`` onde será informado um ID
numérico mais um botão com a label “Consultar”. Ao clicar neste botão, o ID informado
deverá fazer uma requisição GET para a API RESTful na URI
<https://bu.furb.br/mcardoso/progWeb/apiRestAval.php/cadastro/> mais o ID informado.

- A requisição acima retornará um JSON com a seguinte estrutura:
  - “id”  
  - “nome”
  - “departamento”
  - “endereco"
  - “email”

As propriedades acima deverão ser mostrados em um elemento da página (``<div>, <p>,
<hn>, <table>``, etc.) seguido de um botão com a label “Exclusão”.  

Este botão ao ser clicado deverá enviar uma requisição DELETE à URI
<https://bu.furb.br/mcardoso/progWeb/apiRestAval.php/cadastro/> mais o ID informado, a
qual irá retornar um JSON com dois atributos:

- “status”
- “mensagem”

Deverá ser testado o conteúdo de “status” que pode ser “Ok” ou “Erro” (a API retornará de
forma aleatória), e, dependendo do valor de “status”, o script deverá se comportar da
seguinte maneira:

- Caso o valor de “status” seja “Ok”, o conteúdo de “mensagem” deverá ser mostrado
em um elemento com cor de fundo verde.
o Caso o valor de “status” seja “Erro”, o conteúdo de “mensagem” deverá ser mostrado
em um elemento com cor de fundo vermelha.

Mais abaixo nesta página deverá haver outro form de alteração, com um campo ``<input>``
para cada atributo acima (carregados com as informações retornadas em "Consultar”), e um
botão com a label “Alterar”. Ao clicar neste botão, deverá ser solicitado uma requisição PUT
à URI <https://bu.furb.br/mcardoso/progWeb/apiRestAval.php/cadastro> mais o ID acima com
as informações do form encapsuladas em um JSON com os mesmos atributos acima. Esta
requisição retornará um JSON também contendo “status” e “mensagem”, e o script deverá se
comportar da mesma maneira acima, dependendo do resultado de “status”.

## Trabalho03

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
