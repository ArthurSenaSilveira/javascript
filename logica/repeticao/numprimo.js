let n = 29
let isPrimo = true
for (let i = 2; i < n; i++) {
    if (n % i === 0) {
        isPrimo = false;
        break;
    }
}

if (isPrimo && n > 1) {
    console.log(`${n} é primo`)
} else {
    console.log(`${n} não é primo`)
}