const prompt = require('prompt-sync')({sigint: true})

// Produção de Texto Invidivual: Algoritmos I
// Autor: Pedro Luan Dórea Melo
// Análise e Desenvolvimento de Sistemas (SENAC) 
// 30 de abril de 2022
// Feito através do Replit.com

// FUNÇÕES -->
function decisaoValor (divisaoAlcoGaso) {
    if (divisaoAlcoGaso > 0.7) {
      console.log ("É mais vantajoso comprar gasolina!")
      return
    }
    if (divisaoAlcoGaso < 0.7) {
      console.log ("É mais vantajoso comprar álcool!")
      return
    }
    console.log ("Tanto faz comprar álcool ou gasolina.")
  }
  
  // ALGORITMO -->
  var resposta = "s"
  while (resposta.toLowerCase() === "s") {
    console.log ("| -> Descubra qual combustível é o mais vantajoso de ser comprado atualmente <- |")
    console.log (" \n")
    
    var precoGasolina = prompt ("Insira o preço do litro da gasolina: ")
    var precoAlcool = prompt ("Insira o preço do litro do álcool: ")
    var divisaoAlcoGaso = (precoAlcool / precoGasolina).toFixed(2)
      
    console.clear()
    
    console.log (" \n")
    console.log ("  | O valor de vantagem é de: " + divisaoAlcoGaso)
    console.log (" \n")
    
    decisaoValor (divisaoAlcoGaso)
    console.log (" \n")
    console.log (" \n")
    
    var resposta = prompt ("Você deseja repetir o cálculo? S/N ")
    console.clear()
  }
  
  console.log (" \n")
  console.log ("|== PROCESSO ENCERRADO ==|")
  console.log (" \n")
  console.log (" \n")