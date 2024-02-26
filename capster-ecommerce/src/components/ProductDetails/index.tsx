import "./productdetails.css";
import { useProductContext } from "../../context/prodContext";
import {
  UserContextGreet,
  userGreetingContext,
} from "../../context/userContext";
import { useParams } from "react-router-dom";
import { SetStateAction, useState } from "react";

export default function ProductDetails({}) {
  const { productId } = useParams();
  const productcontext = useProductContext();
  const [selectedSize, setSelectedSize] = useState("");
  const [count, setCount] = useState(1);

  const renderProduct = productcontext.array.find(
    (element) => element.id === productId
  );

  const userContext = userGreetingContext().array;
  const addCapToArray = () => {
    for (let i = 0; i < count; i++) {
      if (renderProduct && userContext) {
        userContext.cart.push(renderProduct);
      }
      console.log(userContext.cart);
      console.log(count);
    }
  };

  const handleSizeChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelectedSize(event.target.value);
  };

  return (
    <>
      <div className="cap-container">
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
      </div>
    </>
  );
}
