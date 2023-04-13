function solucao(letra, palavras) {
  //seu codigo aqui

  let perderam = 0

  for (let palavra of palavras) {
    for (let letranapalavra of palavra) {
      if (letra == letranapalavra[0]) {
        //ignorar
        break
      } else {
        perderam++
        break
      }
    }
  }
  console.log(perderam)
}
