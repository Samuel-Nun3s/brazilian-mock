const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMBERS = '0123456789';

function getRandomLetter() {
  return LETTERS[Math.floor(Math.random() * LETTERS.length)];
}

function getRandomNumber() {
  return NUMBERS[Math.floor(Math.random() * NUMBERS.length)];
}

export function generateOldPlate() {
  const letters = Array.from({ length: 3 }, () => getRandomLetter()).join('');
  const numbers = Array.from({ length: 4 }, () => getRandomNumber()).join('');
  return `${letters}-${numbers}`;
}

export function generateMercosulPlate() {
  const part1 = Array.from({ length: 3 }, () => getRandomLetter()).join('');
  const num1 = getRandomNumber();
  const letter = getRandomLetter();
  const part2 = Array.from({ length: 2 }, () => getRandomNumber()).join('');
  return `${part1}${num1}${letter}${part2}`;
}

