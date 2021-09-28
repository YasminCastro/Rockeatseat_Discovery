let familia = {
  receitas: [5000, 400],
  despesas: [150, 300, 200],
};

//soma os itens de um array
function somar(array) {
  let soma = 0;
  for (let i in array) {
    soma += array[i];
  }
  return soma;
}

function calcularTotal() {
  const totalReceita = somar(familia.receitas);
  const totalDespesas = somar(familia.despesas);

  const total = totalReceita - totalDespesas;

  if (total < 0) {
    console.log(
      `Você está com saldo negativo. Seu saldo é de ${total.toFixed(2)}`
    );
  } else {
    console.log(
      `Você está com saldo positivo. Seu saldo é de ${total.toFixed(2)}`
    );
  }
}
calcularTotal();
