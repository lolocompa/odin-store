import React from "react";
import "../css/brand.css";

export const Brand = () => {
  return (
    <div className="brand_page">
      <div className="section1">
        <div className="text_brand">
          <h1>YOU</h1>
          <h3>“ Each garment is a brush, and your body is the canvas ”</h3>
          <p>
            Express your essence through fashion with our eclectic clothing
            pieces.
            <span>YOU</span>, the protagonist of your style story, will discover
            in our selection the perfect emblem for your individuality. Every
            detail, a stroke of your personality. Rediscover yourself through
            fashion; with us, your style comes to life.
          </p>
        </div>
      </div>
      <div className="section2">
        <div className="text_brand">
          <h1>WE</h1>
          <h3>“ At the heart of production lies the expertise of our team ”</h3>
          <p>
            At the core of our production shines the impeccable artistry of our
            team.
            <span>WE</span>, with passion and expertise, craft unique fashion
            pieces. Every stitch is a testament to our dedication to excellence.
            Choosing our products embraces a style experience inspired by the
            mastery of our talented professionals.
          </p>
        </div>
      </div>
    </div>
  );
};
