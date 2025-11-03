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

function getAddress(CEP) {
  const CEPFormatted = removeCEPMask(CEP);

  const CEPExistsInCache = isCEPInCache(CEPFormatted);

  if (CEPExistsInCache) {
    return CEPExistsInCache;
  }

  return fetchCEPFromVIACEP(CEPFormatted);
}

async function fetchCEPFromVIACEP(cep) {
  const response = await fetch(APIURLS.VIACEP, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
  }})
}
