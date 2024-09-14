import User from './User';
import Category from './Category';
import Transaction from './Transaction';

// Установление ассоциаций
User.hasMany(Category, { foreignKey: 'userId' });
Category.belongsTo(User, { foreignKey: 'userId' });

Category.hasMany(Transaction, { foreignKey: 'categoryId' });
Transaction.belongsTo(Category, { foreignKey: 'categoryId' });

User.hasMany(Transaction, { foreignKey: 'userId' });
Transaction.belongsTo(User, { foreignKey: 'userId' });

export { User, Category, Transaction };
