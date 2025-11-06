import { getRandomCEP, removeCEPMask } from "../utils/cepGenerator.js";
import { loadJSON } from "../utils/jsonLoader.js";
import { APIURLS } from "../config/api.js";

function getAddressesInCache() {
  const data = loadJSON('addressesCache.json');
  return data;
}

function isCEPInCache(cep) {
  const addressesInCache = getAddressesInCache();

  if (addressesInCache[cep]) {
    return addressesInCache[cep];
  }

  return false;
}

export async function findAddress() {
  let result;
  
  do {
    const CEP = getRandomCEP();

    const CEPFormatted = removeCEPMask(CEP);

    const CEPExistsInCache = isCEPInCache(CEPFormatted);

    if (CEPExistsInCache) {
      return CEPExistsInCache;
    }

    result = await fetchCEPFromVIACEP(CEPFormatted);
  } while (result.erro === 'true');

  return result;
}

async function fetchCEPFromVIACEP(cep) {
  const response = await fetch(`${APIURLS.VIACEP}/${cep}/json`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
  }})

  const data = await response.json();

  return data;
}
