// função declarada com a palavra-chave "function" ---------------------------------------------------------------------------------------------
function saudacao(nome) {
    console.log("Olá, " + nome + "!");
}

// Chamando a função com um argumento
saudacao("João"); // Saída: "Olá, João!"

// função anônima (expressão de função) --------------------------------------------------------------------------------------------------------
const soma = function (a, b) {
    return a + b;
};

// Chamando a função
console.log(soma(3, 5)); // Saída: 8

// arrow function --------------------------------------------------------------------------------------------------------------------------------
const quadrado = (num) => num * num;

// Chamando a função
console.log(quadrado(5)); // Saída: 25

// Função com parâmetros e valor padrão ----------------------------------------------------------------------------------------------------------
function saudacao2(nome = "visitante") {
    console.log("Olá, " + nome + "!");
}

saudacao2(); // Saída: "Olá, visitante!"
saudacao2("Ana"); // Saída: "Olá, Ana!"

// Função com retorno ----------------------------------------------------------------------------------------------------------------------------
function soma2(a, b) {
    return a + b;
}

const resultado = soma2(3, 5);
console.log(resultado); // Saída: 8
