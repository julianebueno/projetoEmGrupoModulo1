function pedirPizza() {
  var pizza = prompt("Quantas pizzas você deseja?");
  if (pizza >= 2) {
    alert("Você ganhou um pizza broto!")
  } else {
    alert("Pedido realizado com sucesso!")
    
  }  
}

function pedirSorvete() {
    var sorvete = prompt("Quantos sabores você deseja?");
    if (sorvete >= 3) {
        alert("Você ganhou a cobertura grátis!")
    } else {
        alert("Pedido realizado!")
    }
  }
  
function pedirChopp() {
  var chopp = prompt(
    "Compre 3 chopp e ganhe um grátis.Quantos você deseja comprar?"
  );

  if (chopp >= 3) {
    alert("Você recebeu um chopp grátis!");
  } else {
    alert("Pedido realizado!");
  }
}

function pedirIdade() {
  var idade = prompt("Quantos anos seu filho tem?");
  if (idade < 5) {
    alert("Seu filho precisa de um responsável acompanhando.");

  } else if ( idade > 12) {
    alert("Desculpe, idade não permitida.");
    
  } else{
    alert("Entrada permitida.");
  }
}
