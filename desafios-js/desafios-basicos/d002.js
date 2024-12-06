//  Objetivo: Verificar se um número é par ou ímpar.

//  Enunciado: Crie uma função chamada verificarParidade que recebe um número e retorna "par" se o número for par e "ímpar" se for ímpar.

function verificarParidade (a) {
    if (a % 2 === 0) {
        return 'Par'
    } else {
        return 'Ímpar'
    }
}

console.log(verificarParidade(5))
console.log(verificarParidade(10))
console.log(verificarParidade(11))