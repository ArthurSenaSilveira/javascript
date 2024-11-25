function clicar() {
  var inicio = window.document.querySelector('input#inicio').value

  var fim = document.querySelector('input#fim').value

  var passo = document.querySelector('input#passo').value

  inicio = Number(inicio)

  fim = Number(fim)

  passo = Number(passo)

  if (isNaN(inicio) || isNaN(fim) || isNaN(passo) || passo <= 0) {
    alert('[ERRO], Por Favor, Insira Números válidos.')
    return;
  }
  let resultado = "";
  for (let i = inicio; i <= fim; i += passo) {
    resultado += `👈 ${i}`;
  }
  resultado += "🏁"
  document.querySelector('#res').innerHTML = resultado;
}
