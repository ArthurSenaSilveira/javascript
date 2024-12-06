//  Objetivo: Verificar se uma palavra é um palíndromo.

//  Enunciado: Crie uma função chamada ehPalindromo que recebe uma string e retorna true se for um palíndromo (uma palavra que se lê igual de trás para frente) ou false caso contrário.

function ehPalindromo(a){
    let i = a.split("").reverse().join("")
    if (a === i) {
        return i
    } else {
        return a
    }
}

console.log(ehPalindromo("arara")) // Deve retornar true
console.log(ehPalindromo("javascript")) // Deve retornar false
