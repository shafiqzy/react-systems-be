import express from "express";
import oracledb from "oracledb"; // <-- ✅ Add this line
import { getDbConnection } from "../../db";

const router = express.Router();

router.get("/top-products", async (req, res) => {
  try {
    const connection = await getDbConnection();

    const result = await connection.execute(
      `SELECT * FROM top_products`,
      [], // bind parameters (optional)
      { outFormat: oracledb.OUT_FORMAT_OBJECT } // optional formatting
    );

    await connection.close();

    res.json(result.rows);
  } catch (err) {
    console.error("DB error:", err);
    res.status(500).json({ error: "Database error" });
  }
});

export default router;
