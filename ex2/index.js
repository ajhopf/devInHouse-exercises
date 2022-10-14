const classificaIdade = () => {
  let validaIdade = true;

  while (validaIdade) {
    const idade = parseInt(prompt('Digite a sua idade'));
    validaIdade = false;

    if (idade >= 16 && idade <= 64) {
      alert('Classificação: Adulto');
    } else if (idade < 16 && idade > 0) {
      alert('Classificação: Jovem');
    } else if (idade > 64) {
      alert('Classificação: Idoso');
    } else {
      alert('Digite uma idade válida');
      validaIdade = true;
    }
  }
};

classificaIdade();
