//-----------------------FUNÇAO COMPRAR PIZZA-------------------------------------//
function pedirPizza() {
  alert("PROMO!! Compre 2 ou mais pizzas e ganhe uma broto.")
  var pizza = prompt("Quantas pizzas você deseja?");
  if (pizza >= 2) {
    alert("Você ganhou um pizza broto! Pedido realizado.")
  } else if (pizza > 0) {
    alert("Pedido realizado com sucesso!")
  }

}
//------------------------FUNÇAO COMPRAR SORVETE------------------------------------//

function pedirSorvete() {
  alert("DESCONTO!! Sorvetes acima de 3 sabores ganha 50% de desconto.")
  var sorvete = prompt("Quantos sabores você deseja?");
  if (sorvete >= 3) {
    alert("Pedido com 50% de desconto realizado! Retire no balcão seu pedido. Obrigado!")
  } else if (sorvete < 2) {
    alert("Pedido realizado!")
  }
}
//---------------------------FUNCAO COMPRAR CHOPP---------------------------------//
function pedirChopp() {
  alert("GANHE UM CHOPP GRATIS!! comprando 2 o terceiro é Gratis.")
  var chopp = prompt("Quantos chopps você deseja comprar?");

  if (chopp >= 2) {
    alert("Ganhou Chopp grátis! Pedido realizado.");
  } else if (chopp > 0) {
    alert("Pedido realizado!");
  }
}
//-----------------------FUNCAO COMPRAR PASSE-------------------------------------//
function pedirIdade() {
  alert("Criança até 5 anos não pagam. Idade maxima permitida 12 anos.")
  var idade = prompt("Quantos anos seu filho tem?");

  if (idade <= 5) {
    alert("Entrada Gratis, apresente o documento na entrada.");

  } else if (idade > 12) {
    alert("Desculpe, idade não permitida.");

  } else {
    alert("Entrada solicitada! Apresente o documento e realize o pagamento na entrada.");
  }
}
