import { loadJSON } from "./jsonLoader.js";

export function getRandomCEP() {
  const validCEPs = loadJSON('validCEPs.json').ceps;

  const randomIndex = Math.floor(Math.random() * validCEPs.length);

  return validCEPs[randomIndex];
}

export function formatCEP(cep) {
  const cleaned = cep.replace(/\D/g, '');

  if (cleaned.length !== 8) {
    throw new Error('CEP deve ter 8 digitos');
  }

  return `${cleaned.slice(0, 5)}-${cleaned.slice(5)}`;
}

export function generateCEPFormatted(uf = null) {
  const cep = generateCEP(uf);
  return formatCEP(cep);
}

export function removeCEPMask(cep) {
  return cep.replace(/\D/g, '');
}
