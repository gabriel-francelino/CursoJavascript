// Para criar um array em JavaScript, você pode usar a seguinte sintaxe:

// Usando colchetes []
let frutas = [];
frutas[0] = "maçã";
frutas[1] = "banana";
frutas[2] = "laranja";

// Usando a função Array()
let num = new Array(5); // Cria um vetor com 5 elementos undefined

// Inicialização direta
let cores = ["vermelho", "azul", "verde"];

// Usando Array.from()
let texto = "JavaScript";
let caracteres = Array.from(texto);


// Imprimindo valores do array
console.log(frutas[0]); // Saída: "maçã"
console.log(frutas[1]); // Saída: "banana"
console.log(frutas[2]); // Saída: "laranja"

// Métodos dos arrays
const numeros = [1, 2, 3, 4, 5];

// Obtendo o tamanho do array
console.log(numeros.length); // Saída: 5

// Adicionando elementos no final do array
numeros.push(6);
console.log(numeros); // Saída: [1, 2, 3, 4, 5, 6]

// Removendo o último elemento do array
numeros.pop();
console.log(numeros); // Saída: [1, 2, 3, 4, 5]

// Pesquisando um elemento no array
console.log(numeros.indexOf(3)); // Saída: 2 (índice do elemento 3)

// Removendo elementos usando splice
numeros.splice(1, 2); // Remove 2 elementos a partir do índice 1
console.log(numeros); // Saída: [1, 4, 5]

// slice
// join
// include
// shift
// unshift

