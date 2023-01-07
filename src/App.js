import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import Header from "./components/nav/Header";
import SideDrawer from "./components/drawer/SideDrawer";

import RegisterComplete from "./pages/auth/RegisterComplete";
import ForgotPassword from "./pages/auth/ForgotPassword";
import History from "./pages/user/History";
import UserRoute from "./components/routes/UserRoute";
import AdminRoute from "./components/routes/AdminRoute";
import Password from "./pages/user/Password";
import Wishlist from "./pages/user/Wishlist";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CategoryCreate from "./pages/admin/category/CategoryCreate";
import CategoryUpdate from "./pages/admin/category/CategoryUpdate";
import SubCreate from "./pages/admin/sub/SubCreate";
import SubUpdate from "./pages/admin/sub/SubUpdate";
import ProductCreate from "./pages/admin/product/ProductCreate";
import AllProducts from "./pages/admin/product/AllProducts";
import ProductUpdate from "./pages/admin/product/ProductUpdate";
import Product from "./pages/Product";
import CategoryHome from "./pages/category/CategoryHome";
import SubHome from "./pages/sub/SubHome";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import CreateCouponPage from "./pages/admin/coupon/CreateCouponPage";
import Payment from "./pages/Payment";
import Footer from "./components/home/Footer";

import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { currentUser } from "./functions/auth";
import Eyes from "./components/home/Eyes";

const App = () => {
  const dispatch = useDispatch();

  // to check firebase auth state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        // console.log("user", user);

        currentUser(idTokenResult.token)
          .then((res) => {
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                name: res.data.name,
                email: res.data.email,
                token: idTokenResult.token,
                role: res.data.role,
                _id: res.data._id,
              },
            });
          })
          .catch((err) => console.log(err));
      }
    });
    // cleanup
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <>
      <Header />
      <SideDrawer />
      <ToastContainer />
      <Routes>
        <Route exact path="/register/complete" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/" element={<RegisterComplete />} />
        <Route exact path="/forgot/password" element={<ForgotPassword />} />
        <Route
          exact
          path="/user/history"
          element={
            <UserRoute>
              <History />
            </UserRoute>
          }
        />
        <Route
          exact
          path="/user/password"
          element={
            <UserRoute>
              <Password />
            </UserRoute>
          }
        />
        <Route
          exact
          path="/user/wishlist"
          element={
            <UserRoute>
              <Wishlist />
            </UserRoute>
          }
        />
        <Route
          exact
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
        <Route
          exact
          path="/admin/category"
          element={
            <AdminRoute>
              <CategoryCreate />
            </AdminRoute>
          }
        />
        <Route
          exact
          path="/admin/category/:slug"
          element={
            <AdminRoute>
              <CategoryUpdate />
            </AdminRoute>
          }
        />
        <Route
          exact
          path="/admin/sub"
          element={
            <AdminRoute>
              <SubCreate />
            </AdminRoute>
          }
        />
        <Route
          exact
          path="/admin/sub/:slug"
          element={
            <AdminRoute>
              <SubUpdate />
            </AdminRoute>
          }
        />
        <Route
          exact
          path="/admin/product"
          element={
            <AdminRoute>
              <ProductCreate />
            </AdminRoute>
          }
        />
        <Route
          exact
          path="/admin/products"
          element={
            <AdminRoute>
              <AllProducts />
            </AdminRoute>
          }
        />
        <Route
          exact
          path="/admin/product/:slug"
          element={
            <AdminRoute>
              <ProductUpdate />
            </AdminRoute>
          }
        />
        <Route exact path="/product/:slug" element={<Product />} />
        <Route exact path="/category/:slug" element={<CategoryHome />} />
        <Route exact path="/sub/:slug" element={<SubHome />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route
          exact
          path="/checkout"
          element={
            <UserRoute>
              <Checkout />
            </UserRoute>
          }
        />
        <Route
          exact
          path="/admin/coupon"
          element={
            <AdminRoute>
              <CreateCouponPage />
            </AdminRoute>
          }
        />
        <Route
          exact
          path="/payment"
          element={
            <UserRoute>
              <Payment />
            </UserRoute>
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
