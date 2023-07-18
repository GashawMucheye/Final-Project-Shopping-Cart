import { Router } from "express";

import {
  getUserByEmail,
  creatingSignup,
  updatingProfile,
} from "../controllers/userControll.js";
import { isAuth } from "../utils.js";

const userRouter = Router();

userRouter.post("/signin", getUserByEmail);
userRouter.post("/signup", creatingSignup);
userRouter.put("/profile", isAuth, updatingProfile);

export default userRouter;
