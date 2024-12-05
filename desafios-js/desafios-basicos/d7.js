// resolução deste desafio : Escreva uma função que recebe um array a e uma flag order com valor padrão 'asc'. Caso o valor de order seja 'asc' retornar o array ordenado em ordem ascendente e caso seja 'desc' retornarr em ordem descendente.

function desafio7(a, order = "asc") {
    return order === "asc" ? a.sort() : a.sort().reverse()
}



/*
function desafio7(a, order = "asc") {
    for (let i = 1; i < a.length; i++){
        for (let j = 0; j < i; j++) {
            if (a[j] > a[i]) {
        const tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
            }
        }
    }
    if (order === "desc") {
        const inverted = []
        for (let i = a.length - 1; i >= 0; i--){
            inverted.push(a[i])
        }
        return inverted;
    }
        return a;
}
*/
console.log(desafio7([2, 3, 1], "asc")); //[1, 2, 3]
console.log(desafio7([6, 2, 8, 1, 5], "desc")); // [8, 6, 5, 2, 1]
console.log(desafio7(["uva", "maçã", "laranja"], "asc")); // ['laranja', 'maçã', 'uva']
console.log(desafio7(["t", "a", "s", "z", "m"])); // ['a', 'm', 's', 't', 'z']