import { Router } from "express";

const routes = Router();

routes.get('/personal-data');
routes.get('/documents');
routes.get('/address');
routes.get('/contact');
routes.get('/financial-data');
routes.get('/vehicle-data');
routes.get('/professional-data');
routes.get('/additional-contextual-data');

export default routes;