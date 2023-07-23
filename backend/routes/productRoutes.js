import { Router } from 'express';
import {
  getProducts,
  deleteProducts,
  setProducts,
  updateProducts,
  getFindBySlug,
  GetFindById,
  getCategories,
  getSearch,
} from '../controllers/productControll.js';

const productRouter = Router();

productRouter.get('/', getProducts);
productRouter.post('/', setProducts);

productRouter.put('/:id', updateProducts);

productRouter.delete('/:id', deleteProducts);
productRouter.get('/search', getSearch);
productRouter.get('/categories', getCategories);
productRouter.get('/slug/:slug', getFindBySlug);
productRouter.get('/:id', GetFindById);

export default productRouter;
