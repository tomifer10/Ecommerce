import "./cart.css";
import { useState } from "react";
import { dataProducts } from "../../interfaces/dataProducts";
import { userGreetingContext } from "../../context/userContext";

type Props = {
  product: dataProducts | undefined;
  count: number;
  calcTotal: Function;
};

export default function Cart({ product, count, calcTotal }: Props) {
  const [counter, setCounter] = useState(count);
  const user = userGreetingContext().user;

  const addToCart = () => {
    setCounter((prevState) => prevState + 1);
    if (user && user.cart && product) user.cart.push(product);
    console.log(user.cart);
    calcTotal();
  };

  const removeFromCart = (itemToRemove: dataProducts | undefined) => {
    setCounter((prevState) => prevState - 1);
    if (user.cart && itemToRemove) {
      // Utiliza filter para eliminar solo el elemento específico del carrito
      user.cart = user.cart.filter((item) => item.id !== itemToRemove.id);
      calcTotal();
    }
  };
  const cartRemoval = () => {
    // Elimina todos los elementos asociados al producto del carrito
    for (let i = 0; i < counter; i++) {
      removeFromCart(product);
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
                <button
                  className="check-btn"
                  onClick={() => removeFromCart(product)}
                >
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
