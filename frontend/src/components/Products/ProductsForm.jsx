import React, { useEffect, useState } from "react";
import api from "../../services/api";

const ProductsForm = ({ productId, onSave }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await api.get("/api/categories");
      setCategories(data);
    };

    fetchCategories();
    if (productId) {
      const fetchProduct = async () => {
        const { data } = await api.get(`/api/products/${productId}`);

        setName(data.name);
        setDescription(data.description);
        setPrice(data.price);
        setStock(data.stock);
        setCategory(data.category);
      };
      fetchProduct();
    }
  }, [productId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = { name, description, price, stock, category }; // category е тук
    try {
      if (productId) {
        await api.put(`/api/products/${productId}`, productData);
      } else {
        await api.post(`/api/products/`, productData); // Увери се, че category се изпраща тук
      }
      onSave();
    } catch (error) {
      console.log(error.response?.data || error.message); // Логни грешката
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>{productId ? "Edit Product" : "Add Product"}</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Stock"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
        required
      />
      {/* Dropdown за категории */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      >
        <option value="">Select a category</option>
        {categories.map((cat) => (
          <option key={cat._id} value={cat.name}>
            {cat.name}
          </option>
        ))}
      </select>
      <button type="submit">{productId ? "Update" : "Add"}</button>
    </form>
  );
};

export default ProductsForm;
