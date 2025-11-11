// Placa (antiga/mercosul)
// Renavam
// Chassi
// Marca modelo
// Ano de fabricacao
// Cor

import { generateMercosulPlate, generateOldPlate } from "../utils/plateGenerator.js";

export const getVehicleData = async (req, res) => {


  res.status(200).json({
    oldPlate: generateOldPlate(),
    mercosulPlate: generateMercosulPlate(),
    renavam: ""
  });
}
