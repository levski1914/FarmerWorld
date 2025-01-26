import React, { useContext, useState } from "react";
// import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const RegisterPage = ({ handleLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("buyer");
  const [message, setMessage] = useState(""); // Добавяме състояние за съобщения

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/api/users/register", {
        name,
        email,
        password,
        role,
      });
      const { token, user } = response.data;
      handleLogin(token, user);

      navigate("/");
    } catch (error) {
      setMessage(error.response?.data?.message || "Registration failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="buyer">Buyer</option>
        <option value="producer">Producer</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterPage;
