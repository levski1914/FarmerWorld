import React, { useContext } from "react";
// import AuthContext from "../context/AuthContext";
// cookstertv
import { Navigate } from "react-router-dom";
const ProtectedRoutes = ({ children, isPublic = false }) => {
  const token = localStorage.getItem("token");

  if (isPublic && token) {
    // Ако е публичен маршрут и потребителят е логнат, пренасочваме към dashboard
    return <Navigate to="/dashboard" />;
  }

  if (!isPublic && !token) {
    // Ако е защитен маршрут и потребителят не е логнат, пренасочваме към login
    return <Navigate to="/login" />;
  }

  // Рендираме children, ако всичко е наред
  return children;
};
export default ProtectedRoutes;
