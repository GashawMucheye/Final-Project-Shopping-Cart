import { Router } from 'express';

import {
  getUserByEmail,
  creatingSignup,
  updatingProfile,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} from '../controllers/userControll.js';
import { isAuth, isAdmin } from '../utils.js';

const userRouter = Router();
userRouter.get('/', isAuth, isAdmin, getUsers);
userRouter.get('/:id', isAuth, isAdmin, getUserById);
userRouter.put('/:id', isAuth, isAdmin, updateUserById);
userRouter.delete('/:id', isAuth, isAdmin, deleteUserById);

userRouter.post('/signin', getUserByEmail);
userRouter.post('/signup', creatingSignup);
userRouter.put('/profile', isAuth, updatingProfile);

export default userRouter;
