import { Router } from 'express';

import {
  getUserByEmail,
  creatingSignup,
  updatingProfile,
  getUsers,
  getUserById,
  updateUserById,
} from '../controllers/userControll.js';
import { isAuth, isAdmin } from '../utils.js';

const userRouter = Router();
userRouter.get('/', isAuth, isAdmin, getUsers);
userRouter.get('/:id', isAuth, isAdmin, getUserById);
userRouter.put('/:id', isAuth, isAdmin, updateUserById);

userRouter.post('/signin', getUserByEmail);
userRouter.post('/signup', creatingSignup);
userRouter.put('/profile', isAuth, updatingProfile);

export default userRouter;
