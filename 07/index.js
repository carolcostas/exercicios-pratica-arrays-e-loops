function solucao(disparos) {
  //seu codigo aqui

  let ponto = 0
  for (let disparo of disparos) {
    if (disparo > 70) {
      ponto++
    }
  }
  if (ponto >= 3) {
    console.log(ponto)
  } else {
    console.log("ELIMINADO")
  }
}
