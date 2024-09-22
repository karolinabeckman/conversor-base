const botao = document.getElementById('botao')
const inputNumero = document.getElementById('numero')
const seletorBaseAtual = document.querySelector('#base-atual')
const seletorBaseFinal = document.querySelector('#base-final')
const divResultado = document.getElementById('resultado')


botao.addEventListener("click", ()=> {
  // console.log("Cliquei")

  let numeroFinal
  const numeroAtual = inputNumero.value //-> O valor que vem no inputNumero quando clica o botão (SEMPRE VEM COMO STRING)

  const baseAtual = +seletorBaseAtual.value
  const baseFinal = +seletorBaseFinal.value
  
  // if(baseAtual === baseFinal){
    //   numeroFinal = numeroAtual
    // } else if(baseAtual === 10){
      //   numeroFinal = numeroAtual.toString(baseFinal) // toString(2) é o que tranforma em base binária. base octal(8), base hexadecimal(16) , base decimal(10)
      // } else {
        //   const numeroConvertido = parseInt(numeroAtual,baseAtual)
        //   numeroFinal=numeroConvertido.toString(baseFinal)
        // }
        // console.log(`base atual: ${baseAtual}, Base final: ${baseFinal}, número: ${numeroFinal}`)
        
  const numeroConvertido = parseInt(numeroAtual,baseAtual)
  numeroFinal=numeroConvertido.toString(baseFinal)

  divResultado.classList.remove('invisivel')
  divResultado.innerHTML = `${numeroAtual}<sub>${baseAtual}</sub> = ${numeroFinal}<sub>${baseFinal}</sub>`
  
})
