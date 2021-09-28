function calcularNota() {
  let notaElemento = document.getElementById("nota").value;
  var nota = parseFloat(notaElemento);
  var resultado = document.getElementById("resultado");

  if (nota >= 90) {
    console.log("Sua nota é A");
    resultado.innerHTML = "Sua nota é A";
  } else if (80 <= nota && nota <= 89) {
    resultado.innerHTML = "Sua nota é B";
    console.log("Sua nota é B");
  } else if (70 <= nota && nota <= 79) {
    console.log("Sua nota é C");
    resultado.innerHTML = "Sua nota é C";
  } else if (60 <= nota && nota <= 69) {
    console.log("Sua nota é D");
    resultado.innerHTML = "Sua nota é D";
  } else {
    console.log("Sua nota é F");
    resultado.innerHTML = "Sua nota é F";
  }
}
