//  Objetivo: Encontrar o maior número em um array.

//  Enunciado: Crie uma função chamada maiorNumero que recebe um array de números e retorna o maior número presente no array.

function maiorNumero(a) {
    return Math.max(...a)
}

console.log(maiorNumero([1, 2, 3, 4, 5])) // Deve retornar 5
console.log(maiorNumero([10, 15, 3, 7, 8])) // Deve retornar 15
