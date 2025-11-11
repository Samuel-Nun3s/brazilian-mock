const MULTIPLIERS = [3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

function generateFirst10Digits() {
  let digits = '';

  for (let i = 0; i < 10; i++) {
    digits += Math.floor(Math.random() * 10);
  }

  return digits;
}

function calculateVerifierDigit(first10Digits) {
  let sum = 0;

  for (let i = 0; i < 10; i++) {
    const digit = parseInt(first10Digits[i]);
    const multiplier = MULTIPLIERS[i];
    sum += digit * multiplier;
  }

  const remainder = sum % 11;

  const verifierDigit = remainder < 2 ? 0 : 11 - remainder;

  return verifierDigit;
}

export function generateRENAVAM() {
  
}