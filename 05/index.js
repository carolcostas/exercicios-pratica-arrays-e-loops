function solucao(precos) {
  // seu codigo aqui

  let menorPrejuizo = 999999999999

  for (let i = 0; i < precos.length; i++) {
    for (let j = i; j < precos.length; j++) {
      const compra = precos[i]
      const venda = precos[j]
      const prejuizo = compra - venda

      if (prejuizo > 0) {
        if (prejuizo < menorPrejuizo) {
          menorPrejuizo = prejuizo
        }
      }
    }
  }

  console.log(menorPrejuizo)
}
