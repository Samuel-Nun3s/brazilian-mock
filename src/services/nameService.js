import { loadJSON } from "../utils/jsonLoader.json";
import { weightedRandom } from "../utils/weightedRandom.js";

function getMaleNames() {
  const data = loadJSON('firstNamesMale.json');
  return data;
}

function getFemaleNames() {
  const data = loadJSON('firstNamesFemale.json');
  return data;
}
