let valor = parseInt(
  prompt('Digite um número para ser o valor inicial da progressão aritmética')
);

while (isNaN(valor)) {
  valor = parseInt(
    prompt(
      'Você não digitou um número. Digite um número para ser o valor inicial da progressão aritmética'
    )
  );
}

let raiz = parseInt(
  prompt('Digite um número para ser a raiz da progressão aritmética')
);

while (isNaN(raiz)) {
  raiz = parseInt(
    prompt(
      'Você não digitou um número. Digite um número para ser a raiz da progressão aritmética'
    )
  );
}

let valores = [];

for (let i = 1; i <= 10; i++) {
  if (i === 1) {
    valores.push(valor);
  } else {
    valor = valor + raiz;
    valores.push(valor);
  }
}

console.log(valores);
alert(
  `Valor inicial: ${valores[0]}\nRaiz: ${raiz}\nP.A.=${valores.join(', ')}`
);
