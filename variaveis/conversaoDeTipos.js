// Coerção Implícita ------------------------------------------------------
let numero = 10; // Tipo: number
let texto = "5"; // Tipo: string

let soma = numero + texto; // Acontece coerção implícita do tipo string para number
console.log("Soma:", soma); // Saída: "105", pois a concatenação é realizada

let subtracao = numero - texto; // Acontece coerção implícita do tipo string para number
console.log("Subtração:", subtracao); // Saída: 5, pois a subtração é realizada

let resultado = numero > texto; // Acontece coerção implícita do tipo string para number
console.log("Resultado:", resultado); // Saída: true, pois 10 é maior que 5 numericamente

// Coerção Explícita ------------------------------------------------------

// Convertendo para Number

numero = Number(texto); // Convertendo uma string para um número
console.log("Número 1:", numero); // Saída: 5, o valor agora é um número

numero = parseInt(texto); // Convertendo uma string para um número inteiro
console.log("Número 2:", numero); // Saída: 5, o valor agora é um número inteiro

numero = parseFloat(texto); // Convertendo uma string para um número de ponto flutuante
console.log("Número 3:", numero); // Saída: 5, o valor agora é um número de ponto flutuante

// Conversão para String
const num1 = 10;
const texto1 = numero.toString(); // Convertendo o número para uma string
console.log("Texto 1:", texto1); // Saída: "10" (o valor agora é uma string)

const texto3 = String(num1); // Convertendo o número para uma string usando a função String()
console.log("Texto 3:", texto3); // Saída: "10" (o valor agora é uma string)

// Conversão para Booleano
const valor1 = 0;
const booleano1 = !!valor1; // Convertendo o número para um valor booleano
console.log("Booleano 1:", booleano1); // Saída: false (0 é considerado false em JavaScript)

const valor2 = "qualquer coisa";
const booleano2 = Boolean(valor2); // Convertendo a string para um valor booleano
console.log("Booleano 2:", booleano2); // Saída: true (qualquer string não vazia é considerada true)
