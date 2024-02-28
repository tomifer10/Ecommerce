import Cart from "../Cart";
import { useState, useEffect } from "react";
import InitialCart from "../InitialCart";
import { userGreetingContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import "./checkoutcart.css";

type Props = {};

type ProductQty = {
  [productId: number]: number;
};

export default function CheckOutCart({}: Props) {
  const userProductCart = userGreetingContext().user.cart || [];
  const callNavigate = useNavigate();

  const [total, setTotal] = useState(0);

  const calcTotal = () => {
    let price: number = 0;
    userProductCart.map((element) => {
      price += element.Price;
    });
    setTotal(price);
  };
  useEffect(() => {
    calcTotal();
  }, []);

  const productQuantity: ProductQty = {};
  userProductCart?.map((item) => {
    const productId = parseFloat(item.id);
    productQuantity[productId] = productQuantity[productId]
      ? productQuantity[productId] + 1
      : 1;
  });

  return (
    <div className="checkout-data">
      {userProductCart.length === 0 ? (
        <InitialCart />
      ) : (
        <>
          <h2>SHOPPING BAG</h2>
          <div className="cap-container">
            {Object.entries(productQuantity).map(([productId, count]) => {
              return (
                <div key={productId}>
                  <Cart
                    product={userProductCart.find(
                      (item) => item.id === productId
                    )}
                    count={count}
                    calcTotal={calcTotal}
                  />
                </div>
              );
            })}
          </div>
          <div className="sangi-container">
            <div className="totalprice">
              <p>Subtotal</p>
              <p>${total}</p>
            </div>
            <div className="continue-container">
              <button
                className="continue-btn"
                onClick={() => callNavigate("/catalog")}
              >
                Continue Shopping
              </button>
              <button className="continue-btn">Proceed to Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
