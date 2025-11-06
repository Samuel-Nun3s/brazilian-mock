import { findAddress } from "../services/cepService.js";

export const getAddress = async (req, res) => {
  const address = await findAddress();
  
  res.status(200).json({
    success: true,
    address: {
      CEP: address.cep,
      publicPlace: address.logradouro,
      number: Math.floor(Math.random() * 100),
      complement: address.complement || null,
      neighborhood: address.bairro,
      city: address.localidade,
      state: address.estado,
    }
  });
}
