function clicar() {
  var inicio = window.document.querySelector('input#inicio').value

  var fim = document.querySelector('input#fim').value

  var passo = document.querySelector('input#passo').value

  var res = document.querySelector('input#res')

  //inicio = Number(inicio)

  //fim = Number(fim)

  //passo = Number(passo)

  if (isNaN(inicio) || isNaN(fim) || isNaN(passo) || passo <= 0) {
    alert('[ERRO], Por Favor, Insira Números válidos.')
  } else {
    res.innerHTML = 'Contando'
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    if (i < f) {}
  }
}
