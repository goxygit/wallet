import { UserType } from '../middlewares/auth'; // Импортируйте типы данных вашего пользователя

declare global {
  namespace Express {
    interface Request {
      user?: UserType; // Добавляем новое поле user к типу Request
    }
  }
}
