let number = NaN;

while (isNaN(number)) {
  number = parseInt(prompt('Digite um número'));
}

const numeroDeParImpar = () => {
  const numeroInicial = number;

  let pares = 0;
  let impares = 0;

  if (number < 0) {
    number *= -1;
  }

  //considerando 0 como número par
  for (number; number >= 0; number--) {
    if (number % 2 === 0) {
      pares++;
    } else {
      impares++;
    }
  }

  alert(
    `Do 0 até o número ${numeroInicial} existem ${pares} números pares e ${impares} números ímpares.`
  );
};

numeroDeParImpar();
11;
