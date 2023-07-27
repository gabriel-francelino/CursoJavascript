// Exemplo com um único argumento
const dobrar = numero => numero * 2;
console.log(dobrar(5)); // Saída: 10

// Exemplo com múltiplos argumentos
const soma = (a, b) => a + b;
console.log(soma(3, 5)); // Saída: 8

// Exemplo sem argumentos
const saudacao = () => "Olá!";
console.log(saudacao()); // Saída: "Olá!"

// Exemplo usando o "this"
const objeto = {
  nome: "Maria",
  saudacao: function() {
    setTimeout(function() {
      console.log("Olá, " + this.nome); // O valor do "this" aqui será diferente do escopo do objeto
    }, 1000);
  }
};

objeto.saudacao(); // Saída: "Olá, undefined" (valor incorreto)

// Com arrow function, o "this" é herdado do escopo do objeto
const objetoArrow = {
  nome: "Maria",
  saudacao: function() {
    setTimeout(() => {
      console.log("Olá, " + this.nome); // O "this" aqui se refere corretamente ao escopo do objeto
    }, 1000);
  }
};

objetoArrow.saudacao(); // Saída: "Olá, Maria" (valor correto)
