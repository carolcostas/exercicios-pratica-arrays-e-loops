function solucao(stringCorrompida) {
  // seu codigo aqui

  let dadoPurificado = ""
  for (let letra of stringCorrompida) {
    if (
      letra == "!" ||
      letra == "@" ||
      letra == "#" ||
      letra == "$" ||
      letra == "%" ||
      letra == "&" ||
      letra == "*" ||
      letra == "(" ||
      letra == ")" ||
      letra == "."
    ) {
      //ignorar
    } else {
      dadoPurificado += letra
    }
  }
  console.log(dadoPurificado)
}
