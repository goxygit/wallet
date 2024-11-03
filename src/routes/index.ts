import { Router } from "express";
import { userRouter } from "./userRouters";
import { transactionRouter } from "./transactionRouters";
import { categoryRouter } from "./categoryRouters";

const router = Router({});

router.use("/user", userRouter);
router.use("/transaction", transactionRouter);
router.use("/category", categoryRouter);

export { router };
