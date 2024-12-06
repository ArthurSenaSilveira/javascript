//  Objetivo: Inverter os caracteres de uma string.

//  Enunciado: Crie uma função chamada inverterString que recebe uma string e retorna ela invertida.

function inverterString(a) {
    return a.split("").reverse().join("")
}

console.log(inverterString("abc")) // Deve retornar "cba"
console.log(inverterString("tpircSavaJ")) // Deve retornar "JavaScript"