function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.querySelector('div#foto img')
  var data = new Date()
  hora = data.getHours()
  msg.innerHTML = `<p>Agora são ${hora} horas</p>`
  if (hora >= 6 && hora < 12) {
    //Bom dia!
    img.src = 'manha.png'
    document.body.style.background = '#DBCED7'
  } else if (hora >= 12 && hora < 18) {
    //Boa tarde!
    img.src = 'tarde.png'
    document.body.style.background = '#EE7086'
  } else if (hora >= 18 && hora < 24){
    //Boa noite
    img.src = 'noite.png'
    document.body.style.background = '#07213F'
  } else {
    //boa madrugada
    img.src = 'madrugada.png'
    document.body.style.background = '#41372D'
  }
}
