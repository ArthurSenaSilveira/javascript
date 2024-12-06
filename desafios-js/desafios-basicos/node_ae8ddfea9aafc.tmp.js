//  Objetivo: Calcular o fatorial de um número.

//  Enunciado: Crie uma função chamada fatorial que recebe um número e retorna o seu fatorial. O fatorial de um número n (denotado por n!) é o produto de todos os números inteiros de 1 até n.

function fatorial(a) {
    let r = 1
    for (let i = a; i > 0; i++) {
        r *= i
    }
    return r
}

console.log(fatorial(5)) // Deve retornar 120 (5*4*3*2*1)
console.log(fatorial(3)) // Deve retornar 6 (3*2*1)