import Product from "../models/productModel.js";
import expressAsyncHandler from "express-async-handler";

const getProducts = expressAsyncHandler(async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

const getFindBySlug = expressAsyncHandler(async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});

const GetFindById = expressAsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});
export { getProducts, getFindBySlug, GetFindById };
