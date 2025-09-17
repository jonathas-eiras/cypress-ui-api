# 🚀 Projeto de Testes com Cypress
Este repositório contém testes automatizados de **UI e
API** utilizando [Cypress](https://www.cypress.io/).
A execução é feita localmente e também em **pipelines
do GitHub Actions**, garantindo integração contínua.
---
## 1. 🔧 Setup
### Requisitos

- Node.js
- NPM
- Git
  
### Instalação
Clone o repositório e instale as dependências:
```
git clone [repository]
npm install

```
Variáveis de ambiente

Crie um arquivo cypress.env.json para
armazenar os dados sensíveis de login:

"username": [nome de usuário]  
"password": [senha do usuário]


## ▶️ Como executar os testes

UI (interface gráfica)
Modo interativo (com Cypress Test Runner):
```
npx cypress open
```
Modo headless (para CI/CD):
```
npx cypress run --browser chrome
```
3. 🧠 Estratégia de Testes

Validações: uso de should para garantir
comportamentos esperados.
Separação UI/API: specs organizadas por tipo de teste.

4. 📂 Estrutura de Pastas
cypress/
├─ e2e/ # Specs de testes (UI e API)
│ ├─ ui/ # Testes de interface
│ └─ api/ # Testes de API
├─ support/ # Commands
│ ├─ ui_commands.js # Comandos customizados
│ ├─ api_commands.js # Comandos customizados
│ └─ e2e.js # Hooks globais

5. 📊 Relatórios

6. ⚠ Limitações e Próximos Passos

Estruturação melhor dos testes
Possível utilizando de PageObjects
Expandir suítes com mais cenários de erro e
autenticação.


