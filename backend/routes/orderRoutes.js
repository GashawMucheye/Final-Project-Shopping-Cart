import express from 'express';

import { generateToken } from '../utils.js';
import {
  getOrder,
  setOrder,
  getOrderSummary,
  getMineOrder,
  getOrderById,
  deleteOrderById,
  updateDeliverOrderById,
  updatePaidOrder,
} from '../controllers/orderController.js';
import { isAuth, isAdmin } from '../utils.js';

const orderRouter = express.Router();

orderRouter.get('/', isAuth, isAdmin, getOrder);

orderRouter.post('/', isAuth, setOrder);

//dashboard
orderRouter.get('/summary', isAuth, isAdmin, getOrderSummary);

orderRouter.get('/mine', isAuth, getMineOrder);

orderRouter.get('/:id', isAuth, getOrderById);

//delete

orderRouter.delete('/:id', isAuth, isAdmin, deleteOrderById);

//deliver
orderRouter.put('/:id/deliver', isAuth, updateDeliverOrderById);

orderRouter.put('/:id/pay', isAuth, updatePaidOrder);

//delete order

export default orderRouter;
