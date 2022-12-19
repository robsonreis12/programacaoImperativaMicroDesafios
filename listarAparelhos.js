// Crie um arquivo listarAparelhos.js
// Importe o conjunto de dados de consertos.js e crie um novo conjunto de dados com o
// nomeaparelhosProntos e filtre somente os aparelhos que estão marcados pronto como true
// e exporte esse novo conjunto de dados como aparelhosProntos.
// Exporte 

const consertos = require("./conserto")

const aparelhosProntos = consertos.filter(function(aparelhosProntos){
    return aparelhosProntos.pronto == true
});

// console.log(aparelhosProntos)

module.exports = aparelhosProntos;