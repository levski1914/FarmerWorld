const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// app.use()
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));
app.use("/api/categories", require("./routes/categoryRoutes"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB online"))
  .catch((error) => console.log("error: ", error));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("I'm online here => http://localhost:5000"));
