import "./productdetails.css";
import { useProductContext } from "../../context/prodContext";
import { userGreetingContext } from "../../context/userContext";
import { useParams } from "react-router-dom";
import { SetStateAction, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductDetails({}) {
  const { user, setUser } = userGreetingContext();
  const { productId } = useParams();
  const productcontext = useProductContext();
  const [selectedSize, setSelectedSize] = useState("");
  const [count, setCount] = useState(1);
  const callNavigate = useNavigate();

  const renderProduct = productcontext.array.find(
    (element) => element.id === productId
  );

  const addCapToArray = () => {
    console.log(user);

    for (let i = 0; i < count; i++) {
      if (user.cart && renderProduct && user) {
        user.cart.push(renderProduct);
      }
    }
    console.log(user.cart);
  };

  const handleSizeChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelectedSize(event.target.value);
  };

  return (
    <>
      <div className="cap-container-details">
        <img className="cap-image" src={renderProduct?.Image} alt="cap-image" />
        <h4 className="cap-name">{renderProduct?.Name} Cap</h4>
        <p className="cap-description">{renderProduct?.Description}</p>
        <p className="cap-material">{renderProduct?.Material}</p>
        <div className="cap-size">
          <label htmlFor="size">Size: </label>
          <select id="size" value={selectedSize} onChange={handleSizeChange}>
            <option value="">...</option>
            {renderProduct?.Size.split(", ").map((size, index) => (
              <option key={index} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <p className="cap-price">${renderProduct?.Price}</p>
        <button className="add-btn" onClick={addCapToArray}>
          Add to cart
        </button>
        <button
          className="continue-btn"
          onClick={() => callNavigate("/catalog")}
        >
          {" "}
          Continue Shopping
        </button>
      </div>
    </>
  );
}
