// Operadores booleanos em JavaScript

const a = 5;
const b = 10;

// Operador de Igualdade (==)
console.log(a == b); // Saída: false, pois 5 não é igual a 10

// Operador de Desigualdade (!=)
console.log(a != b); // Saída: true, pois 5 é diferente de 10

// Operador de Maior que (>), Maior ou Igual a (>=), Menor que (<) e Menor ou Igual a (<=)
console.log(a > b); // Saída: false, pois 5 não é maior que 10
console.log(a >= b); // Saída: false, pois 5 não é maior ou igual a 10
console.log(a < b); // Saída: true, pois 5 é menor que 10
console.log(a <= b); // Saída: true, pois 5 é menor ou igual a 10

// Operador de Negação (!)
const condicao = true;
console.log(!condicao); // Saída: false

// Operador de E lógico (&&)
console.log(a > 0 && b > 0); // Saída: true, ambos a e b são maiores que 0
console.log(a > 0 && b < 0); // Saída: false, b é menor que 0

// Operador de Ou lógico (||)
console.log(a > 0 || b > 0); // Saída: true, ambos a e b são maiores que 0
console.log(a > 0 || b < 0); // Saída: true, a é maior que 0
console.log(a < 0 || b < 0); // Saída: false, nenhum deles é maior que 0

// Diferença entre == e ===
// Operador de Igualdade (==)
const num = 5;
const str = "5";

console.log(num == 5); // Saída: true (mesmo valor)
console.log(num == str); // Saída: true (o valor é igual após a conversão)
console.log(num == "5"); // Saída: true (mesmo valor, mesmo após a conversão)

// Operador de Igualdade Estrita (===)
console.log(num === 5); // Saída: true (mesmo valor e mesmo tipo de dado)
console.log(num === str); // Saída: false (tipo de dado é diferente)
console.log(num === "5"); // Saída: false (tipo de dado é diferente)
