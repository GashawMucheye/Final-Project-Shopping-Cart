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
  getReviews,
} from '../controllers/productController.js';

const productRouter = Router();

productRouter.get('/', getProducts);
productRouter.post('/', isAuth, isAdmin, setProducts);

productRouter.put('/:id', isAuth, isAdmin, updateProducts);
productRouter.post('/:id/reviews', isAuth, getReviews);
productRouter.delete('/:id', isAuth, isAdmin, deleteProducts);
productRouter.get('/admin', isAuth, isAdmin, getAdmin);
productRouter.get('/search', getSearch);
productRouter.get('/categories', getCategories);
productRouter.get('/slug/:slug', getFindBySlug);
productRouter.get('/:id', GetFindById);

export default productRouter;
