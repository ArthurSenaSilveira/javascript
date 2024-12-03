function desafio2(text, flag = 'start') {
    if (flag == 'start') {
        console.log(text.slice(0, 3))
    } else {
        console.log(text.slice(-3))
    }
    if (text < 3) {
        (console.log('text'))
        return
    }
    return
}

console.log(desafio2("abcdefg", "start"));
console.log(desafio2("abcdefg", "end"));
console.log(desafio2("ab", "end"));
console.log(desafio2("abcdefg"));