export function generateRG() {
  const digits = Array.from({ length: 8 }, () => Math.floor(Math.random() * 10))

  const checkDigit = calculateCheckDigit(digits);

  const RGArray = [...digits, checkDigit];

  return formatRG(RGArray);
}

function calculateCheckDigit(digits) {
  let sum = 0;
  let weight = 2;

  for (const digit of digits) {
    sum += digit * weight;
    weight++;
  }

  const result = 11 - (sum % 11);
  let checkDigit;

  if (result === 10) {
    checkDigit = "X";
  } else if (result === 11) {
    checkDigit = 0;
  } else {
    checkDigit = result;
  }

  return checkDigit;
}

function formatRG(RG) {
  let RGString = Array.isArray(RG) ? RG.join('') : RG.replace(/[^\d]/g, '');

  if (RGString.length !== 9) {
    throw new Error('RG deve ter 9 digitos');
  }

  return RGString.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, `$1.$2.$3-$4`);
}