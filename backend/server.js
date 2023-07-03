import express from "express";
import { data } from "./data.js";
import { config } from "dotenv";
import colors from "colors";
import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";

colors;
config();
import connectDB from "./config/db.js";

connectDB();

const app = express();
app.use("/api/seed", seedRouter);
app.use("/api/products", productRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`.yellow.underline);
});
