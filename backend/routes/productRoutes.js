import { Router } from 'express';
import { isAuth, isAdmin } from '../utils.js';
import {
  getProducts,
  deleteProducts,
  setProducts,
  updateProducts,
  getFindBySlug,
  GetFindById,
  getCategories,
  getSearch,
  getAdmin,
} from '../controllers/productControll.js';

const productRouter = Router();

productRouter.get('/', getProducts);
productRouter.post('/', isAuth, isAdmin, setProducts);

productRouter.put('/:id', isAuth, isAdmin, updateProducts);

productRouter.delete('/:id', deleteProducts);
productRouter.get('/admin', isAuth, isAdmin, getAdmin);
productRouter.get('/search', getSearch);
productRouter.get('/categories', getCategories);
productRouter.get('/slug/:slug', getFindBySlug);
productRouter.get('/:id', GetFindById);

export default productRouter;
