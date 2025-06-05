import express from "express";
import database from "./database.js";
import "dotenv/config";
import router from "./routes/user.js";
import routerTask from "./routes/task.js";
import routerTasks from "./routes/allTasks.js";
const app = express();
const PORT = process.env.PORT || 3131;
import cors from "cors";

app.use(express.json());

app.use(
  cors(
    {

    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      const allowedOrigins = [
        "http://localhost:5173/", 
        "https://trabalho-mundo-senai.vercel.app/", 
      ];

     const allowed = allowedOrigins.includes(origin) || origin.endsWith('.vercel.app');

      if (allowed) {
        callback(null, true);
      } else {
        callback(new Error("Não permitido por CORS"));
      }
    },
    credentials: true,
  }
)
);
app.use(router);
app.use(routerTask);
app.use(routerTasks);

const start = async () => {
  try {
    await database.sync();
    console.log("Banco syncado");
    app.listen(PORT, () => console.log(`Servidor conectado no url: http://localhost:${PORT}`));
  } catch (error) {
    console.error("Erro ao conectar ao banco:", error);
  }
};

start();
