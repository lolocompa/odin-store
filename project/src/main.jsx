import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./css/index.css";
import { Home } from "./components/Home.jsx";
import { Shop } from "./components/Shop.jsx";
import { Brand } from "./components/Brand.jsx";
import { Login } from "./components/Login.jsx";
import { Cart } from "./components/Cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/brand", element: <Brand /> },
      { path: "/profile", element: <Login /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
