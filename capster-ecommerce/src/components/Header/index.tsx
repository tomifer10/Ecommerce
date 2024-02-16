import "./header.css";
import cart from "../../assets/shopping-cart-svgrepo-com.svg";
import menu from "../../assets/menu-svgrepo-com.svg";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="header">
      <div className="menu">
        <img src={menu} alt="" />
      </div>
      <h1 className="logo">Capster</h1>
      <div className="cart">
        <img src={cart} alt="" />
      </div>
    </div>
  );
}
