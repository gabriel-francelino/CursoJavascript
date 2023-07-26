// Para criar um array em JavaScript, você pode usar a seguinte sintaxe:
const frutas = ['maçã', 'banana', 'laranja'];

console.log(frutas[0]); // Saída: "maçã"
console.log(frutas[1]); // Saída: "banana"
console.log(frutas[2]); // Saída: "laranja"

// Propriedades dos arrays
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

