import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/db';
import Category from './Category';
import User from './User';

class Transaction extends Model {
  public id!: number;
  public title!: string;
  public type!: boolean;
  public count!: number;
  public categoryId!: number;
  public userId!: number;
}

Transaction.init(
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
    type: {
      type: DataTypes.BOOLEAN,
    },
    count: {
      type: DataTypes.INTEGER,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id'
      }
    },
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: Category,
        key: 'id'
      }
    }
  }, 
  {
    sequelize,
    modelName: 'transaction',
  }
);

export default Transaction;
