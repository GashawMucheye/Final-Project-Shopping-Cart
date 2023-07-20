import { Router } from "express";
import {
  getProducts,
  getFindBySlug,
  GetFindById,
  getCategories,
} from "../controllers/productControll.js";

const productRouter = Router();

productRouter.get("/", getProducts);
productRouter.get("/categories", getCategories);
productRouter.get("/slug/:slug", getFindBySlug);
productRouter.get("/:id", GetFindById);

export default productRouter;
