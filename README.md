# BrazilianMock API

Uma API REST para geração de dados fictícios brasileiros, ideal para testes, desenvolvimento e prototipagem de aplicações.

## 📋 Sobre o Projeto

O **BrazilianMock** foi desenvolvido para resolver um problema comum no desenvolvimento de APIs e aplicações: a necessidade de dados fictícios realistas para testes. Em vez de inserir manualmente dados de exemplo ou usar geradores genéricos que não seguem padrões brasileiros, esta API gera automaticamente dados válidos seguindo as normas e formatos utilizados no Brasil.

## ✨ Funcionalidades

A API oferece três endpoints principais para geração de dados:

- **Dados Pessoais**: CPF, RG, CNH, nome completo, data de nascimento, etc.
- **Dados de Endereço**: CEP, logradouro, bairro, cidade, estado, seguindo formato dos Correios
- **Dados Veiculares**: Chassi, placa (antiga e Mercosul), RENAVAM, marca, modelo, ano, cor

## 🚀 Tecnologias

- **Node.js** - Ambiente de execução JavaScript
- **Express 5.1.0** - Framework web minimalista
- **dotenv 17.2.3** - Gerenciamento de variáveis de ambiente

## 📁 Estrutura do Projeto

```
brazilian-mock/
├── data/                 # Arquivos JSON com dados base
├── src/
│   ├── config/          # Configurações da aplicação
│   ├── controllers/     # Controladores das rotas
│   ├── services/        # Lógica de negócio e geração de dados
│   ├── utils/           # Funções utilitárias (geradores, validadores)
│   ├── app.js          # Configuração do Express
│   └── routes.js       # Definição das rotas
├── index.js            # Arquivo principal
└── package.json
```

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/samuel-nun3s/brazilian-mock.git
cd brazilian-mock
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

4. Inicie o servidor:
```bash
# Desenvolvimento (com nodemon)
npm run dev

# Produção
npm start
```

A API estará disponível em `http://localhost:3000` (ou a porta configurada no `.env`).

## 📡 Endpoints

### Rota Principal
```http
GET /
```

**Resposta:**
```json
{
  "message": "Seja bem vindo a API Brazilian Mock"
}
```

### Dados Pessoais
```http
GET /personal-data
```

**Resposta:**
```json
{
  "nome": "João Silva Santos",
  "cpf": "123.456.789-00",
  "rg": "12.345.678-9",
  "dataNascimento": "15/03/1990",
  "nomeMae": "Maria Silva Santos"
}
```

### Dados de Endereço
```http
GET /address
```

**Resposta:**
```json
{
  "cep": "01310-100",
  "logradouro": "Avenida Paulista",
  "numero": "1578",
  "complemento": "Apto 42",
  "bairro": "Bela Vista",
  "cidade": "São Paulo",
  "estado": "SP"
}
```

### Dados Veiculares
```http
GET /vehicle-data
```

**Resposta:**
```json
{
  "marca": "Volkswagen",
  "modelo": "Gol",
  "anoFabricacao": 2020,
  "anoModelo": 2021,
  "chassi": "9BWAA05U7LT123456",
  "placa": {
    "antiga": "ABC-1234",
    "mercosul": "ABC1D23"
  },
  "renavam": "12345678901",
  "cor": "Prata"
}
```

## 🎯 Casos de Uso

- Testes de APIs e aplicações web
- Mockups e protótipos
- Ambientes de desenvolvimento
- Demonstrações e apresentações
- Populamento de bancos de dados de teste
- Testes de integração

## 🛡️ Validações

Todos os dados gerados seguem os padrões oficiais brasileiros:

- **CPF**: Algoritmo de validação com dígitos verificadores
- **Chassi**: Padrão VIN internacional (17 caracteres) com dígito verificador
- **RENAVAM**: 11 dígitos com dígito verificador
- **Placa Mercosul**: Padrão ABC1D23 (MERCOSUL)
- **CEP**: Formato 00000-000

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abrir um Pull Request

## 👨‍💻 Autor

Desenvolvido por Samuel Nunes.

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!