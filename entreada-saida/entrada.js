/*

Para realizar a entrada e saída de dados de forma mais interativa e amigável ao usuário,
você pode usar a biblioteca readline-sync no Node.js. Essa biblioteca facilita a leitura
de entrada do usuário e a exibição de saída no console de uma maneira mais organizada e sincronizada.

Primeiro, certifique-se de ter instalado a biblioteca readline-sync em seu projeto. Para fazer isso, 
você pode usar o gerenciador de pacotes do Node.js (npm ou yarn) e executar o seguinte comando no terminal linux:

npm install readline-sync

*/

// Importando a biblioteca readline-sync
const readline = require('readline-sync');

// Solicitando uma entrada ao usuário
const nome = readline.question('Qual é o seu nome? ');
console.log('Olá, ' + nome + '!');

// Solicitando uma entrada numérica ao usuário
const idade = readline.questionInt('Quantos anos você tem? ');
console.log('Você tem ' + idade + ' anos.');

// Solicitando uma escolha do usuário
const opcoes = ['Maçã', 'Banana', 'Laranja'];
const index = readline.keyInSelect(opcoes, 'Escolha uma fruta: ');
console.log('Você escolheu: ' + opcoes[index]);
