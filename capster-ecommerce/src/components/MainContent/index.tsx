import "./maincontent.css";
import maincap from "/Users/tomifernandez/Desktop/Assembler/Ecommerce/capster-ecommerce/src/assets/modern-baseball-cap-design-elegant-garment-generated-by-ai.jpg";

type Props = {};

export default function MainContent({}: Props) {
  return (
    <div>
      <div className="welcome-title">
        <h2>
          New cap. <br />
          New energy.
        </h2>
        <p> Free delivery on orders over $40</p>
      </div>
      <div className="welcome-image">
        <img id="main-cap" src={maincap} alt="" />
      </div>
      <div className="shop-text">
        <h2> SHOP NOW!</h2>
      </div>
    </div>
  );
}
