import React from "react";
import "../Rating.css";
import img from "../../images/glrfaobartiminocicop.jpg";
import img2 from "../../images/ncgwpdlhgo4shbqt7vzu.jpg";
import img3 from "../../images/chpfoihjiecrs3nrvnom.jpg";
const rating = () => {
  return (
    <>
      <div className="container" id="contai">
        <div className="card">
          <div className="immg">
            <img src={img} />
          </div>
          <div className="concon">
            <div className="content">
              <h3>السرطانات</h3>
              <p>
                يمكنك التبرع الي جميع انواع السرطانات ومساعدة الناس للعلاج منه.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="immg">
            <img src={img2} />
          </div>
          <div className="concon">
            <div className="content">
              <h3>مساعدة اطفال فلسطين</h3>
              <p>يدعم موقعنا التبرع ومساعدة اطفال غزة وفلسطين كاملة.</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="immg">
            <img src={img3} />
          </div>
          <div className="concon">
            <div className="content">
              <h3>صندوق تحيا مصر</h3>
              <p>
                يمكنك التبرع لصندوق تحيا مصر ومساعدة اطفالنا في فلسطين في
                المعونة والمعيشة
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default rating;
