const WMI_CODES = [
  '9BW', // Volkswagen Brasil
  '9BG', // Chevrolet Brasil
  '9BF', // Fiat Brasil
  '93H', // Honda Brasil
  '93Y', // Toyota Brasil
  '9BR', // Renault Brasil
  '9BD', // Nissan Brasil
  '8AV', // Hyundai Brasil
  '935', // Ford Brasil
  '9BM', // Mercedes-Benz Brasil
  '9BJ', // Jeep Brasil
  '93X', // Mitsubishi Brasil
  '9BK', // Citroën Brasil
  '9BP', // Peugeot Brasil
];

const ALLOWED_LETTERS = 'ABCDEFGHJKLMNPRSTUVWXYZ';
const ALLOWED_NUMBERS = '0123456789';
const ALLOWED_CHARS = ALLOWED_LETTERS + ALLOWED_NUMBERS;

const YEAR_CODES = {
  2010: 'A', 2011: 'B', 2012: 'C', 2013: 'D', 2014: 'E',
  2015: 'F', 2016: 'G', 2017: 'H', 2018: 'J', 2019: 'K',
  2020: 'L', 2021: 'M', 2022: 'N', 2023: 'P', 2024: 'R',
  2025: 'S', 2026: 'T', 2027: 'V', 2028: 'W', 2029: 'X',
  2030: 'Y'
};

// Valores para cálculo do dígito verificador
const WEIGHTS = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2];

function getRandomChar() {
  return ALLOWED_CHARS[Math.floor(Math.random() * ALLOWED_CHARS.length)];
}

function getRandomWMI() {
  return WMI_CODES[Math.floor(Math.random() * WMI_CODES.length)];
}

function charToValue(char) {
  // Converte caracteres para valores numéricos conforme padrão ISO
  if (char >= '0' && char <= '9') {
    return parseInt(char);
  }
  
  const values = {
    'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8,
    'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'P': 7, 'R': 9,
    'S': 2, 'T': 3, 'U': 4, 'V': 5, 'W': 6, 'X': 7, 'Y': 8, 'Z': 9
  };
  
  return values[char] || 0;
}

function calculateCheckDigit(chassi) {
  // Calcula o dígito verificador (posição 9)
  let sum = 0;
  
  for (let i = 0; i < 17; i++) {
    if (i === 8) continue; // Pula a posição do dígito verificador
    sum += charToValue(chassi[i]) * WEIGHTS[i];
  }
  
  const remainder = sum % 11;
  return remainder === 10 ? 'X' : remainder.toString();
}

export function generateChassi(wmi = null, year = null) {
  // Usa o WMI fornecido ou gera um aleatório
  const selectedWMI = wmi || getRandomWMI();
  
  // Posições 4-8: VDS (Vehicle Descriptor Section) - 5 caracteres
  let vds = '';
  for (let i = 0; i < 5; i++) {
    vds += getRandomChar();
  }
  
  // Posição 9: Dígito verificador (será calculado depois)
  const checkDigitPos = 8;
  
  // Posição 10: Código do ano
  const yearCode = year && YEAR_CODES[year] ? YEAR_CODES[year] : 'L'; // Default 2020
  
  // Posição 11: Código da fábrica
  const plantCode = ALLOWED_CHARS[Math.floor(Math.random() * ALLOWED_CHARS.length)];
  
  // Posições 12-17: Número sequencial (6 dígitos numéricos)
  let sequentialNumber = '';
  for (let i = 0; i < 6; i++) {
    sequentialNumber += ALLOWED_NUMBERS[Math.floor(Math.random() * ALLOWED_NUMBERS.length)];
  }
  
  // Monta o chassi sem o dígito verificador
  let chassi = selectedWMI + vds + '0' + yearCode + plantCode + sequentialNumber;
  
  // Calcula o dígito verificador
  const checkDigit = calculateCheckDigit(chassi);
  
  // Substitui o '0' temporário pelo dígito verificador correto
  chassi = chassi.substring(0, 8) + checkDigit + chassi.substring(9);
  
  return chassi;
}