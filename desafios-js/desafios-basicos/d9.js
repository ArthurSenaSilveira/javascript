// Escreva uma função que recebe o array a e um número b como parâmetro. Faça a SOMA de TODOS os elementos do array com VALOR MAIOR do que b. retorne a soma

function desafio9(a, b){
    return a.reduce(function(prev, cur) {
        return cur > b ? prev + cur : prev
    }, 0)
}

console.log(desafio9([1, 2, 3, 4, 5, 6, 7, 8], 3)) // 30
console.log(desafio9([-14, -12, -5, 4, -4], -5)) // 0
console.log(desafio9([33, 45, 88, 105, 111,], 99)) // 216