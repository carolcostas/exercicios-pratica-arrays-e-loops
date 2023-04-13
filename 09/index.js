function solucao(palpite, palavra) {
  // seu codigo aqui

  let quantLetra = 0
  for (let letra of palavra) {
    if (letra === palpite) {
      quantLetra += 1
    }
  }
  console.log(quantLetra)
}
