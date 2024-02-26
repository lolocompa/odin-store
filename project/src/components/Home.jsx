import React from "react";
import "../css/home.css";
import { useContext } from "react";
import { app_context } from "./Header";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { setcategory, setsearch } = useContext(app_context);
  const navigate = useNavigate();

  var counter = 1;
  setInterval(function () {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 4) {
      counter = 1;
    }
  }, 5000);

  return (
    <>
      <div className="home_section">
        <div className="home_img">
          <img src="top img.jpg" alt="" />
        </div>
        <div className="img_button">
          <h1>The new collection just arrived!</h1>
          <button>SHOP NOW</button>
        </div>
      </div>
      <div className="discount">
        <h1>Now with a 20% discount on your next 3 purchases!</h1>
      </div>
      <div className="slider_container">
        <div className="slider">
          <div className="slides">
            <input type="radio" name="radio_btn" id="radio1" />
            <input type="radio" name="radio_btn" id="radio2" />
            <input type="radio" name="radio_btn" id="radio3" />
            <input type="radio" name="radio_btn" id="radio4" />

            <div className="slide first">
              <img src="pic 5.jpg" alt="" />
            </div>
            <div className="slide">
              <img src="pic 2.jpg" alt="" />
            </div>
            <div className="slide">
              <img src="pic 4.jpg" alt="" />
            </div>
            <div className="slide">
              <img src="pic 3.jpg" alt="" />
            </div>

            <div className="navigation_auto">
              <div className="auto_btn1"></div>
              <div className="auto_btn2"></div>
              <div className="auto_btn3"></div>
              <div className="auto_btn4"></div>
            </div>
          </div>
          <div className="navigation_manual">
            <label htmlFor="radio1" className="manual_btn"></label>
            <label htmlFor="radio2" className="manual_btn"></label>
            <label htmlFor="radio3" className="manual_btn"></label>
            <label htmlFor="radio4" className="manual_btn"></label>
          </div>
        </div>
      </div>
      <div className="links_btn">
        <button
          className="electronics"
          onClick={() => {
            setcategory("/category/electronics");
            navigate("/shop");
            setsearch(null);
            const home = document.querySelector(".home");
            const shop = document.querySelector(".shop");
            home.classList.remove("active");
            shop.classList.add("active")
          }}
        >
          Electronics
        </button>
        <button
          className="jewelery"
          onClick={() => {
            setcategory("/category/jewelery");
            navigate("/shop");
            setsearch(null);
            const home = document.querySelector(".home");
            const shop = document.querySelector(".shop");
            home.classList.remove("active");
            shop.classList.add("active")
          }}
        >
          Jewelery
        </button>
        <button
          className="men_clothing"
          onClick={() => {
            setcategory("/category/men's clothing");
            navigate("/shop");
            setsearch(null);
            const home = document.querySelector(".home");
            const shop = document.querySelector(".shop");
            home.classList.remove("active");
            shop.classList.add("active")
          }}
        >
          Men's clothing
        </button>
        <button
          className="women_clothing"
          onClick={() => {
            setcategory("/category/women's clothing");
            navigate("/shop");
            setsearch(null);
            const home = document.querySelector(".home");
            const shop = document.querySelector(".shop");
            home.classList.remove("active");
            shop.classList.add("active")
          }}
        >
          Women's clothing
        </button>
      </div>
      <div className="fotter">
        <div className="fotter1">
          <p>
            Stay in the loop! Subscribe to our newsletter for the latest
            updates, exclusive offers, and a front-row seat to all the
            excitement.
          </p>
          <button>Sign up</button>
        </div>
        <div className="fotter2">
          <p>
            Download our app now and enjoy exclusive discounts that will make
            you scream with joy!
          </p>
          <div className="img_fotter_container">
            <img src="android.png" alt="" />
            <img src="apple.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
