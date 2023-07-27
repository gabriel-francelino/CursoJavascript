// Exemplo de objeto com propriedades
const pessoa = {
    nome: "João",
    'cpf-rg': 123456789,
    idade: 30,
    cidade: "São Paulo"
  };
  
  // Acesso às propriedades usando a notação de ponto
  console.log(pessoa.nome); // Saída: "João"
  console.log(pessoa.idade); // Saída: 30
  
  // Acesso às propriedades usando a notação de colchetes
  console.log(pessoa['cpf-rg']); // Saída: 123456789 (necessário usar aspas duplas ou simples)
  console.log(pessoa['cidade']); // Saída: "São Paulo"
  
  // Adicionar e modificar propriedades
  pessoa.profissao = "Engenheiro";
  pessoa.idade = 31;
  
  // Remover uma propriedade
  delete pessoa.cidade;
  
  // Método em objeto
  const objeto = {
    nome: "Maria",
    saudacao: function() {
      console.log("Olá, " + this.nome);
    }
  };
  
  objeto.saudacao(); // Saída: "Olá, Maria"
  
  // Iteração em um objeto usando for...in
  const pessoa2 = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
  };
  
  for (let propriedade in pessoa2) {
    console.log(propriedade + ": " + pessoa2[propriedade]);
  }
  