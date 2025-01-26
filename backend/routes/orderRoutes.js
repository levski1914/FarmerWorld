const {
  createOrder,
  getBuyerOrders,
  getProducerOrders,
  updateOrderStatus,
} = require("../controllers/orderController");
const { protect } = require("../middleware/authMiddleware");

const router = require("express").Router();

router.post("/", protect, createOrder);
router.get("/buyer", protect, getBuyerOrders);

router.get("/producer", protect, getProducerOrders);

router.put("/status", protect, updateOrderStatus);

module.exports = router;
