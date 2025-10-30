export function generateCPF() {
  const digits = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10));

  const firstDigit = calculateCheckDigit(digits, 10);
  const secondDigit = calculateCheckDigit([...digits, firstDigit], 11);

  const CPFArray = [...digits, firstDigit, secondDigit];

  return formatCPF(CPFArray);
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

function formatCPF(CPF) {
  let CPFString = Array.isArray(CPF) ? CPF.join('') : CPF.replace(/[^\d]/g, '');

  if (CPFString.length !== 11) {
    throw new Error('CPF deve ter 11 digitos');
  }

  return CPFString.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, `$1.$2.$3-$4`);
}