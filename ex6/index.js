let calculo = prompt(
  'Qual tipo de cálculo você deseja fazer? Opções: +, -, * ou /'
);

while (
  calculo !== '+' &&
  calculo !== '-' &&
  calculo !== '*' &&
  calculo !== '/'
) {
  calculo = prompt(
    'Qual tipo de cálculo você deseja fazer? Opções: +, -, * ou /'
  );
}

let primeiroValor = parseInt(prompt('Qual o primeiro valor para o cálculo?'));

while (isNaN(primeiroValor)) {
  primeiroValor = parseInt(
    prompt(
      'Por favor, digite um número para ser o primeiro valor para o cálculo'
    )
  );
}

let segundoValor = parseInt(prompt('Qual o segundo valor para o cálculo?'));

while (isNaN(segundoValor)) {
  segundoValor = parseInt(
    prompt(
      'Por favor, digite um número para ser o segundo valor para o cálculo'
    )
  );
}

let resultado;

if (calculo === '+') {
  resultado = primeiroValor + segundoValor;
} else if (calculo === '-') {
  resultado = primeiroValor - segundoValor;
} else if (calculo === '*') {
  resultado = primeiroValor * segundoValor;
} else {
  resultado = primeiroValor / segundoValor;
}

let mensagem = `O resultado do seu cálculo é ${resultado}. \nCálculo: ${primeiroValor} ${calculo} ${segundoValor}`;

alert(mensagem);
