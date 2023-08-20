let num = [5, 8, 4]
num[3] = 6
num.push(7)

console.log(num)
console.log(num.length)

num.sort()
console.log(num)

// for (let i = 0; i < num.length; i++) {
//     console.log(`A posição ${i} tem o valor ${num[i]}`)
// }

for (let i in num) {
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}

console.log(num.indexOf(7))
console.log(num.indexOf(3))