import React from "react";
import "../css/shop.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { app_context } from "./Header";
import { useContext } from "react";

class product {
  constructor(id, image, title, category, description, price) {
    this.id = id;
    this.image = image;
    this.title = title;
    this.category = category;
    this.description = description;
    this.price = price;
    this.amount = 1;
    this.cart = false;
  }
}

export const Shop = () => {
  const [buy, setbuy] = useState(false);
  const [visible, setvisible] = useState(false);
  const [products, setProducts] = useState([]);
  const { search, setsearch, setcart, category, setcategory } =
    useContext(app_context);
  const [addedItem, setAddedItem] = useState(null);

  useEffect(() => {
    let API_URL = "https://fakestoreapi.com/products";
    let new_url = API_URL + category;
    console.log(search);

    if (search) {
      let search_matches = [];

      fetch(API_URL)
        .then((res) => res.json())
        .then((json) => {
          const search_matches = json.filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
          );

          const items = search_matches.map(
            (item) =>
              new product(
                item.id,
                item.image,
                item.title,
                item.category,
                item.description,
                item.price
              )
          );
          setProducts(items);
        });
    } else {
      fetch(new_url)
        .then((res) => res.json())
        .then((json) => {
          const items = json.map(
            (item) =>
              new product(
                item.id,
                item.image,
                item.title,
                item.category,
                item.description,
                item.price
              )
          );
          setProducts(items);
        });
    }
  }, [category, search]);

  function cart_clicked() {
    setbuy(true);

    setTimeout(() => {
      setbuy(false);
      setAddedItem(null);
    }, 2000);
  }

  function trigger_search() {
    const input = document.querySelector(".search_bar2");
    let value = input.value;
    setsearch(value);
  }

  function section_click() {
    if (visible === false) {
      setvisible(true);
    } else {
      setvisible(false);
    }
  }

  function amount_change(id, sign) {
    if (sign === "+") {
      setProducts((prev_Products) => {
        const updatedProducts = prev_Products.map((product) =>
          product.id === id ? { ...product, amount: product.amount++ } : product
        );
        return updatedProducts;
      });
    } else {
      setProducts((prev_Products) => {
        const updatedProducts = prev_Products.map((product) =>
          product.id === id
            ? { ...product, amount: Math.max(product.amount--, 0) }
            : product
        );
        return updatedProducts;
      });
    }
  }

  function add_cart(product) {
    setcart((prevcart) => {
      const existing = prevcart.find((item) => item.id === product.id);

      if (existing) {
        return prevcart.map((item) =>
          item.id === product.id
            ? { ...item, amount: item.amount + product.amount }
            : item
        );
      } else {
        setAddedItem(product);
        return [...prevcart, { ...product }];
      }
    });
  }

  return (
    <div>
      <div className="discount_ad">
        <h1>Now with a 20% discount on your next 3 purchases!</h1>
      </div>
      <div className={`shop_content ${visible ? "dropdown-open" : ""}`}>
        <div className="aside">
          <div className="aside_search_container">
            <input className="search_bar2" type="text" placeholder="Search" />
            <i class="bx bxs-right-arrow-alt" onClick={trigger_search}></i>
          </div>
          <div className="categories_container">
            <div className="categories">
              <div className="categorie_dropdown">
                <h2>Categories</h2>
                <span onClick={section_click}>
                  {visible ? (
                    <i className="bx bx-chevron-up"></i>
                  ) : (
                    <i className="bx bx-chevron-down"></i>
                  )}
                </span>
              </div>
              {visible && (
                <div className="categories-dropdown-content">
                  <div className="categorie_dropdown_added">
                    <h1
                      onClick={() => {
                        setcategory("");
                        setsearch(null);
                      }}
                    >
                      All
                    </h1>
                  </div>
                  <div className="categorie_dropdown_added">
                    <h1
                      onClick={() => {
                        setcategory("/category/electronics");
                        setsearch(null);
                      }}
                    >
                      Electronics
                    </h1>
                  </div>
                  <div className="categorie_dropdown_added">
                    <h1
                      onClick={() => {
                        setcategory("/category/jewelery");
                        setsearch(null);
                      }}
                    >
                      Jewelery
                    </h1>
                  </div>
                  <div className="categorie_dropdown_added">
                    <h1
                      onClick={() => {
                        setcategory("/category/men's clothing");
                        setsearch(null);
                      }}
                    >
                      Men's clothing
                    </h1>
                  </div>
                  <div className="categorie_dropdown_added">
                    <h1
                      onClick={() => {
                        setcategory("/category/women's clothing");
                        setsearch(null);
                      }}
                    >
                      Women's clothing
                    </h1>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="products">
          {products.map((product) => (
            <div className="products_box" key={product.id}>
              <img src={product.image} alt="" />
              <h6>{product.title}</h6>
              <div className="bottom_box">
                <div className="buy">
                  <i
                    class="bx bx-minus"
                    onClick={() => amount_change(product.id, "-")}
                  ></i>
                  <p>{product.amount}</p>
                  <i
                    class="bx bx-plus"
                    onClick={() => amount_change(product.id, "+")}
                  ></i>
                  <i
                    class="bx bx-cart"
                    onClick={() => {
                      product.amount > 0 ? add_cart(product) : null;
                      cart_clicked();
                    }}
                  ></i>
                </div>
                <h5>${Math.round(parseFloat(product.price))}</h5>
                {buy && addedItem && addedItem.id === product.id && (
                  <span className="alert">Added to cart</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
