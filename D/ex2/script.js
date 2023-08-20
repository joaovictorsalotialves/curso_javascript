function verificar() {
    var ano_nasc = document.getElementById('ano')
    var res = document.getElementById('res')

    var date = new Date()
    var ano_atual = date.getFullYear()

    if (ano_nasc.value.length == 0 || ano_nasc > ano_atual) {
        window.alert('(ERRO) Verifique os dados e tente novamente!')
    } else {
        var sexo = document.getElementsByName('sexo')
        var idade = ano_atual - Number(ano_nasc.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade < 10) {
                img.setAttribute('src', 'img/homem-criança.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/homem-adolecente.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/homem-adulto.jpg')
            } else {
                img.setAttribute('src', 'img/homem-idoso.jpg')
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher'
            if (idade < 10) {
                img.setAttribute('src', 'img/mulher-criança.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/mulher-adolecente.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/mulher-adulta.jpg')
            } else {
                img.setAttribute('src', 'img/mulher-idosa.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}