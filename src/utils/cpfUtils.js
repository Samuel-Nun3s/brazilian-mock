export function generateCPF() {
  const digits = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10));

  const firstDigit = calculateCheckDigit(digits, 10);
  const secondDigit = calculateCheckDigit([...digits, firstDigit], 11);

  const cpfArray = [...digits, firstDigit, secondDigit];

  return formatCPF(cpfArray);
}

function calculateCheckDigit(digits, initialWeight) {
  let sum = 0;
  let weight = initialWeight;

  for (const digit of digits) {
    sum += digit * weight;
    weight--;
  }

  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
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
  let cpfString = Array.isArray(cpf) ? cpf.join('') : cpf.replace(/[^\d]/g, '');

  if (cpfString.length !== 11) {
    throw new Error('CPF deve ter 11 digitos');
  }

  return cpfString.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, `$1.$2.$3-$4`);
}