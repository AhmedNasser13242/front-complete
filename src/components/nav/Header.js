import React, { useState } from "react";
import { Menu, Badge } from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
  LogoutOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import { useDispatch, useSelector } from "react-redux";
import Search from "../forms/Search";

const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");

  let dispatch = useDispatch();
  let { user, cart } = useSelector((state) => ({ ...state }));

  let history = useNavigate();
  const redirect = (path) => {
    history(path);
  };

  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    redirect("/login");
  };

  return (
    <Menu
      style={{ alignItems: "flex-end" }}
      onClick={handleClick}
      selectedKeys={[current]}
      mode="horizontal"
    >
      <Item key="home" icon={<AppstoreOutlined />}>
        <Link to="/">رئيسية</Link>
      </Item>

      <Item key="shop" icon={<ShoppingOutlined />}>
        <Link to="/shop">تبرع</Link>
      </Item>

      <Item key="cart" icon={<ShoppingCartOutlined />}>
        <Link to="/cart">
          <Badge count={cart.length} offset={[9, 0]}>
            حقيبة
          </Badge>
        </Link>
      </Item>

      {!user && (
        <Item key="register" icon={<UserAddOutlined />} className="float-right">
          <Link to="/register">مستخدم جديد</Link>
        </Item>
      )}

      {!user && (
        <Item key="login" icon={<UserOutlined />} className="float-right">
          <Link to="/login">سجل</Link>
        </Item>
      )}

      {user && (
        <SubMenu
          icon={<SettingOutlined />}
          title={"ادارة الحساب"}
          className="float-right"
        >
          {user && user.role === "subscriber" && (
            <Item>
              <Link to="/user/history">الحساب</Link>
            </Item>
          )}

          {user && user.role === "admin" && (
            <Item>
              <Link to="/admin/dashboard">قائمة التحكم</Link>
            </Item>
          )}

          <Item icon={<LogoutOutlined />} onClick={logout}>
            تسجيل خروج
          </Item>
        </SubMenu>
      )}
      <Search />
    </Menu>
  );
};

export default Header;
