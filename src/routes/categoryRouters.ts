import { authMiddleware } from "./../middlewares/auth";
import { Router } from "express";
import { createCategory } from "../middlewares/category";
import * as categoryController from "../controllers/categoryController";
import { inputValidationMiddleware } from "../middlewares/input";

const categoryRouter = Router({});

categoryRouter.post(
  "/",
  authMiddleware,
  createCategory,
  inputValidationMiddleware,
  categoryController.createCategory
);
categoryRouter.get("/", authMiddleware, categoryController.getAllCategory);
categoryRouter.delete(
  "/:id",
  (req, res, next) => {
    console.log("DELETE /category route is hit");
    next();
  },
  authMiddleware,
  categoryController.deleteCategory
);
categoryRouter.get("/:id", authMiddleware, categoryController.getOneCategory);

export { categoryRouter };
