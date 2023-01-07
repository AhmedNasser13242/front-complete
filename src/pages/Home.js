import React from "react";
import Jumbotron from "../components/cards/Jumbotron";
import NewArrivals from "../components/home/NewArrivals";
import BestSellers from "../components/home/BestSellers";
import CategoryList from "../components/category/CategoryList";
import SubList from "../components/sub/SubList";
import Main from "../components/home/Main";
import Rating from "../components/home/Rating";

const Home = () => {
  return (
    <>
      <Main />
      <Rating />
      <h4
        contenteditable="true"
        className="text-center p-3 mt-5 mb-5 display-4 jumbotron"
        style={{ fontWeight: "600" }}
      >
        الدول المراد التبرع لها
      </h4>
      <CategoryList />

      <h4
        className="text-center p-3 mt-5 mb-5 display-4 jumbotron"
        style={{ fontWeight: "600" }}
      >
        تريد التبرع الى
      </h4>
      <SubList />

      <div
        className="jumbotron text-danger h1 font-weight-bold text-center"
        style={{ fontWeight: "600" }}
      >
        <Jumbotron text={["تبرعك", "هيعالج", "قلوب ناس"]} />
      </div>

      <h4
        className="text-center p-3 mt-5 mb-5 display-4 jumbotron"
        style={{ fontWeight: "600" }}
      >
        اعلانات جديدة
      </h4>
      <NewArrivals />

      <h4
        className="text-center p-3 mt-5 mb-5 display-4 jumbotron"
        style={{ fontWeight: "600" }}
      >
        اعلي التبرعات
      </h4>
      <BestSellers />

      <br />
      <br />
    </>
  );
};

export default Home;
