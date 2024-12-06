//  Objetivo: Calcular o fatorial de um número.

//  Enunciado: Crie uma função chamada fatorial que recebe um número e retorna o seu fatorial. O fatorial de um número n (denotado por n!) é o produto de todos os números inteiros de 1 até n.

function fatorial(n) {
    // Inicializa o resultado com 1
    let resultado = 1;
  
    // Laço que vai de n até 1
    for (let i = n; i > 0; i--) {
      resultado *= i;  // Multiplica o resultado pelo valor de i
    }
  
    return resultado; // Retorna o resultado final
  }
  
  console.log(fatorial(5)); // Deve retornar 120
  console.log(fatorial(3)); // Deve retornar 6
  console.log(fatorial(0)); // Deve retornar 1
  