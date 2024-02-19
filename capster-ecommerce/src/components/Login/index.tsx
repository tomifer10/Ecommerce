import { useState } from "react";
import "./login.css";

type Props = {};

export default function Login({}: Props) {
  const [isLogginClicked, setLogginClicked] = useState(false);
  return (
    <div className="log-container">
      {isLogginClicked ? (
        <>
          <div>
            <form className="user-input" action="">
              <input type="email" placeholder="Email" required></input>
              <input type="password" placeholder="Password" required></input>
              <button type="submit" id="firstlog">
                LOG IN
              </button>
            </form>
          </div>
        </>
      ) : (
        <button id="firstlog" onClick={() => setLogginClicked(true)}>
          LOG IN
        </button>
      )}
    </div>
  );
}
