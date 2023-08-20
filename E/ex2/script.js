function gerarTabuada() {
    let numero = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    
    tab.innerHTML = ''
    
    if (numero.value.length == 0) {
        window.alert('Por Favor! Digite um número')
    } else {
        let n = Number(numero.value)
        for (var i = 0; i <= 10; i++) {
            let item = document.createElement('option')
            item.text = `${n} x ${i} = ${n * i}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }
}