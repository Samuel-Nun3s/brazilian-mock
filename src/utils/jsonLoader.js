import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cache = {};

/**
 * Carrega um arquivo JSON e mantém em cache
 * @param {string} filename - Nome do arquivo (ex: 'first-names-male.json')
 * @returns {Object} - Dados do JSON
 */
export function loadJSON(filename) {
  if (cache[filename]) {
    console.log(`✅ Cache hit: ${filename}`);
    return cache[filename];
  }

  try {
    const filePath = path.join(__dirname, '../../data', filename);

    console.log(`📂 Carregando: ${filename}`);

    const fileContent = fs.readFileSync(filePath, 'utf-8');

    const data = JSON.parse(fileContent);

    cache[filename] = data;

    console.log(`✅ Carregado e cacheado: ${filename}`);

    return data;
  } catch (error) {
    console.error(`❌ Erro ao carregar ${filename}:`, error.message);
    throw new Error(`Nao foi possivel carregar o arquivo ${filename}`);
  }
}

/**
 * Carrega um arquivo JSON de forma assíncrona
 * @param {string} filename - Nome do arquivo
 * @returns {Promise<Object>} - Dados do JSON
 */
export async function loadJSONAsync(filename) {
  if (cache[filename]) {
    console.log(`✅ Cache hit: ${filename}`);
    return cache[filename];
  }

  try {
    const filePath = path.join(__dirname, '../../data', filename);

    console.log(`📂 Carregando (async): ${filename}`);

    const fileContent = await fs.promises.readFile(filePath, 'utf-8');

    const data = JSON.parse(fileContent);

    cache[filename] = data;

    console.log(`✅ Carregado e cacheado: ${filename}`);
    
    return data;
  } catch (error) {
    console.error(`❌ Erro ao carregar ${filename}:`, error.message);
    throw new Error(`Não foi possível carregar o arquivo ${filename}`);
  }
}

/**
 * Limpa o cache (útil para testes ou recarregar dados)
 * @param {string} filename - Nome do arquivo (opcional, se não passar limpa tudo)
 */
export function clearCache(filename = null) {
  if (filename) {
    delete cache[filename];
    console.log(`🗑️ Cache limpo: ${filename}`);
  } else {
    Object.keys(cache).forEach(key => delete cache[key]);
    console.log(`🗑️ Todo cache limpo`);
  }
}

/**
 * Pré-carrega todos os JSONs na inicialização da aplicação
 * Recomendado chamar ao iniciar o servidor
 */
export async function preloadAllData() {
  console.log('🚀 Pré-carregando dados...');
  
  const files = [
    'firstNamesMale.json',
    'firstNamesFemale.json',
    'lastNames.json'
  ];

  try {
    await Promise.all(files.map(file => loadJSONAsync(file)));
    console.log('✅ Todos os dados pré-carregados com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao pré-carregar dados:', error.message);
    throw error;
  }
}
