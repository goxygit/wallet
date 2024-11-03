import express from "express";
import sequelize from "./db/db";
import cors from "cors";
import { router } from "./routes/index";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
const app = express();
const port = 3001;
dotenv.config();

app.use(express.json());
app.use(
  cors({
    origin: "*", // Разрешённый домен клиента
    credentials: true, // Разрешить отправку куки между доменами
    methods: ["GET", "POST", "DELETE", "PUT"], // разрешите необходимые методы
  })
);
app.use(cookieParser());

app.use("/api", router);

const start = async () => {
  try {
    // Проверка подключения
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    // Синхронизация моделей
    await sequelize.sync({ alter: true });
    console.log("All models were synchronized successfully.");

    // Вывод зарегистрированных моделей
    console.log("Registered models:", sequelize.models);

    // Запуск сервера
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (e) {
    console.error(
      "Error during database connection or model synchronization:",
      e
    );
  }
};
start();
