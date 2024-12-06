// Objetivo:    Contar quantas palavras existem em uma string.

// Enunciado:   Crie uma função chamada contarPalavras que recebe uma string e retorna o número de palavras. Considere que as palavras são separadas por espaços.

function contarPalavras(a) {
    return a.split("")
}

console.log(contarPalavras("Eu sou desenvolvedor!")) // Deve retornar 4
console.log(contarPalavras("Olá, mundo!")) // Deve retornar 2
