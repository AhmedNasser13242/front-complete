import React from "react";
import { Link } from "react-router-dom";

const UserNav = () => (
  <nav>
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link to="/user/history" className="nav-link">
          طلبات التبرع
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/user/password" className="nav-link">
          تغيير كلمة المرور
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/user/wishlist" className="nav-link">
          قائمة التبرعات
        </Link>
      </li>
    </ul>
  </nav>
);

export default UserNav;
