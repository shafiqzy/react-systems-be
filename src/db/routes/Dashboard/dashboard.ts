import express from "express";
import oracledb from "oracledb";
import { getDbConnection } from "@db/db";

const router = express.Router();

router.get("/dashboard", async (req, res) => {

  const filter = req.query.filter || "this_month"; // "this_month" | "last_month" | "2024"

  let connection;

  try {
    connection = await getDbConnection();

    // 📊 DASHBOARD CARDS
    const cardsResult = await connection.execute(
      `SELECT * FROM dashboard_cards`,
      [],
      { outFormat: oracledb.OUT_FORMAT_OBJECT }
    );

    // 🛒 TOP PRODUCTS
    const topProductsResult = await connection.execute(
      `SELECT product_label FROM top_products`,
      [],
      { outFormat: oracledb.OUT_FORMAT_OBJECT }
    );

    // 🕒 RECENT ACTIVITY
    const activityResult = await connection.execute(
      `SELECT activity_key FROM recent_activity`,
      [],
      { outFormat: oracledb.OUT_FORMAT_OBJECT }
    );

    // 📈 CHART DATA
    const datasetsResult = await connection.execute(
      `SELECT * FROM sales_overview_datasets`,
      [],
      { outFormat: oracledb.OUT_FORMAT_OBJECT }
    );

    const valuesResult = await connection.execute(
      `SELECT * FROM sales_overview_values`,
      [],
      { outFormat: oracledb.OUT_FORMAT_OBJECT }
    );

    const datasets = datasetsResult.rows.map((dataset: any) => {
      const dataPoints = valuesResult.rows
        .filter((v: any) => v.DATASET_ID === dataset.DATASET_ID)
        .sort((a: any, b: any) =>
          a.MONTH_LABEL.localeCompare(b.MONTH_LABEL)
        );

      return {
        label: dataset.LABEL,
        data: dataPoints.map((v: any) => v.VALUE),
        backgroundColor: dataset.BACKGROUND_COLOR,
        borderColor: dataset.BORDER_COLOR,
        fill: false,
      };
    });

    const labels = ["January", "February", "March", "April"];

    // 🧠 Apply mock filter logic
    const filteredCards = cardsResult.rows.map((card: any) => {
      if (filter === "last_month") {
        return {
          ...card,
          STAT:
            card.ID === "sales"
              ? "$9,800"
              : card.ID === "users"
              ? "900"
              : card.ID === "orders"
              ? "620"
              : card.STAT,
        };
      } else if (filter === "2024") {
        return {
          ...card,
          STAT:
            card.ID === "sales"
              ? "$150,000"
              : card.ID === "users"
              ? "12,800"
              : card.ID === "orders"
              ? "9,845"
              : card.STAT,
        };
      }

      return card;
    });

    const filteredDatasets =
      filter === "last_month"
        ? datasets.map((ds:any) => ({
            ...ds,
            data: ds.data.map((val: number) => val - 5),
          }))
        : datasets;

    const filteredTopProducts =
      filter === "last_month"
        ? ["label:product_b", "label:product_c", "label:product_d"]
        : topProductsResult.rows.map((r: any) => r.PRODUCT_LABEL);

    const filteredActivities =
      filter === "last_month"
        ? ["label:user_signed_up", "label:new_order"]
        : activityResult.rows.map((r: any) => r.ACTIVITY_KEY);

    res.status(200).json({
      cards: filteredCards,
      chartData: {
        labels,
        datasets: filteredDatasets,
      },
      recentActivity: filteredActivities,
      topProducts: filteredTopProducts,
    });
  } catch (err) {
    console.error("Dashboard API error:", err);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    if (connection) await connection.close();
  }
});

export default router;
