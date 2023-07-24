import Product from '../models/productModel.js';
import expressAsyncHandler from 'express-async-handler';

const getProducts = expressAsyncHandler(async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

const getFindBySlug = expressAsyncHandler(async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

const GetFindById = expressAsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});
//! @desc  set products
//! @route POST /api/products
//!@access private

const setProducts = expressAsyncHandler(async (req, res) => {
  const newProduct = new Product({
    name: req.body.name,
    slug: req.body.slug,
    image: req.body.image,
    brand: req.body.brand,
    category: req.body.category,
    description: req.body.description,
    price: req.body.price,
    countInStock: req.body.countInStock,
    rating: req.body.rating,
    numReviews: req.body.numReviews,
  });
  const product = await newProduct.save();

  res.status(200).json(product);
});

//! @desc  update products
//! @route PUT/api/products
//!@access private

const updateProducts = expressAsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(400);
    throw new Error('Product not found');
  }

  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedProduct);
});
//! @desc  delete products
//! @route Delete /api/products
//!@access private

const deleteProducts = expressAsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(400);
    throw new Error('Product not found');
  }

  await product.deleteOne();

  res.status(200).json({ id: req.params.id });
});
//! categories
const getCategories = expressAsyncHandler(async (req, res) => {
  const categories = await Product.find().distinct('category');
  res.send(categories);
});
const PAGE_SIZE = 3;
const getSearch = expressAsyncHandler(async (req, res) => {
  const { query } = req;
  const pageSize = query.pageSize || PAGE_SIZE;
  const page = query.page || 1;
  const category = query.category || '';
  const price = query.price || '';
  const rating = query.rating || '';
  const order = query.order || '';
  const searchQuery = query.query || '';

  const queryFilter =
    searchQuery && searchQuery !== 'all'
      ? {
          name: {
            $regex: searchQuery,
            $options: 'i',
          },
        }
      : {};
  const categoryFilter = category && category !== 'all' ? { category } : {};
  const ratingFilter =
    rating && rating !== 'all'
      ? {
          rating: {
            $gte: Number(rating),
          },
        }
      : {};
  const priceFilter =
    price && price !== 'all'
      ? {
          // 1-50
          price: {
            $gte: Number(price.split('-')[0]),
            $lte: Number(price.split('-')[1]),
          },
        }
      : {};
  const sortOrder =
    order === 'featured'
      ? { featured: -1 }
      : order === 'lowest'
      ? { price: 1 }
      : order === 'highest'
      ? { price: -1 }
      : order === 'toprated'
      ? { rating: -1 }
      : order === 'newest'
      ? { createdAt: -1 }
      : { _id: -1 };

  const products = await Product.find({
    ...queryFilter,
    ...categoryFilter,
    ...priceFilter,
    ...ratingFilter,
  })
    .sort(sortOrder)
    .skip(pageSize * (page - 1))
    .limit(pageSize);

  const countProducts = await Product.countDocuments({
    ...queryFilter,
    ...categoryFilter,
    ...priceFilter,
    ...ratingFilter,
  });
  res.send({
    products,
    countProducts,
    page,
    pages: Math.ceil(countProducts / pageSize),
  });
});

export {
  getProducts,
  getFindBySlug,
  GetFindById,
  getCategories,
  getSearch,
  setProducts,
  updateProducts,
  deleteProducts,
};
