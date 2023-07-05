import { Router } from "express";

import { getUserByEmail } from "../controllers/userControll.js";

const userRouter = Router();

userRouter.post("/signin", getUserByEmail);

export default userRouter;
