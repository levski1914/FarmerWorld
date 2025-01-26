const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Извличане на токена от хедъра
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Декодиране на токена
    req.user = await User.findById(decoded.id); // Добавяне на потребителя към req.user
    if (!req.user) {
      return res.status(401).json({ message: "User not found" });
    }
    next(); // Продължи към следващата функция
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = { protect };
