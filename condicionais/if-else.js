const nota = 75;

// if-else
if (nota >= 90) {
  console.log("Aprovado com nota excelente!");
} else if (nota >= 70) {
  console.log("Aprovado com uma boa nota.");
} else {
  console.log("Reprovado. Estude mais!");
}

// if ternário
const idade = 20;
// variavel = condição ? retorno se verdadeiro : retorno se falso
const mensagem = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(mensagem); // Saída: "Maior de idade"
