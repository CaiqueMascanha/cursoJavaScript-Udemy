// Armazene a valocidade de um carro em uma variável, com o número que desejar
// Faça uma estrutura if/else que verifica se ele está acima da velocidade
// 80 é a velocidade máxima permitida
// Se estiver acima ou abaixo exiba a mensagem com o console.log()

let velocidadeDoCarro = 120
let velocidadePermitida = 80

if(velocidadeDoCarro > velocidadePermitida) {
  console.log(`Você está dirigindo acima de ${velocidadePermitida}km/h, que é o permitido!!!`)
} else {
  console.log("Ótimo, você na velocidade permitida!")
}