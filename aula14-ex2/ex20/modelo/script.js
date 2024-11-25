function clicar() {
    var num = document.querySelector('#num').value

    num = Number(num)

    var res = ""

    if (num === '' || isNaN(num)) {
        alert("Por favor, insira um número.")
        return;
    }

    for (let i = 1; i <= 10; i++){
        res += `${num} x ${i} = ${num * i}\n`
    }

    document.querySelector('#tab').value = res;

}