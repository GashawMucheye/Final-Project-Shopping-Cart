import { Router } from "express";

import { getUserByEmail, creatingSignup } from "../controllers/userControll.js";

const userRouter = Router();

userRouter.post("/signin", getUserByEmail);
userRouter.post("/signup", creatingSignup);

export default userRouter;
