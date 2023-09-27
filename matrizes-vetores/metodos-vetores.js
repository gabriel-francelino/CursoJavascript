let frutas = ['maçã', 'banana', 'laranja'];

// Métodos de Arrays ---------------------------------------------------------------------------------------

console.log("\nUsando métodos de arrays:");
console.log('Array frutas', frutas)

// push(): Adiciona um elemento ao final do array
frutas.push('uva');
console.log("Array 'frutas' após push('uva'):", frutas);

// pop(): Remove o último elemento do array
let ultimaFruta = frutas.pop();
console.log("Array 'frutas' após pop():", frutas);

// unshift(): Adiciona um elemento no início do array
frutas.unshift('abacaxi');
console.log("Array 'frutas' após unshift('abacaxi'):", frutas);

// shift(): Remove o primeiro elemento do array
let primeiraFrutaRemovida = frutas.shift();
console.log("Array 'frutas' após shift():", frutas);

// splice(): Permite adicionar, remover ou substituir elementos em qualquer posição do array
frutas.splice(1, 1);        // Remove o segundo elemento ('banana')
console.log("Array 'frutas' após splice(1, 1):", frutas);

frutas.splice(1, 0, 'manga'); // Adiciona 'manga' na segunda posição
console.log("Array 'frutas' após splice(1, 0, 'manga'):", frutas);

// slice(): Cria uma cópia rasa de uma parte do array
let copiaFrutas = frutas.slice(0, 2); // Cria uma cópia dos dois primeiros elementos
console.log("Cópia do array 'frutas' após slice(0, 2):", copiaFrutas);

// concat(): Combina dois ou mais arrays
let maisFrutas = frutas.concat(['pera', 'kiwi']);
console.log("Array 'maisFrutas' após concat(['pera', 'kiwi']):", maisFrutas);

// toString(): Converte o array em uma única string separada por vírgulas.
var stringFrutas = frutas.toString();
console.log("Imprimindo array 'frutas' com toString():", stringFrutas);

// includes(): Verifica se um valor existe no array e retorna true ou false.
var numeros = [1, 2, 3, 4, 5];
var verifica = numeros.includes(3);
console.log("Verificando se valor existe no array com includes():", verifica); // true

// indexOf(): Retorna o índice da primeira ocorrência de um elemento no array, ou -1 se não encontrado.
var animais = ['cachorro', 'gato', 'pássaro', 'peixe', 'gato'];
var indiceGato = animais.indexOf('gato');
console.log("Buscando índice do valor no array com indexOf() (índice do 'gato'):", indiceGato);

// join(): Combina os elementos do array em uma única string, separados por um delimitador especificado.
var cores = ['vermelho', 'verde', 'azul'];
var stringCores = cores.join(' - ');
console.log("Unindo valores do array em uma string com join():", stringCores);

// split(): Divide uma string em um array de substrings com base em um separador especificado.
var frase = "Olá, mundo!";
var palavras = frase.split(' ');
console.log("Dividindo uma string em uma array com split():", palavras);

// sort(): Ordena os elementos do array (pode ser alfabética ou numericamente).
frutas.sort();
console.log("Ordenando array 'frutas' com sort() (ordem alfabética):", frutas);

var numerosDesordenados = [4, 2, 1, 5, 3];
numerosDesordenados.sort(function(a, b) {
    return a - b;
});
console.log("Ordenando array 'numerosDesordenados' com sort() (ordem numérica):", numerosDesordenados);

// forEach(): Executa uma função em cada elemento do array
console.log("\nPercorrendo o array 'maisFrutas':");
maisFrutas.forEach(function (fruta) {
    console.log(fruta);
});
