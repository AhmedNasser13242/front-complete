import React, { useState, useEffect } from "react";
import UserNav from "../../components/nav/UserNav";
import { getUserOrders } from "../../functions/user";
import { useSelector, useDispatch } from "react-redux";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import ShowPaymentInfo from "../../components/cards/ShowPaymentInfo";
import Invoice from "../../components/order/Invoice";

const History = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadUserOrders();
  }, []);

  const loadUserOrders = () =>
    getUserOrders(user.token).then((res) => {
      console.log(JSON.stringify(res.data, null, 4));
      setOrders(res.data);
    });

  const showOrderInTable = (order) => (
    <table className="table table-bordered">
      <thead className="thead-light">
        <tr></tr>
      </thead>

      <tbody>
        {order.products.map((p, i) => (
          <tr key={i}></tr>
        ))}
      </tbody>
    </table>
  );

  const showDownloadLink = (order) => (
    <div document={<Invoice order={order} />}></div>
  );

  const showEachOrders = () =>
    orders.map((order, i) => (
      <div
        key={i}
        className="m-5 p-3 card"
        style={{ backgroundColor: "#131313" }}
      >
        <ShowPaymentInfo order={order} />
        {showOrderInTable(order)}
        <div className="row">
          <div className="col">{showDownloadLink(order)}</div>
        </div>
      </div>
    ));

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <UserNav />
        </div>
        <div className="col text-center">
          <h4>
            {orders.length > 0 ? "طلبات التبرع الخاصة بك" : "لا يوجد طلب تبرع"}
          </h4>
          {showEachOrders()}
        </div>
      </div>
    </div>
  );
};

export default History;
