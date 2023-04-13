function solucao(sequencia) {
  //seu codigo aqui
  let resposta = 0

  for (let item of sequencia) {
    if (item === ">") {
      resposta += 1
    } else {
      resposta -= 1
    }
    if (resposta > 6) {
      resposta = 0
    }
    if (resposta < 0) {
      resposta = 6
    }
  }
  console.log(resposta)
}
