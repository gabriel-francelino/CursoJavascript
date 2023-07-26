// Number: Representa números inteiros ou de ponto flutuante. Por exemplo, 10, 3.14.
let age = 30;
console.log(age, typeof age); // typeof imprime o tipo da variável
let pi = 3.14;
console.log(pi, typeof pi);

// String: Representa sequências de caracteres. Por exemplo, "Olá, mundo!", 'JavaScript'.
let name = "John";
console.log(name, typeof name);
let message = 'Hello, world!';
console.log(message, typeof message);

// Boolean: Representa valores verdadeiros ou falsos. São true ou false.
let isTrue = true;
let isFalse = false;
console.log(isTrue, typeof isTrue);

// Null: Representa um valor nulo, ou seja, intencionalmente vazio ou sem valor.
let emptyValue = null;
console.log(emptyValue, typeof emptyValue);

// Undefined: Representa uma variável que foi declarada, mas ainda não recebeu um valor.
let notDefined;
console.log(notDefined, typeof notDefined);

// Symbol: Representa um valor único e imutável usado como chave de uma propriedade de objeto.
const id = Symbol();
console.log(id, typeof id);

// Object: Representa uma coleção de pares chave-valor e é usado para armazenar dados mais complexos. 
// Os objetos em JavaScript podem conter propriedades e métodos.
let person = {
  name: "Alice",
  age: 25,
  isStudent: true
};
console.log(person, typeof person);
