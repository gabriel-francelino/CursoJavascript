// Cada subarray dentro da matriz representa uma linha da matriz e contém os elementos correspondentes a cada coluna.
const matriz2x2 = [
    [1, 2],
    [3, 4]
  ];

  console.log(matriz2x2[0][0]); // Saída: 1 (elemento da primeira linha, primeira coluna)
  console.log(matriz2x2[1][1]); // Saída: 4 (elemento da segunda linha, segunda coluna)

// Propriedades das matrizes

// Exemplo de matriz
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // Método forEach() - percorrendo os elementos da matriz
  matriz.forEach((linha) => {
    linha.forEach((elemento) => {
      console.log(elemento);
    });
  });
  // Saída:
  // 1
  // 2
  // 3
  // 4
  // 5
  // 6
  // 7
  // 8
  // 9
  
  // Método map() - criando uma nova matriz com os elementos multiplicados por 2
  const novaMatriz = matriz.map((linha) => {
    return linha.map((elemento) => elemento * 2);
  });
  console.log(novaMatriz);
  // Saída:
  // [ [ 2, 4, 6 ], [ 8, 10, 12 ], [ 14, 16, 18 ] ]
  
  // Método flat() - transformando uma matriz em um array unidimensional
  const arrayUnidimensional = matriz.flat();
  console.log(arrayUnidimensional);
  // Saída: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
  
  // Método reduce() - somando todos os elementos da matriz
  const somaTotal = matriz.flat().reduce((acumulador, elemento) => {
    return acumulador + elemento;
  }, 0);
  console.log(somaTotal); // Saída: 45
  
  // Método every() - verifica se todos os elementos são maiores que 0
  const todosMaioresQueZero = matriz.every((linha) => {
    return linha.every((elemento) => elemento > 0);
  });
  console.log(todosMaioresQueZero); // Saída: true
  
  // Método some() - verifica se há algum elemento igual a 8
  const temOito = matriz.some((linha) => {
    return linha.some((elemento) => elemento === 8);
  });
  console.log(temOito); // Saída: true
  
