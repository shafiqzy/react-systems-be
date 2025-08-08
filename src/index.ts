import express from "express";
import productsRouter from "./db/routes/products";

const app = express();
const port = 3001;

app.use(express.json());
app.use("/api", productsRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
