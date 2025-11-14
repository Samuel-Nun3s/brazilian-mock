import { generateVehicleData } from "../services/vehicleService.js";

export const getVehicleData = async (req, res) => {
  try {
    const data = generateVehicleData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
