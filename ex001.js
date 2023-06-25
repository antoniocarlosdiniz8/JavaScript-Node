let readLine = require('readline-sync')

let name = readLine.question('Qual seu nome ?')

if (!name) {
    console.warn('Digite um nome válido!')
    return
}

let age = readLine.questionInt('Qual sua idade ?')

if (age <= 18) {
    console.warn('Desculpe, somente pessoas de maior!')
    return
}

console.log(`Olá ${name} voçê tem: ${age} anos`)