import { Router } from 'express';
import Product from '../models/productModel.js';
import User from '../models/userModels.js';
import data from '../data.js';

const seedRouter = Router();

seedRouter.get('/', async (req, res) => {
  //! remove  all previoues records in product model
  await Product.deleteMany({});
  //! insert all products in data.js to product model in mongodb
  const createdProducts = await Product.insertMany(data.products);
  await Product.deleteMany({});
  //! remove  all previoues records in product model
  await User.deleteMany({});
  //! insert all users in data.js to product model in mongodb
  const createdUsers = await User.insertMany(data.users);
  res.send({ createdProducts, createdUsers });
});

export default seedRouter;
