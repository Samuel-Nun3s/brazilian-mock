import { Router } from "express";
import { getPersonalData } from "./controllers/personalDataController.js";
import { getAddress } from "./controllers/addressController.js";

const routes = Router();

routes.get('/', (req, res) => {
  res.status(201).json({ message: "Seja bem vindo a API Brazilian Mock" });
});

routes.get('/personal-data', getPersonalData);
routes.get('/address', getAddress);
// routes.get('/vehicle-data');

export default routes;