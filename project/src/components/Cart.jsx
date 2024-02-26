import React from "react";
import "../css/cart.css";
import { useContext } from "react";
import { app_context } from "./Header";
import { useState } from "react";
import { useEffect } from "react";

export const Cart = () => {
  const { cart, setcart } = useContext(app_context);
  const [total, settotal] = useState(0.0);
  const [confirm, setconfirm] = useState(false);

  function purchase() {
    if (cart.length < 1) {
      return
    }

    setcart([]);
    setconfirm(true);

    setTimeout(() => {
      setconfirm(false);
    }, 2000);
  }

  useEffect(() => {
    let total_value = 0;
    cart.map((item) => {
      total_value = total_value + item.price * item.amount;
    });
    let rounded_total = total_value.toFixed(2);
    settotal(rounded_total);
  }, [cart]);

  function amount_change(id, sign) {
    if (sign === "+") {
      setcart((prev_Products) => {
        const updatedProducts = prev_Products.map((product) =>
          product.id === id
            ? { ...product, amount: product.amount + 1 }
            : product
        );
        return updatedProducts;
      });
    } else {
      setcart((prev_Products) => {
        const updatedProducts = prev_Products.map((product) =>
          product.id === id
            ? { ...product, amount: Math.max(product.amount - 1, 1) }
            : product
        );
        return updatedProducts;
      });
    }
  }

  function delete_product(id) {
    setcart((prevProducts) => {
      const updatedProducts = prevProducts.filter(
        (product) => product.id !== id
      );
      return updatedProducts;
    });
  }

  return (
    <div className="cart_page">
      <div className="cart_section">
        <div className="items">
          <h3>Shopping Cart</h3>
          <div className="line"></div>
          {cart.map((product) => (
            <>
              <div className="show_item" key={product.id}>
                <button
                  onClick={() => delete_product(product.id)}
                  className="delete"
                >
                  X
                </button>
                <img src={product.image} alt="" />
                <div className="title_wrapper">
                  <h4>{product.title}</h4>
                </div>
                <div className="change_amount">
                  <div className="item_container">
                    <i
                      class="bx bx-minus"
                      onClick={() => amount_change(product.id, "-")}
                    ></i>
                  </div>
                  <h4>{product.amount}</h4>
                  <div className="item_container">
                    <i
                      class="bx bx-plus"
                      onClick={() => amount_change(product.id, "+")}
                    ></i>
                  </div>
                </div>
                <div className="item_price">
                  <h4>{(product.price * product.amount).toFixed(2)}</h4>
                </div>
              </div>
              <hr />
            </>
          ))}
        </div>
        <h3>Total:</h3>
        <div className="price">
          <h3>{total}$</h3>
          <button className="checkout" onClick={purchase}>
            Check out
          </button>
        </div>
        {confirm && (
          <div className="confirm">
            <i class="bx bx-check"></i>
          </div>
        )}
      </div>
    </div>
  );
};
