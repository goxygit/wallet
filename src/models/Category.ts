import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/db';
import User from './User';

class Category extends Model {
  public id!: number;
  public title!: string;
  public userId!: number;
}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id'
      }
    },
  },
  {
    sequelize,
    modelName: 'category',
  }
);

export default Category;
