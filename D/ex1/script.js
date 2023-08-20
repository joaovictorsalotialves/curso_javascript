function carregar() {
    var divMsg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')

    var date = new Date()
    var horario_atual = date.getHours()
    
    divMsg.innerHTML = `<p>Agora são ${horario_atual} horas</p>`

    if (horario_atual >= 0 && horario_atual < 12) {
        img.src = 'img/img-dia.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (horario_atual <= 18) {
        img.src = 'img/img-tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'img/img-noite.jpg'
        document.body.style.background = '#515154'
    }
}