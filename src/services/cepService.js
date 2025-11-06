import { generateCEP, removeCEPMask } from "../utils/cepGenerator.js";
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
    const CEP = generateCEP();

    console.log("CEP =>", CEP);

    const CEPFormatted = removeCEPMask(CEP);

    const CEPExistsInCache = isCEPInCache(CEPFormatted);

    if (CEPExistsInCache) {
      return CEPExistsInCache;
    }

    result = await fetchCEPFromVIACEP(CEPFormatted);
    console.log("result =>", result);
  } while (result.erro === 'true');

  console.log(result);
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
