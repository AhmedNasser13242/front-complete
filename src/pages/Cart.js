import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ProductCardInCheckout from "../components/cards/ProductCardInCheckout";
import { userCart } from "../functions/user";

const Cart = () => {
  const history = useNavigate();
  const redirect = (path) => {
    history(path);
  };
  const { cart, user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  const getTotal = () => {
    return cart.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.price;
    }, 0);
  };

  const saveOrderToDb = () => {
    // console.log("cart", JSON.stringify(cart, null, 4));
    userCart(cart, user.token)
      .then((res) => {
        console.log("CART POST RES", res);
        if (res.data.ok) redirect("/checkout");
      })
      .catch((err) => console.log("cart save err", err));
  };

  const saveCashOrderToDb = () => {
    // console.log("cart", JSON.stringify(cart, null, 4));
    dispatch({
      type: "COD",
      payload: true,
    });
    userCart(cart, user.token)
      .then((res) => {
        console.log("CART POST RES", res);
        if (res.data.ok) redirect("/checkout");
      })
      .catch((err) => console.log("cart save err", err));
  };

  const showCartItems = () => (
    <table className="table table-bordered">
      <thead className="thead-light">
        <tr>
          <th scope="col">صورة</th>
          <th scope="col">عنوان</th>
          <th scope="col" hidden>
            Price
          </th>
          <th scope="col" hidden>
            Brand
          </th>
          <th scope="col" hidden>
            Color
          </th>
          <th scope="col">المبلغ</th>
          <th scope="col">توصيل</th>
          <th scope="col">ازالة</th>
        </tr>
      </thead>

      {cart.map((p) => (
        <ProductCardInCheckout key={p._id} p={p} />
      ))}
    </table>
  );

  return (
    <div className="container-fluid pt-2">
      <div className="row">
        <div className="col-md-8">
          <h4>الحقيبة / {cart.length} اعلانات</h4>

          {!cart.length ? (
            <p>
              لا يوجد اعلانات في الحقيبة.{" "}
              <Link to="/shop">اكمل تصفح الاعلانات.</Link>
            </p>
          ) : (
            showCartItems()
          )}
        </div>
        <div className="col-md-4">
          <h4>تفاصيل التبرع</h4>
          <hr />
          <p>الاعلانات</p>
          {cart.map((c, i) => (
            <div key={i}>
              <p>{c.title}</p>
            </div>
          ))}
          <hr />
          الاجمالي: <b>ج.م{getTotal()}</b>
          <hr />
          {user ? (
            <>
              <button
                onClick={saveOrderToDb}
                className="btn btn-sm btn-primary mt-2"
                disabled={!cart.length}
              >
                اكمل عملية الشراء
              </button>
              <br />
              <button
                onClick={saveCashOrderToDb}
                className="btn btn-sm btn-warning mt-2"
                disabled={!cart.length}
              >
                التوصيل
              </button>
            </>
          ) : (
            <button className="btn btn-sm btn-primary mt-2">
              <Link
                to={{
                  pathname: "/login",
                  state: { from: "cart" },
                }}
              >
                سجل دخولك اولا حتي تكمل عملية الشراء
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
