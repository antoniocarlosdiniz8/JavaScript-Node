let readLine = require('readline-sync')

let data = new Date()

let hora = data.getHours()

var name = readLine.question('Qual seu nome: ')

console.log(`Olá ${name}, agora são: ${hora} horas`)