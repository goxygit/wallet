import { Sequelize } from "sequelize";
import  dotenv from 'dotenv';

dotenv.config()

const dbName = process.env.DB_NAME as string
const dbUser = process.env.DB_USER  as string
const dbPassword = process.env.DB_PASSWORD as string
const dbHost = process.env.DB_HOST as string

const port = parseInt(dbHost)

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    dialect: 'postgres',
    host: 'localhost',
    port: port,
    logging: console.log, // Включает логирование SQL-запросов
});
export default sequelize