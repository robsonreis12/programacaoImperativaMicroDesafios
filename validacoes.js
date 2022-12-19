// Micro desafio - Passo 2
// Crie um arquivo de validações com o nome validacoes.js
// Importe no arquivo validações o arquivo de consertos, percorra todos os itens do conjunto
// de dados consertos e valide se as chaves de cada um dos objetos possuem o tipo correto,
// por exemplo, valide se aparelho é uma string, se itens é um array, se valores também é um
// array e se pronto é do tipo boolean.

let consertos = require("./conserto")

function verifyPropertyAparelho(array) {
    let resultOfValidationAparelho = true
    while (resultOfValidationAparelho) {
      array.forEach((element) => {
        if (typeof element.aparelho === 'string') {
          resultOfValidationAparelho = true
        } else {
          resultOfValidationAparelho = false
        }
      })
      return resultOfValidationAparelho
    }
  }
  
  function verifyPropertyValores(array) {
    let resultOfValidationValores = true
    while (resultOfValidationValores) {
      array.forEach((element) => {
        if (Array.isArray(element.valores)) {
          resultOfValidationValores = true
        } else {
          resultOfValidationValores = false
        }
      })
      return resultOfValidationValores
    }
  }
  
  function verifyPropertyItensConsertados(array) {
    let resultOfValidationItensConsertados = true
    while (resultOfValidationItensConsertados) {
      array.forEach((element) => {
        if (Array.isArray(element.itensConsertados)) {
          resultOfValidationItensConsertados = true
        } else {
          resultOfValidationItensConsertados = false
        }
      })
      return resultOfValidationItensConsertados
    }
  }
  
  function verifyPropertyPronto(array) {
    let resultOfValidationPronto = true
    while (resultOfValidationPronto) {
      array.forEach((element) => {
        if (typeof element.pronto === 'boolean') {
          resultOfValidationPronto = true
        } else {
          resultOfValidationPronto = false
        }
      })
      return resultOfValidationPronto
    }
  }
  
  
  console.log('verificação de aparelhos como string é: ' + verifyPropertyAparelho(consertos))
  console.log('verificação de itens consertados como array é: ' + verifyPropertyItensConsertados(consertos))
  console.log('verificação de valores como array é: ' + verifyPropertyValores(consertos))
  console.log('verificação de pronto como booleano é: ' + verifyPropertyPronto(consertos));

