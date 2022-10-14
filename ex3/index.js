const tabuada = () => {
  let numero = parseInt(prompt('Digite um número'));

  while (isNaN(numero)) {
    numero = parseInt(prompt('Digite um número válido'));
  }

  let tabuadaArray = [];

  for (let i = 0; i <= 10; i++) {
    tabuadaArray.push(`${numero} x ${i} = ${numero * i}\n`);
  }

  alert(tabuadaArray.join(''));
};

tabuada();
