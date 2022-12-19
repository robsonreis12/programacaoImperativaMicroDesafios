// Micro desafio - Passo 4
// Crie um último arquivo com o nome entrega.js e importe aparelhosProntos de
// listarAparelhos e faça a soma dos valores de cada um dos aparelhos e exiba no console a
// informação do aparelho juntamente com o valor total de cada um dos aparelhos

const aparelhosProntos = require("./listarAparelhos")


aparelhosProntos.forEach((element) =>{
    console.log('aparelho: \n' + element.aparelho);
    console.log('itens consertados: \n'+ element.itensConsertados);
    console.log('valor total: \n'+ element.valores.reduce((valortotal, valoratual)=>{return valoratual + valortotal},0)
)})
