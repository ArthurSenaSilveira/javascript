let num = [1, 9, 2, 8, 3, 7, 4, 6, 5]

console.log(num)

let pos = num.indexOf(9)

if (pos == -1) {
    console.log(`O valor não existe `)
} else {
    console.log(`O valor está na posição ${pos}`)
}

/*
for (let pos in valores ) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}.`)
    
}
*/
/*
for (pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem os valore ${valores[pos]}`)
}
*/