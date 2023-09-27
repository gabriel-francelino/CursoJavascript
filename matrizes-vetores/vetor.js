// Inicialização de Arrays -------------------------------------------------------------------------------
let frutas = ['maçã', 'banana', 'laranja'];
let carros = new Array('Ford', 'Toyota', 'Honda');
let numeros = [];
numeros[0] = 1;
numeros[1] = 2;

console.log("Array 'frutas' inicial:", frutas);
console.log("Array 'carros' inicial:", carros);
console.log("Array 'numeros' inicial:", numeros);

// Acesso a Valores de Arrays ----------------------------------------------------------------------------
let primeiraFruta = frutas[0]; // Acessa o primeiro elemento ("maçã")
let segundoCarro = carros[1];  // Acessa o segundo elemento ("Toyota")

console.log("Primeira fruta:", primeiraFruta);
console.log("Segundo carro:", segundoCarro);

// Percorrendo Arrays com um Loop for
console.log("Percorrendo o array 'frutas':");
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// Percorrendo Arrays com um Loop for...of
console.log("\nPercorrendo o array 'carros':");
for (let carro of carros) {
    console.log(carro);
}