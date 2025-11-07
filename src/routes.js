import { Router } from "express";
import { getPersonalData } from "./controllers/personalDataController.js";
import { getAddress } from "./controllers/addressController.js";
import { getVehicleData } from "./controllers/vehicleDataController.js";

const routes = Router();

routes.get('/', (req, res) => {
  res.status(201).json({ message: "Seja bem vindo a API Brazilian Mock" });
});

routes.get('/personal-data', getPersonalData);
routes.get('/address', getAddress);
routes.get('/vehicle-data', getVehicleData);

export default routes;