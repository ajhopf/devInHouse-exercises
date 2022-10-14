const numerosArray = [];
let stop = false;

const somaNumeros = () => {
  let newNumber = NaN;

  while (isNaN(newNumber)) {
    newNumber = parseInt(prompt('Digite um número para adicionar à soma'));
  }

  if (newNumber !== -1) {
    numerosArray.push(newNumber);
  } else {
    stop = true;
  }
};

while (!stop) {
  somaNumeros();
}

const sum = numerosArray.reduce((total, current) => total + current, 0);

alert(`${numerosArray.join(' + ')} =  ${sum}`);
