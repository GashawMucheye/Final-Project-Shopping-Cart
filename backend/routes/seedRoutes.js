import { Router } from "express";
import Product from "../models/productModel.js";
import data from "../data.js";

const seedRouter = Router();

seedRouter.get("/", async (req, res) => {
  //! remove  all previoues records in product model
  await Product.deleteMany({});
  //! insert all products in data.js to product model in mongodb
  const createdProducts = await Product.insertMany(data.products);
  res.send({ createdProducts });
});

export default seedRouter;
