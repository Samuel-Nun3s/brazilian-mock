export function generateCPF() {
  const cpfArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // for (let i = 0; i < 9; i++) {
  //   cpfArray.push(Math.floor(Math.random() * 10));
  // }

  const cpf = getCheckDigit(cpfArray);

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
  
}