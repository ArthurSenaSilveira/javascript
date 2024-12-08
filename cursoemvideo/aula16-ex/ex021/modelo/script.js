let numero = []
let quantidade = 0 // Quantidade de números inseridos
let soma = 0 // Soma de todos os números
let maior = 0 // Maior valor inserido
let menor = 100 // Menor valor inserido (inicializado com 100, já que o número vai estar entre 1 e 100)
let res = document.querySelector('div#res')

let valores = document.querySelector('select#valores')
function clicar() {
  let num = parseInt(document.querySelector('input#numero').value)

  if (isNaN(num) || num < 1 || num > 100 || numero.includes(num)) {
    window.alert(
      `[ERRO!] Este número não segue os critérios ou ja foi adicionado uma vez ou nenhum número foi inserido.`
    )
    return
  }

  numero.push(num)

  quantidade++

  soma += num

  if (num > maior) {
    maior = num
  }

  if (num < menor) {
    menor = num
  }

  let option = document.createElement('option')
  option.text = `Valor ${num} adicionado.\n`
  valores.add(option) + '\n'

  document.querySelector('input#numero').value = ''
}

function resultado() {
  if (numero.length == 0) {
    window.alert('Adicione valores antes de finalizar')
  } else {
    
    media = soma / quantidade
    let resDiv = document.querySelector('#res')
    resDiv.innerHTML = `
    <p>Ao todo, temos ${quantidade} números cadastrados.</p>
    <p>O maior valor informado foi ${maior}.</p>
    <p>O menor valor informado foi ${menor}.</p>
    <p>Somando todos os valores, temos ${soma}.</p>
    <p>A média dos valores digitados é ${media.toFixed(2)}.</p>
`
  }
}
