import { generateCEP } from "../utils/cepGenerator";
import { loadJSON } from "../utils/jsonLoader";

function getAddressesInCache() {
  const data = loadJSON('addressesCache.json');
  return data;
}

function isCEPInCache(cep) {
  const addressesInCache = getAddressesInCache();

  if (addressesInCache[cep]) {
    return true;
  }

  return false;
}

