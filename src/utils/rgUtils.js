export function generateRG() {
  const digits = [1, 2, 3, 4, 5, 6, 7, 8];
  // const digits = Array.from({ length: 8 }, () => Math.floor(Math.random() * 10))

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

  const result = (sum / 11) - 11;
  
  return result;
}