// Micro desafio - Passo 1
// Crie arquivo com nome consertos.js
// Nesse arquivo crie um conjunto de dados de objetos com o nome consertos
// Os atributos desse objeto são: aparelho (string), itens consertados (array de strings), valores
// (array de números) e pronto (booleano).
// Deve ter ao menos 15 objetos do conjunto de dados consertos.

let consertos = [
  {
    aparelho: 'Samsung A10',
    itensConsertados: [
      'tela',
      'teclado'
    ],
    valores: [
      100,
      80
    ], 
    pronto: true  
  },
  {
    aparelho: 'iPhone 10',
    itensConsertados: [
      'bateria',
      'botao power'
    ],
    valores: [
      250,
      170
    ], 
    pronto: true  
  },
  {
    aparelho: 'Xiaomi 2020',
    itensConsertados: [
      'tela',
      'volume'
    ],
    valores: [
      100,
      140
    ], 
    pronto: true  
  },
  {
    aparelho: 'iPhone 14',
    itensConsertados: [
      'carcaca',
      'tela'
    ],
    valores: [
      150,
      250
    ], 
    pronto: false  
  },
  {
    aparelho: 'Samsung Minigalaxy',
    itensConsertados: [
      'plug carregador',
      'volume'
    ],
    valores: [
      50,
      75
    ], 
    pronto: false  
  },
  {
    aparelho: 'Samsung Galaxy 200',
    itensConsertados: [
      'bateria',
      'plug fone'
    ],
    valores: [
      230,
      200
    ], 
    pronto: false  
  },
  {
    aparelho: 'LG ONE',
    itensConsertados: [
      'placa mae',
      'teclado'
    ],
    valores: [
      500,
      80
    ], 
    pronto: false  
  },
  {
    aparelho: 'Motorola E32',
    itensConsertados: [
      'ligar',
      'plug fone'
    ],
    valores: [
      100,
      50
    ], 
    pronto: true  
  },
  {
    aparelho: 'Moto G6',
    itensConsertados: [
      'volume',
      'plug fone'
    ],
    valores: [
      80,
      40
    ], 
    pronto: true  
  },
  {
    aparelho: 'Moto G7',
    itensConsertados: [
      'ligar',
      'teclado'
    ],
    valores: [
      80,
      50
    ], 
    pronto: false  
  },
  {
    aparelho: 'Note 11 Pro',
    itensConsertados: [
      'teclado',
      'botao ligar'
    ],
    valores: [
      90,
      70
    ], 
    pronto: false  
  },
  {
    aparelho: 'Positivo Twist',
    itensConsertados: [
      'bateria',
      'placa mae'
    ],
    valores: [
      40,
      30
    ], 
    pronto: false
  },
  {
    aparelho: 'Positivo P26',
    itensConsertados: [
      'volume',
      'ligar'
    ],
    valores: [
      20,
      40
    ], 
    pronto: false  
  },
  {
    aparelho: 'Xiaomi Redmi 9',
    itensConsertados: [
      'teclado',
      'tela'
    ],
    valores: [
      110,
      200
    ], 
    pronto: false  
  },
  {
    aparelho: 'Nokia 110',
    itensConsertados: [
      'ligar',
      'teclado'
    ],
    valores: [
      30,
      40
    ], 
    pronto: false  
  } 
];

module.exports = consertos;

