import "./greeting.css";
import greetimage from "../../assets/greeting.webp";
import { userGreetingContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

type Props = {};

export default function Greeting({}: Props) {
  const callNavigate = useNavigate();
  return (
    <>
      <div className="greeting-page">
        <div className="greeting-container">
          <div className="welcome">
            <h3>Welcome , we missed you!</h3>
          </div>
          <div>
            <img src={greetimage} alt="" className="greet-image" />
          </div>
          <div>
            <button
              onClick={() => callNavigate("/catalog")}
              className="start-shopping-btn"
            >
              Start shopping
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
