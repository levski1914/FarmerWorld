const Order = require("../models/Order");
const Product = require("../models/Product");

exports.createOrder = async (req, res) => {
  const { products, totalAmount } = req.body;

  try {
    const order = new Order({
      buyer: req.user.id,
      products,
      totalAmount,
      status: "pending",
    });

    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBuyerOrders = async (req, res) => {
  try {
    const orders = await Order.find({ buyer: req.user.id }).populate(
      "products.product"
    );
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProducerOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate({
        path: "products.product",
        match: { producer: req.user.id },
      })
      .exec();

    const filteredOrders = orders.filter((order) =>
      order.products.some((p) => p.product)
    );
    res.status(200).json(filteredOrders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateOrderStatus = async (req, res) => {
  const { orderId, status } = req.body;

  try {
    const order = await Order.findById(orderId);
    if (!order) return res.status(404).json({ message: "Order not found" });

    // Само производител може да променя статус
    if (
      !order.products.some((p) => p.product.producer.toString() === req.user.id)
    ) {
      return res.status(403).json({ message: "Not authorized" });
    }

    order.status = status;
    await order.save();
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
