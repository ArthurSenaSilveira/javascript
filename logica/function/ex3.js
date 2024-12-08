function maiornumero(a, b) {
    if (a < b) {
        console.log(`${b} é maior que ${a}`)
    } else {
        console.log(`${a} é maior que ${b}`)
    }
    if (a === b) {
        console.log(`${a} é igual a ${b}`)
    }
}

console.log(maiornumero(1, 5))
console.log(maiornumero(6, 9))
console.log(maiornumero(50, 50))