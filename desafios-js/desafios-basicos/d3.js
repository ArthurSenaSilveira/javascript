function desafio3(fullname, flag = "") {
    let parts = fullname.split(" ")
    return flag.length == 0 || parts.length <= 1 ? fullname : flag === "firstname" ? parts[0] : parts.slice(1).join(" ")
}

console.log(desafio3("John Williams Smith", "firstname"));
console.log(desafio3("John Williams Smith", "lastname"));
console.log(desafio3("John Williams Smith"));
console.log(desafio3("John", "firstname"));