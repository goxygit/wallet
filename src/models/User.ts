import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/db';

class User extends Model {
  public id!: number;
  public email!: string;
  public password!: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize, // передаем экземпляр Sequelize
    modelName: 'user', // имя модели
  }
);

export default User;
