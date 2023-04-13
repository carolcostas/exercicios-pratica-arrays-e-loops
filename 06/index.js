function solucao(primeiraLetra, segundaLetra, palavras) {
  let encontrei = false
  let palavrascertas = ""

  for (let palavra of palavras) {
    if (palavra[0] == primeiraLetra && palavra[1] == segundaLetra) {
      palavrascertas += `${palavra} 
`
      encontrei = true
    }
  }

  if (encontrei) {
    console.log(palavrascertas)
  } else {
    console.log("NENHUMA")
  }
}
