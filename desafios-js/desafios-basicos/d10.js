// Escreva uma função que recebe dois parâmetros, min e max (mínimo e máximo), e retorna um array do número de acordo com o intervalo.  Caso seja informado (1, 5) o array será: [1, 2, 3, 4, 5]


function desafio10(a, b) {
    
    return a === b ? [a] : [a].concat(desafio10(a + 1, b))
    //  return Array(b - a + 1)
    //  .fill(a)
    //  .map((prev, next) => prev + next)

    /*
    let r = []
    for (let i = a; i <= b; i++) {
        r.push(i)
    }
        return r
        */
}


console.log(desafio10(1, 5)) // [1, 2, 3, 4 5]
console.log(desafio10(11, 18)) // [11, 12 ,13, 14, 15, 16, 17, 18]
console.log(desafio10(-5, 5)) // [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]