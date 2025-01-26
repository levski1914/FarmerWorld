const Product = require("../models/Product");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addProducts = async (req, res) => {
  const { name, description, price, stock, category } = req.body; // Добави category
  try {
    // console.log(req.user.role);
    if (req.user.role !== "producer") {
      return res
        .status(403)
        .json({ message: "Only producers can add products." });
    }

    const product = new Product({
      name,
      description,
      price,
      stock,
      category, // Добави го тук
      producer: req.user.id,
    });

    await product.save();

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message }); // Тук трябва да видиш по-детайлна грешка
  }
};
// Редакция на продукт
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (product.producer.toString() !== req.user.id) {
      return res
        .status(403)
        .json({ message: "Not authorized to update this product." });
    }

    const { name, description, price, stock } = req.body;

    product.name = name || product.name;
    product.description = description || product.description;
    product.price = price || product.price;
    product.stock = stock || product.stock;
    // product.category = category || product.category;

    await product.save();
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res.status(400).json({ message: "Invalid product ID" });
    }
    res.status(500).json({ error: error.message });
  }
};
