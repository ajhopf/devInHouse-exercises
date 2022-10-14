const numerosPrimos = [];

for (let i = 2; i < 1001; i++) {
  let divisaoExata = 0;
  for (let j = 1; j <= i; j++) {
    if (i % j === 0) {
      divisaoExata++;
    }
  }
  if (divisaoExata === 2) {
    numerosPrimos.push(i);
  }
}

console.log(
  `Existem ${
    numerosPrimos.length
  } números primos entre 0 e 1000.\n\nSão eles: ${numerosPrimos.join(', ')}`
);
