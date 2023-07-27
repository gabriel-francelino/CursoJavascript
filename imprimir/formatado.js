// Exemplo de template literals para imprimir de forma formatada
const nome = "João";
const idade = 30;
const cidade = "São Paulo";

console.log(`Nome: ${nome}, Idade: ${idade}, Cidade: ${cidade}`);

// Exemplo usando console.table() para imprimir um objeto em formato de tabela
const pessoa = {
  nome: "João",
  idade: 30,
  cidade: "São Paulo"
};

console.table(pessoa);

// Exemplo de formatação de números
const numero = 1234.56789;

console.log(numero.toFixed(2)); // Saída: 1234.57

const formatoNumero = new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 2 }).format(numero); // formatação para o padrão brasileiro
console.log(formatoNumero); // Saída: 1.234,57
