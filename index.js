import app from "./src/app.js";
import dotenv from "dotenv";
import { preloadAllData } from "./src/utils/jsonLoader.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

await preloadAllData();

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
