const CEPRANGES = {
  SP: [1000, 19999],
  RJ: [20000, 28999],
  MG: [30000, 39999],
  BA: [40000, 48999],
  RS: [90000, 99999]
}

export function generateCEP(uf = null) {
  let selectedUF = uf;

  if (!selectedUF) {
    const states = Object.keys(CEPRANGES);
    console.log("states =>", states);
    const randomIndex = Math.floor(Math.random() * states.length);
    console.log("randomIndex =>", randomIndex)
    selectedUF = states[randomIndex];
  }

  if (!CEPRANGES[selectedUF]) {
    throw new Error(`Estado ${selectedUF} nao possui o range de CEP definido`);
  }

  const [min, max] = CEPRANGES[selectedUF];

  const firstFive = Math.floor(Math.random() * (max - min + 1)) + min;

  const lastThree = Math.floor(Math.random() * 1000);

  const firstFiveStr = String(firstFive).padStart(5, '0');
  const lastThreeStr = String(lastThree).padStart(3, '0');

  return firstFiveStr + lastThreeStr;
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
