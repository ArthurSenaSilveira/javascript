function desafio2(text, flag = 'start') {
    return text.length < 3 ? text : flag === "start" ? text.slice(0, 3) : text.slice(-3)
    
    /* if(text.length < 3) {
        return text;
    }
    if(flag === "start") {
        return text.slice(0, 3)
    }
    return text.slice(-3) */
}

console.log(desafio2("abcdefg", "start"));
console.log(desafio2("abcdefg", "end"));
console.log(desafio2("ab", "end"));
console.log(desafio2("abcdefg"));