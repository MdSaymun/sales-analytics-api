const express = require("express");
const {
  getTotalRevenue,
  getQuantityByProduct,
  getAveragePrice,
  getTopProducts,
  getRevenueByMonth,
  getHighestQuantitySold,
} = require("../controllers/salesController");

const router = express.Router();

// Calculate and return the total revenue generated by all sales transactions.
router.get("/total-revenue", getTotalRevenue);

// Find and return the total quantity sold for each product.
router.get("/quantity-by-product", getQuantityByProduct);

// Retrieve the top 5 products with the highest total revenue, along with their total revenue values.
router.get("/top-products", getTopProducts);

// Calculate and return the average price of products sold.
router.get("/average-price", getAveragePrice);

// Group the sales data by month and year and calculate the total revenue for each month-year combination.
router.get("/revenue-by-month", getRevenueByMonth);

// Find and return the product that had the highest quantity sold on a single day.
router.get("/highest-quantity-sold", getHighestQuantitySold);

module.exports = router;
