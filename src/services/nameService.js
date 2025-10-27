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

function getLastNames() {
  const data = loadJSON('lastNames.json');
  return data;
}

export function generateFirstName(gender) {
  const names = gender.toLowerCase() === 'm' ? getMaleNames() : getFemaleNames();
  return weightedRandom(names);
}

export function generateLastName() {
  const lastNames = getLastNames();
  return weightedRandom(lastNames);
}

export function generateFullName(gender) {
  const firstName = generateFirstName(gender);
  const lastName1 = generateLastName();
  const lastName2 = generateLastName();

  return `${firstName} ${lastName1} ${lastName2}`;
}
