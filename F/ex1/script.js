var nums = []
var txtnum = document.getElementById('txtn')        
var res = document.getElementById('res')

function adicionarNum() { 
    let num = Number(txtnum.value)

    let isNum = num.length == 0 || num <= 0 || num >= 101
    let inList = nums.indexOf(num) != -1
    let isVal = isNum || inList

    if (isVal) {
        window.alert('Número Ínvalido! ou Número já inserido')
    } else {
        nums.push(num)
    
        let sel = document.getElementById('selnum')
        sel.innerHTML = ''
       
        for (let i in nums) {
            let item = document.createElement('option')
            item.text = `Valor ${nums[i]} adicionado`
            sel.appendChild(item)
        }

        window.console.log(nums)
    }

    let inputNum = document.getElementById('txtn')
    inputNum.value = ''
    inputNum.focus()
}

function verificarNum() {
    if (nums.length == 0) {
        window.alert('Nenhum número cadastrado')
    } else {
        let soma = 0
        let max = 0
        let min = 0
        for (let i in nums) {
            soma += nums[i]
            max = nums[i]
            min = nums[i]
            if (max < nums[i]) {
                max = nums[i]
            }
            if (min > nums[i]) {
                min = nums[i]
            }
        }

        res.innerHTML = `<p>Ao todo, temos ${nums.length} números cadastrados</p>`
        res.innerHTML += `<p>O Maior valor informado foi ${max}</p>`
        res.innerHTML += `<p>O Menor valor informado foi ${min}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${soma / nums.length}</p>`
    }
}