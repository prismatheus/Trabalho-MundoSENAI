# 📝 Backend - Task Manager API

Este repositório contém a API back-end de um aplicativo de gerenciamento de tarefas. Ele foi desenvolvido com foco em autenticação segura utilizando JWT (JSON Web Tokens) e fornece endpoints RESTful para criação, listagem, edição e exclusão de tarefas.

---

## ⚙️ Tecnologias Utilizadas
- **Node.js**
- **Express**
- **Sequelize (ORM)**
- **PostgreSQL (ou outro banco relacional)**
- **JWT (jsonwebtoken)**
- **dotenv**

## 📁 Estrutura do Projeto
```
backend-tasks/
├── controllers/       # Lógica dos controladores
├── models/            # Definições dos modelos (Sequelize)
├── routes/            # Rotas da aplicação
├── middlewares/       # Middlewares personalizados
├── config/            # Configurações do banco e do projeto
├── app.js             # Arquivo principal da aplicação
├── server.js          # Inicialização do servidor
├── .env.example       # Exemplo de variáveis de ambiente
└── README.md          # Documentação do projeto
```

## 🔐 Autenticação
- A autenticação dos usuários é baseada em JWT:
- Registro: Cria um novo usuário e gera um token.
- Login: Valida credenciais e retorna um token JWT.
- Rotas protegidas: Só podem ser acessadas com um token válido no header Authorization.


## 📌 Principais Rotas
### 🔐 Autenticação
| Método | Rota        | Descrição         |
| ------ | ----------- | ----------------- |
| POST   | `/register` | Registrar usuário |
| POST   | `/login`    | Login do usuário  |


### ✅ Tarefas (requer token JWT)
| Método | Rota         | Descrição               |
| ------ | ------------ | ----------------------- |
| GET    | `/tasks`     | Listar todas as tarefas |
| POST   | `/tasks`     | Criar nova tarefa       |
| PUT    | `/tasks/:id` | Atualizar tarefa        |
| DELETE | `/tasks/:id` | Deletar tarefa          |

## 📦 Futuras Implementações

- Filtros e buscas por status ou data
- Suporte a múltiplos usuários com tarefas associadas
- Categorização de tarefas
- Interface web ou mobile conectada a esta API

---

## 🖥️ Front-end

Este projeto possui também uma interface front-end desenvolvida separadamente, que consome essa API para gerenciar as tarefas de forma visual e prática.

➡️ Repositório do front-end: https://github.com/frnadin/frontend-tasks-fmg


## 👨‍💻 Desenvolvido por
Fernando Gutilla  
[🔗 GitHub](https://github.com/frnadin)
