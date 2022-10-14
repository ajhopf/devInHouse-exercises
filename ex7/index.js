const dataAtual = new Date();
const diaAtual = dataAtual.getDate();
let mesAtual = dataAtual.getMonth() + 1;

if (diaAtual >= 22) {
  if (mesAtual === 12) {
    mesAtual = 1;
  } else {
    mesAtual++;
  }
}

if (mesAtual >= 10) {
  alert('Primavera');
} else if (mesAtual >= 7) {
  alert('Inverno');
} else if (mesAtual >= 4) {
  alert('Outono');
} else {
  alert('Verão');
}
