const {
  registerUser,
  loginUser,
  getProfile,
  getMe,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

const router = require("express").Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/profile", protect, getProfile);
router.get("/me", protect, getMe);

module.exports = router;
