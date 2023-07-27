// console.log() -  imprime o conteúdo entre parênteses no console.
const nome = "Maria";
console.log("Olá, " + nome + "! Bem-vindo ao JavaScript.");

// console.info() - geralmente usado para informações relevantes ou de debug
const idade = 25;
console.info("Idade:", idade);

// console.error() - usado para mostrar mensagens de erro personalizadas.
const divisao = (a, b) => {
  if (b === 0) {
    console.error("Erro: divisão por zero não é permitida.");
    return;
  }
  return a / b;
};

console.log("Resultado da divisão:", divisao(10, 2)); // Saída: 5
console.log("Resultado da divisão:", divisao(10, 0)); // Saída: Erro: divisão por zero não é permitida.

// console.warn() - usado para exibir mensagens de aviso no console.
const idade2 = 15;
if (idade2 < 18) {
  console.warn("Atenção: Você é menor de idade.");
}
