import "./cart.css";
import { useState } from "react";
import { dataProducts } from "../../interfaces/dataProducts";
import { userGreetingContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

type Props = {
  product: dataProducts | undefined;
  count: number;
  price: Function;
};

export default function Cart({ product, count, price }: Props) {
  const [counter, setCounter] = useState(count);
  const user = userGreetingContext().user;
  const callNavigate = useNavigate();

  const addToCart = () => {
    setCounter((prevState) => prevState + 1);
    if (user && user.cart && product) user.cart.push(product);
    console.log(user.cart);
    price();
  };

  const removeFromCart = () => {
    setCounter((prevState) => prevState - 1);
    if (user.cart && product) {
      const index = user.cart.findIndex((element) => {
        element.id === product.id;
      });
      user.cart.splice(index, 1);
    }
    price();
  };
  const cartRemoval = () => {
    for (let i = 0; i < counter; i++) {
      removeFromCart();
    }
  };
  return (
    <>
      {counter > 0 && (
        <>
          <div className="check-cap">
            <div className="check-cap-image">
              <img src={product?.Image} alt={product?.Name} />
            </div>
            <div className="check-cap-info">
              <h3>{product?.Name}</h3>
              <h4>${product?.Price}</h4>
              <p> Qty: {counter}</p>
              <span>
                <button className="check-btn" onClick={removeFromCart}>
                  -
                </button>
              </span>
              <span>
                <button className="check-btn" onClick={addToCart}>
                  +
                </button>{" "}
              </span>
              <span className="remove-btn">
                <button className="check-btn" onClick={cartRemoval}>
                  Remove from cart
                </button>
              </span>
            </div>
          </div>
        </>
      )}
    </>
  );
}
