// Faça uma estrutura de if/else para verifica se um usuário pode dirigir
// Armazene em variáveis algumas informações sobre o usuário: idade, se tem CNH
// Se a idade for maior que 18 e não possuir CNH, exiba uma mensagem
// Se a idade for maior que 18 e tem CNH, exiba uma mensagem
// Se não tiver 18 nem CNH, exiba outra mensagem

let idadePermitida = 18
let idade = 18
let cnh = true

if (idade > idadePermitida && cnh === false) {
  console.log("Você não possui CNH!")
} else if (idade >= idadePermitida && cnh === true) {
  console.log("Você pode dirigir!")
} else {
console.log("Você não pode dirigir!")
}