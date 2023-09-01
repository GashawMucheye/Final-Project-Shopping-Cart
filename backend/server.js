import express from 'express';
import { config } from 'dotenv';
import colors from 'colors';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';
import orderRouter from './routes/orderRoutes.js';
import uploadRouter from './routes/uploadRoutes.js';
import path from 'path';

colors;
config();
import connectDB from './config/db.js';

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/api/keys/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});
//! google map
app.get('/api/keys/google', (req, res) => {
  res.send({ key: process.env.GOOGLE_API_KEY || '' });
});
app.use('/api/upload', uploadRouter);
app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
//.............deployment...........................
// const __dirname1 = path.resolve();
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname1, '/frontend/dist')));

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname1, 'frontend', 'dist', 'index.html'));
//   });
// } else {
//   app.get('/', (req, res) => {
//     res.send('API is running Successfully');
//   });
// }

//.............deployment...........................

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`.yellow.underline);
});
