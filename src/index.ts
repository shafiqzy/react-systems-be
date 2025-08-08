import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // ✅ Import cors
import productsRouter from "@db/routes/Products/products";
import dashboardRouter from "@db/routes/Dashboard/dashboard";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// ✅ Use CORS middleware
app.use(cors({
  origin: "http://localhost:5173", // Allow your frontend dev server
  credentials: true, // Optional: only if you are using cookies/auth headers
}));

app.use(express.json());

app.use("/", productsRouter);
app.use("/", dashboardRouter);

app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});
