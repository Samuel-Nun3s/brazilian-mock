/*
  Nome completo (distribuição demográfica realista por região/década)
  Nome da mãe e do pai
  CPF (válido, com dígitos verificadores corretos)
  RG (por estado, com formatação específica)
  Data de nascimento (com faixas etárias configuráveis)
  Gênero
  Estado civil
  Nacionalidade/Naturalidade (cidade e UF)
*/

import { generateFullName } from "../services/nameService";

export const getPersonalData = async (req, res) => {

  try {
    const { gender } = req.query.toLowerCase();

    if (gender && !['m', 'f'].includes(gender.toLowerCase())) {
      return res.status(400).json({ 
        error: "Gênero inválido! Use 'M' ou 'F'." 
      });
    }
    
    const name = generateFullName(gender || 'm');
    const motherName = generateFullName('f');
    const fatherName = generateFullName('m');

    res.status(201).json({
      name,
      motherName,
      fatherName,
      CPF: null,
      RG: null,
      dateOfBirth: null,
      gender: setGender(req.query.gender),
      maritalStatus: null,
      nationality: null
    });

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

function setGender(gender) {
  const g = gender.toLowerCase().trim();

  if (g === "m") {
    return "masculino";
  } else if (g === "f") {
    return "feminino";
  }

  throw new Error("Sexo invalido! Selecione 'M' ou 'F'.");
}
