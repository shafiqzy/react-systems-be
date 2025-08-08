import express from "express";
import dotenv from "dotenv";
import productsRouter from "@db/routes/Products/products";
import dashboardRouter from "@db/routes/Dashboard/dashboard"; // ✅ Import dashboard route

dotenv.config(); // ✅ Load .env variables

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

// ✅ Register routes
app.use("/", productsRouter);
app.use("/", dashboardRouter);

app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});
