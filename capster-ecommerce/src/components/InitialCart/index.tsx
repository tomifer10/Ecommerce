import "./initialcart.css";
import { useNavigate } from "react-router-dom";

type Props = {};

export default function InitialCart({}: Props) {
  const callNavigate = useNavigate();
  return (
    <>
      <div className="initial-cart">
        <h2 className="initial-empty">YOUR CART IS EMPTY</h2>
        <button onClick={() => callNavigate("/catalog")} className="tocatalog">
          {" "}
          Continue Shopping
        </button>
      </div>
    </>
  );
}
