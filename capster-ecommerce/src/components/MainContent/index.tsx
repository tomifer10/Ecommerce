import "./maincontent.css";
import maincap from "/Users/tomifernandez/Desktop/Assembler/Ecommerce/capster-ecommerce/src/assets/modern-baseball-cap-design-elegant-garment-generated-by-ai.jpg";

type Props = {};

export default function MainContent({}: Props) {
  return (
    <div>
      <div className="welcome-title">
        <h2 className="welcome-comment">
          New cap. <br />
          New energy.
        </h2>
        <p> Free delivery on orders over $40</p>
      </div>
      <div className="welcome-image">
        <img id="main-cap" src={maincap} alt="" />
      </div>
      <div>
        <h2 className="shop-text"> SHOP NOW!</h2>
      </div>
    </div>
  );
}
