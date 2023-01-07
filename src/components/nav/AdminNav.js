import React from "react";
import { Link } from "react-router-dom";

const AdminNav = () => (
  <nav>
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link to="/admin/dashboard" className="nav-link">
          قائمة التحكم
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/product" className="nav-link">
          انشاء اعلان
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/products" className="nav-link">
          مشاهدة الاعلانات
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/category" className="nav-link">
          انشاء دولة
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/sub" className="nav-link">
          انشاء مكان تبرع
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/coupon" className="nav-link" hidden>
          Coupon
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/user/password" className="nav-link">
          اعادة تعيين كلمة مرور
        </Link>
      </li>
    </ul>
  </nav>
);

export default AdminNav;
