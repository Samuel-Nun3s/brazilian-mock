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

export const getPersonalData = async (req, res) => {

  try {
    const { gender } = req.query;

    if (gender && !['m', 'f'].includes(gender.toLowerCase())) {
      return res.status(400).json({ 
        error: "Gênero inválido! Use 'M' ou 'F'." 
      });
    }
    
    const genderFormatted = setGender(req.query.gender);
    
    

    const data = {
      name: null,
      motherName: null,
      fatherName: null,
      CPF: null,
      RG: null,
      dateOfBirth: null,
      gender: genderFormatted,
      maritalStatus: null,
      nationality: null
    }
  
    res.status(201).json({ result: data });

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
