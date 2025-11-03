import { generateFullName } from "../services/nameService.js";
import { generateCPF } from "../utils/cpfUtils.js";
import { generateRG } from "../utils/rgUtils.js";

export const getPersonalData = async (req, res) => {

  try {
    const { gender } = req.query;

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
      CPF: generateCPF(),
      RG: generateRG(),
      dateOfBirth: generateBirthDate(),
      gender: setGender(req.query.gender),
      maritalStatus: generateMaritalStatus(),
      nationality: "Brasileiro(a)"
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

function generateBirthDate() {
  const today = new Date();
  
  const minDate = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  );
  
  const maxDate = new Date(
    today.getFullYear() - 100,
    today.getMonth(),
    today.getDate()
  );
  
  const minTimestamp = minDate.getTime();
  const maxTimestamp = maxDate.getTime();
  const randomTimestamp = Math.floor(
    Math.random() * (minTimestamp - maxTimestamp) + maxTimestamp
  );
  
  const birthDate = new Date(randomTimestamp);
  
  const day = String(birthDate.getDate()).padStart(2, '0');
  const month = String(birthDate.getMonth() + 1).padStart(2, '0');
  const year = birthDate.getFullYear();
  
  return `${day}/${month}/${year}`;
}

function generateMaritalStatus() {
  const options = ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viuvo(a)'];

  const randomIndex = Math.floor(Math.random() * options.length);

  return options[randomIndex];
}
