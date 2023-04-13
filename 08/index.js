function solucao(notas) {
  //seu codigo aqui
  // guardar a maior nota
  // guardar a menor nota
  //
  let soma = 0
  let maiornota = notas[0]
  let menornota = notas[0]

  for (let nota of notas) {
    if (nota > maiornota) {
      maiornota = nota
    }
    if (nota < menornota) {
      menornota = nota
    }
    soma += nota
  }
  let media = (soma - maiornota - menornota) / (notas.length - 2)

  console.log(media)
}
