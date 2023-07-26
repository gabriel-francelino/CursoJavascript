// var: Declaração de variável com escopo de função ou global (evitar seu uso devido a problemas de hoisting). ----------------------------
var idade = 30;
var nome = "João";

function minhaFuncao() {
  var local = "dentro da função";
  console.log(nome); // Acessível, pois var tem escopo de função
}

console.log(idade); // 30
console.log(local); // Erro, a variável local não está no escopo global  

// let: Declaração de variável com escopo de bloco. --------------------------------------------------------------------------------------
let contador = 0;

if (true) {
  let contador = 10; // Essa variável contador é diferente da variável acima
  console.log(contador); // 10
}

console.log(contador); // 0

// const: Declaração de constante com escopo de bloco. -----------------------------------------------------------------------------------
const pi = 3.1416;
pi = 3.14; // Erro, não é possível reatribuir um valor a uma constante

const pessoa = { nome: "Maria", idade: 25 };
pessoa.nome = "João"; // Permitido, podemos alterar propriedades do objeto
