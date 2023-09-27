// Inicialização de Arrays -------------------------------------------------------------------------------
var frutas = ['maçã', 'banana', 'laranja'];
var carros = new Array('Ford', 'Toyota', 'Honda');
var numeros = [];

console.log("Array 'frutas' inicial:", frutas);
console.log("Array 'carros' inicial:", carros);
console.log("Array 'numeros' inicial:", numeros);

// Acesso a Valores de Arrays ----------------------------------------------------------------------------
var primeiraFruta = frutas[0]; // Acessa o primeiro elemento ("maçã")
var segundoCarro = carros[1];  // Acessa o segundo elemento ("Toyota")

console.log("Primeira fruta:", primeiraFruta);
console.log("Segundo carro:", segundoCarro);

// Percorrendo Arrays com um Loop for
console.log("Percorrendo o array 'frutas':");
for (var i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// Percorrendo Arrays com um Loop for...of
console.log("\nPercorrendo o array 'carros':");
for (var carro of carros) {
    console.log(carro);
}

// Métodos de Arrays ---------------------------------------------------------------------------------------
console.log("\nUsando métodos de arrays:");
console.log('Array frutas', frutas)
// Adiciona um elemento ao final do array
frutas.push('uva');
console.log("Array 'frutas' após push('uva'):", frutas);

// Remove o último elemento do array
var ultimaFruta = frutas.pop();
console.log("Array 'frutas' após pop():", frutas);

// Adiciona um elemento no início do array
frutas.unshift('abacaxi');
console.log("Array 'frutas' após unshift('abacaxi'):", frutas);

// Remove o primeiro elemento do array
var primeiraFrutaRemovida = frutas.shift();
console.log("Array 'frutas' após shift():", frutas);

// Permite adicionar, remover ou substituir elementos em qualquer posição do array
frutas.splice(1, 1);        // Remove o segundo elemento ('banana')
console.log("Array 'frutas' após splice(1, 1):", frutas);

frutas.splice(1, 0, 'manga'); // Adiciona 'manga' na segunda posição
console.log("Array 'frutas' após splice(1, 0, 'manga'):", frutas);

// Cria uma cópia rasa de uma parte do array
var copiaFrutas = frutas.slice(0, 2); // Cria uma cópia dos dois primeiros elementos
console.log("Cópia do array 'frutas' após slice(0, 2):", copiaFrutas);

// Combina dois ou mais arrays
var maisFrutas = frutas.concat(['pera', 'kiwi']);
console.log("Array 'maisFrutas' após concat(['pera', 'kiwi']):", maisFrutas);

// Executa uma função em cada elemento do array
console.log("\nPercorrendo o array 'maisFrutas':");
maisFrutas.forEach(function (fruta) {
    console.log(fruta);
});
