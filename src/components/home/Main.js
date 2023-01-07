import React from "react";
import "../main.css";
import img1 from "../../images/logo.jpg";
import Eyes from "./Eyes";

const Main = () => {
  return (
    <div className="wrapper">
      <div className="cols cols0">
        <span className="topline">مرحبا</span>
        <h1 className="text1">
          <h2 data-text="موقع"> موقع</h2>
          <span className="multiText">
            {" "}
            <h2 data-text="متبرع">متبرع</h2>
          </span>
          <p>تبرعك هيساعد ناس كتير</p>
          <div className="btns">
            <button className="btts">
              <a href="#donate" className="hi">
                مشاهدة التبرعات
              </a>
            </button>
          </div>
        </h1>
      </div>
      <div className="cols cols1"></div>
      <div className="imgbox"></div>
      <Eyes />
    </div>
  );
};

export default Main;
