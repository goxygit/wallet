import { Request, Response } from "express";
import Category from "../models/Category";
export const getAllCategory = async (req: Request, res: Response) => {
  const { user } = req;

  if (user) {
    const category = await Category.findAll({ where: { userId: user.id } });
    return res.json(category);
  }
  return res.status(400);
};
export const getOneCategory = async (req: Request, res: Response) => {
  const { categoryId } = req.params;
  const { user } = req;

  if (user) {
    const category = await Category.findOne({
      where: { categoryId, userId: user.id },
    });
    return res.json(category);
  }
};
export const createCategory = async (req: Request, res: Response) => {
  const { title } = req.body;

  const { user } = req;

  if (user) {
    const category = await Category.create({ title, userId: user.id });
    return res.json(category);
  }
  return res.status(400).json({ message: "o kurwa" });
};
export const updateCategory = async (req: Request, res: Response) => {};
export const deleteCategory = async (req: Request, res: Response) => {
  const { user } = req;
  const { id } = req.params;

  console.log("Received delete request for category:", id);

  if (!user) {
    console.log("Unauthorized request");
    return res.status(403).json({ message: "Unauthorized" });
  }

  if (!id) {
    console.log("Category ID missing");
    return res.status(400).json({ message: "Category ID is required" });
  }

  try {
    const deletedCount = await Category.destroy({
      where: {
        userId: user.id,
        id,
      },
    });

    if (deletedCount === 0) {
      console.log("Category not found");
      return res.status(404).json({ message: "Category not found" });
    }

    console.log("Category deleted successfully");
    return res.json({ message: "Category deleted successfully" });
  } catch (error) {
    console.error("Server error:", error);
    return res.status(500).json({ message: "Server error", error });
  }
};
