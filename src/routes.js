import { Router } from "express";
import { getPersonalData } from "./controllers/personalDataController.js";

const routes = Router();

routes.get('/', (req, res) => {
  res.status(201).json({ message: "Seja bem vindo a API Brazilian Mock" });
});

routes.get('/personal-data', getPersonalData);
// routes.get('/address');
// routes.get('/vehicle-data');

export default routes;