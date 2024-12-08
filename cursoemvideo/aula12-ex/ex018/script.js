function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')
  if (Number(fano.value) == 0 || Number(fano.value) > ano) {
    window.alert('[Erro!] Verifique os dados')
  } else {
    var fsexo = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ``
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsexo[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute('src', 'crianca-homem.png')
      } else if (idade >= 10 && idade < 21) {
        //jovem
        img.setAttribute('src', 'homem-jovem.png')
      } else if (idade >= 21 && idade < 60) {
        //adulto
        img.setAttribute('src', 'homem-adulto.png')
      } else {
        //idoso
        img.setAttribute('src', 'homem-idoso.png')
      }
    } else if (fsexo[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute('src', 'crianca-mulher.png')
      } else if (idade >= 10 && idade < 21) {
        //jovem
        img.setAttribute('src', 'mulher-jovem.png')
      } else if (idade >= 21 && idade < 60) {
        //adulto
        img.setAttribute('src', 'mulher-adulta.png')
      } else {
        //idoso
        img.setAttribute('src', 'mulher-idosa.png')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
    img.style.padding = '10px'
  }
}
