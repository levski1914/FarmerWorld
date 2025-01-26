const {
  getAllProducts,
  addProducts,
  updateProduct,
  getProductById,
} = require("../controllers/productController");
const { protect } = require("../middleware/authMiddleware");

const router = require("express").Router();

router.get("/", getAllProducts);
router.post("/", protect, addProducts);

router.get("/:id", protect, getProductById);
router.put("/:id", protect, updateProduct);

module.exports = router;
