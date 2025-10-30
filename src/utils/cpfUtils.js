export function generateCPF() {
  const cpfArray = [];

  for (let i = 0; i < 9; i++) {
    cpfArray.push(Math.floor(Math.random() * 10));
  }

  let cpf = getCheckDigit(cpfArray);

  cpf = formatCPF(cpf);

  return cpf;
}

function getCheckDigit(cpfArray) {
  if (cpfArray.length < 9 || cpfArray.length > 10) {
    throw new Error('CPF fora do tamanho ideal!');
  }

  let count = 0;

  if (cpfArray.length === 9) {
    count = 10;
  } else if (cpfArray.length === 10) {
    count = 11;
  }

  const cpfSumArray = [];

  cpfArray.forEach((number, index) => {
    cpfSumArray[index] = number * count;

    count--;
  })

  const CPFSum = cpfSumArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const firstCheckDigit = CPFSum % 11;

  if (firstCheckDigit < 2) {
    cpfArray.push(0);
  } else {
    cpfArray.push(11 - firstCheckDigit);
  }

  if (cpfArray.length === 11) {
    formatCPF(cpfArray);

    return cpfArray;
  }

  cpfArray = getCheckDigit(cpfArray);
  return cpfArray;
}

function formatCPF(cpf) {
  let cpfString;

  if (Array.isArray(cpf)) {
    cpfString = cpf.join('');
  } else {
    cpfString = cpf.replace(/[^\d]/g, '');
  }

  if (cpfString.length !== 11) {
    throw new Error('CPF deve ter 11 digitos');
  }

  const part1 = cpfString.slice(0, 3);
  const part2 = cpfString.slice(3, 6);
  const part3 = cpfString.slice(6, 9);
  const part4 = cpfString.slice(9, 11);

  return `${part1}.${part2}.${part3}-${part4}`;
}