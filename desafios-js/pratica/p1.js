//  criar uma função que possa receber qualquer inteiro não negativo como argumento e retorná-lo com seus dígitos em ordem decrescente. Essencialmente, reorganize os dígitos para criar o maior número possível.

function maiorNumero(n) {
    // Converte o número para uma string e depois para um array de caracteres
    let digitos = n.toString().split('');
    
    // Ordena os dígitos em ordem decrescente
    digitos.sort((a, b) => b - a);
    
    // Junta os dígitos novamente em uma string e converte de volta para número
    return parseInt(digitos.join(''), 10);
  }
  
  // Exemplos de uso
  console.log(maiorNumero(34521)); // Saída: 54321
  console.log(maiorNumero(987));   // Saída: 987
  console.log(maiorNumero(102));   // Saída: 210
  
console.log(maiorNumero(42145)) // 54421
console.log(maiorNumero(145263)) // 654321
console.log(maiorNumero(123456789)) // 987654321