import React from "react";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import ShowPaymentInfo from "../cards/ShowPaymentInfo";

const Orders = ({ orders, handleStatusChange }) => {
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

  return (
    <>
      {orders.map((order) => (
        <div key={order._id} className="row pb-5">
          <div
            className=" btn-block"
            style={{ backgroundColor: "#131313", fontSize: "0.7rem" }}
          >
            <ShowPaymentInfo order={order} showStatus={false} />

            <div className="row">
              <div className="col-md-4">حالة التبرع</div>
              <div className="col-md-8">
                <select
                  onChange={(e) =>
                    handleStatusChange(order._id, e.target.value)
                  }
                  className="form-control"
                  defaultValue={order.orderStatus}
                  name="حالة التبرع"
                >
                  <option value="الحالة">لم يتم وصول التبرع حتي الان</option>
                  <option value="Processing">قيد استلام التبرع</option>
                  <option value="Dispatched">موقوف</option>
                  <option value="Cancelled">تم الغاء عملية التبرع</option>
                  <option value="Completed">تم عملية التبرع</option>
                </select>
              </div>
            </div>
          </div>

          {showOrderInTable(order)}
        </div>
      ))}
    </>
  );
};

export default Orders;
