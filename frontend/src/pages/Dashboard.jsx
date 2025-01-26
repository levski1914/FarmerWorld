import React, { useContext, useEffect, useState } from "react";
// import AuthContext from "../context/AuthContext";
import API from "../services/api";
import api from "../services/api";
import ProductsForm from "../components/Products/ProductsForm";

const Dashboard = ({ user }) => {
  // const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  useEffect(() => {
    const fetchDashboard = async () => {
      if (!user) return; // Предпазваме се от липсващи данни за user
      if (user.role === "buyer") {
        const { data } = await API.get("/api/orders/buyer");
        setOrders(data);
      } else if (user.role === "producer") {
        const { data: productsData } = await API.get("/api/products");
        const { data: ordersData } = await API.get("/api/orders/producer");
        setProducts(productsData);
        setOrders(ordersData);
      }
    };
    fetchDashboard();
  }, [user]);
  const handleSave = () => {
    setEditingProduct(null);
    window.location.reload();
  };

  if (!user) {
    return <p>Loading...</p>; // Показва съобщение, докато user бъде зареден
  }
  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      {user.role === "buyer" && (
        <>
          <h2>Your Orders</h2>
          {orders.map((order) => (
            <div key={order._id}>
              <p>Total: ${order.totalAmount}</p>
              <p>Status: {order.status}</p>
            </div>
          ))}
        </>
      )}
      {user.role === "producer" && (
        <>
          <h2>Your Products</h2>
          {products.map((product) => (
            <div key={product._id}>
              <p>Name: {product.name}</p>
              <p>Price: ${product.price}</p>
              <p>Stock: {product.stock}</p>
              <button onClick={() => setEditingProduct(product._id)}>
                Edit
              </button>
            </div>
          ))}
          <button onClick={() => setEditingProduct("new")}>
            Add New Product
          </button>
          {editingProduct !== null && (
            <ProductsForm
              productId={editingProduct === "new" ? null : editingProduct}
              onSave={handleSave}
            />
          )}
          <h2>Orders for Your Products</h2>
          {orders.map((order) => (
            <div key={order._id}>
              <p>Total: ${order.totalAmount}</p>
              <p>Status: {order.status}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Dashboard;
