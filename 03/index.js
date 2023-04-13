function solucao(precos) {
  //seu codigo aqui

  let menorPreco = precos[0]
  let soma = 0

  if (precos.length < 5) {
    for (let item of precos) {
      soma += item
    }
    console.log(soma)
  } else {
    for (let preco of precos) {
      soma += preco
      if (preco < menorPreco) {
        menorPreco = preco
      }
    }
    console.log(soma - menorPreco)
  }
}
