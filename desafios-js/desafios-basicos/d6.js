function desafio6 (a, b) {
    return a.filter(item => item !== b)
}

/*function desafio6 (a, b) {
    const filtered = []
    for(const item of a) {
        if (item !== b) {
            filtered.push(item)
        }
    }
    return filtered
}
*/

console.log(desafio6([1, 2, 3], 2)); //[1, 3]
console.log(desafio6([1, 2, "3"], "3")); //[1, 2]
console.log(desafio6([1, false, 2, "3"], false)); //['1', 2, '3']
console.log(desafio6([5, 1, 2, 5, 3, 5], 5)); //[1, 2, 3]