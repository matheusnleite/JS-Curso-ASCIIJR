//VAR X LET X CONST

//VAR = pode mudar o valor, funciona dentro de qualquer escopo

//LET = variavel unica, nao pode ser redeclarada, so funciona dentro do escopo que esta trabalhando

//CONST = nao pode mudar o valor, nao pode ser redeclarada

/*  OBJETOS
2 Objetos são basicamente variáveis com muitos valores dentro.
3
4 Ex: const carro = {marca: "ford", modelo:"ka", ano: 2015}
5
6 Os valores dentro de um objeto são chamados propriedades.
7
8 Objetos também podem ter métodos. Um Método é uma função colocadas dentro 9 de uma propriedade. */

const carro = {
  marca: "ford",
  modelo: "ka",
  ano: 2015,
  placa: "ABC-1234",
  buzina: function () {
    alert("BIIIIIIIIIIIIIIIIII");
  },
  completo: function () {
    return "A marca é " + this.marca + " e o modelo é " + this.modelo;
  },
};

console.log(carro.completo());
