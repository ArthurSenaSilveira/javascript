// resolução deste desafio : Escreva uma função que recebe dois arrays como parâmetros. Retorne um único array contendo os valores dos dois arrays concatenados, removendo valores duplicados, caso existam.

function desafio8 (a, b) {
    return Array.from(new Set([...a, ...b]));
}

/*
function desafio8 (a, b) {
    return [...new Set(a.concat(b))];
}*/

/*
function desafio8 (a, b) {
    return [...new Set([...a, ...b])];
}*/

console.log(desafio8([1, 2, 3], [3, 4, 5])) // [1, 2, 3, 4, 5]
console.log(desafio8([6, 7], [8, 9])) //[6, 7, 8, 9]
console.log(desafio8([-2, -1, 0, 1, 2], [-1, 1, 2, 3])) // [-2, -1, 0, 1, 2, 3]