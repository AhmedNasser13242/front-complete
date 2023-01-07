import React from "react";
import { Link } from "react-router-dom";
import "../footer.css";
const Footer = () => {
  return (
    <body>
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3>
            <span>متبرع</span>
          </h3>

          <p class="footer-links">
            <Link to="/shop">
              <a>صفحة التبرعات</a>
            </Link>
          </p>

          <p class="footer-company-name">
            Copyright © 2023 <strong>AhmedNasser</strong> تنسب اليه جميع الحقوق
          </p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span>واتس : 01063265174</span>
              رقم الدعم
            </p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>0133189741</p>
          </div>
          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto:ةmfgtwo1616@gmail.com">
                تواصل معنا علي الايميل من الضغط هنا
              </a>
            </p>
          </div>
        </div>
        <div class="footer-right">
          <p class="footer-company-about">
            <span>خاص بالموقع</span>
            <strong>احمد ناصر</strong> تم عمل الموقع بشكل افتراضي فقط وهو ليش
            جاهز تماما للتبرع
          </p>
          <div class="footer-icons">
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa fa-youtube"></i>
            </a>
          </div>
        </div>
      </footer>
    </body>
  );
};

export default Footer;
