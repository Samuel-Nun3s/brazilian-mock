// CEP
// Logradouro
// Numero
// Complemento
// Bairro
// Cidade
// Estado (UF)
// Coordenadas geograficas

import { findAddress } from "../services/cepService.js";

export const getAddress = async (req, res) => {
  const address = findAddress();
  
  res.status(200).json({
    message: "Tudo certo aqui chefe!",
    address: address
  });
}
