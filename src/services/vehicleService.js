import { loadJSON } from '../utils/jsonLoader.js';
import { generateChassi } from '../utils/chassiGenerator.js';
import { generateRENAVAM } from '../utils/renavamGenerator.js';
import { generateOldPlate, generateMercosulPlate } from '../utils/plateGenerator.js'

function pickRandomVehicle() {
  const data = loadJSON('vehicles.json');
  const vehicles = data.vehicles;

  const brand = vehicles[Math.floor(Math.random() * vehicles.length)];

  const model = brand.models[Math.floor(Math.random() * brand.models.length)];

  return {
    brand: brand.brand,
    wmi: brand.wmi,
    model: model.name,
    yearRange: model.yearRange
  };
}

function randomYearInRange([min, max]) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
  const data = loadJSON('vehicles.json');
  const colors = data.colors;
  return colors[Math.floor(Math.random() * colors.length)];
}

export function generateVehicleData() {
  const vehicle = pickRandomVehicle();
  
  const anoFabricacao = randomYearInRange(vehicle.yearRange);
  
  const anoModelo = Math.random() > 0.3 ? anoFabricacao + 1 : anoFabricacao;
  
  const chassi = generateChassi(vehicle.wmi, anoFabricacao);
  
  const placaAntiga = generateOldPlate();
  const placaMercosul = generateMercosulPlate();
  
  const renavam = generateRENAVAM();
  
  const cor = getRandomColor();
  
  return {
    marca: vehicle.brand,
    modelo: vehicle.model,
    anoFabricacao,
    anoModelo,
    chassi,
    placa: {
      antiga: placaAntiga,
      mercosul: placaMercosul
    },
    renavam,
    cor
  };
}