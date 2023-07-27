// Estrutura while
let contador1 = 1;

while (contador1 <= 5) {
  console.log("Contador 1:", contador1);
  contador1++;
}

// Estrutura do...while
let contador2 = 1;

do {
  console.log("Contador 2:", contador2);
  contador2++;
} while (contador2 <= 5);

// Estrutura for
for (let i = 1; i <= 5; i++) {
  console.log("i:", i);
}

// Estrutura for...in
const pessoa = {
  nome: "João",
  idade: 30,
  cidade: "São Paulo"
};

for (let propriedade in pessoa) {
  console.log(propriedade + ":", pessoa[propriedade]);
}

// Estrutura for...of
const meuArray = [1, 2, 3, 4, 5];

for (let elemento of meuArray) {
  console.log("Elemento:", elemento);
}
