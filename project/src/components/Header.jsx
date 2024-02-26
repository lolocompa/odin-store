import React from "react";
import "../css/header.css";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createContext } from "react";

export const app_context = createContext();

export const Header = () => {
  const [search, setsearch] = useState(null);
  const [login, setlogin] = useState(false);
  const [username, setusername] = useState(null);
  const [useropen, setuseropen] = useState(false);
  const [cart, setcart] = useState([]);
  const [category, setcategory] = useState("");
  const navigate = useNavigate();

  function user_menu() {
    setuseropen(!useropen);
  }

  function trigger_search() {
    const input = document.querySelector(".search_bar");
    let value = input.value;
    setsearch(value);
    navigate("/shop", { state: { search } });

    const shop = document.querySelector(".shop")
    const allListItems = document.querySelectorAll(".nav_container");
    allListItems.forEach((item) => {
      item.classList.remove("active");
    });
    shop.classList.add("active")

  }

  function triggerMarker(event) {
    const allListItems = document.querySelectorAll(".nav_container");
    allListItems.forEach((item) => {
      item.classList.remove("active");
    });

    event.currentTarget.classList.add("active");
  }

  return (
    <app_context.Provider
      value={{
        search,
        setsearch,
        login,
        setlogin,
        username,
        setusername,
        cart,
        setcart,
        category,
        setcategory,
      }}
    >
      <>
        <ul className="nav">
          <li className="nav_container home" onClick={triggerMarker}>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="nav_container shop" onClick={triggerMarker}>
            <Link className="link" to="/shop">
              Shop
            </Link>
          </li>
          <li className="nav_container brand" onClick={triggerMarker}>
            <Link className="link" to="/brand">
              Brand
            </Link>
          </li>
          <li className="nav_container">
            <div class="search">
              <input className="search_bar" type="text" placeholder="search" />
              <button
                to="/shop"
                className="make_search link_search"
                onClick={trigger_search}
              >
                <i className="bx bx-search"></i>
              </button>
            </div>
          </li>
          <li className="nav_container" onClick={triggerMarker}>
            <button
              className="link"
              onClick={() => (login ? user_menu() : navigate("/profile"))}
            >
              <i className="profile bx bxs-user"></i>
            </button>

            {useropen && (
              <div className="user_menu">
                <h2>
                  Hello <span>{username}</span>
                </h2>
                <h2>Your Profile</h2>
                <h2>Settings</h2>
                <h2>Privacy</h2>
                <h2
                  className="logout"
                  onClick={() => {
                    setlogin(false);
                    setuseropen(false);
                  }}
                >
                  Logout
                </h2>
              </div>
            )}
          </li>
          <li className="nav_container" onClick={triggerMarker}>
            <Link className="link" to="/cart">
              <i className="cart bx bx-cart"></i>
            </Link>
            {cart.length > 0 && (
              <div className="notification">{cart.length}</div>
            )}
          </li>
        </ul>
        <div className="content">
          <Outlet />
        </div>
      </>
    </app_context.Provider>
  );
};
