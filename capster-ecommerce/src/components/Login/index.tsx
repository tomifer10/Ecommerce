import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { dataUsers } from "../../interfaces/dataUsers";
import { userGreetingContext } from "../../context/userContext";
import { useAuthenticationDispatch } from "../../context/authContext";

type Props = {};

const Login = (_props: Props) => {
  const [isLogginClicked, setLogginClicked] = useState(false);
  const [JSONuser, setJSONuser] = useState<dataUsers[]>([]);
  const callNavigate = useNavigate();
  const userContext = userGreetingContext();
  const authDispatch = useAuthenticationDispatch();

  const getUserData = async () => {
    try {
      const request = await fetch("src/data/users.json");
      const JSONrequest = await request.json();

      return JSONrequest;
    } catch (error) {
      console.log(error);
    }
  };

  const comparingUsers = async () => {
    const userDataResponse = await getUserData();
    if (userDataResponse) {
      setJSONuser(userDataResponse);
    }
  };

  useEffect(() => {
    comparingUsers();
  }, []);

  const loginInfoForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userEmail = e.currentTarget.email.value;
    const userPassword = e.currentTarget.password.value;

    console.log("Email:", userEmail);
    console.log("Password:", userPassword);

    const userSuccessfullyFound = JSONuser.find(
      (element) =>
        element.email === userEmail && element.password === userPassword
    );

    if (userSuccessfullyFound) {
      userContext.setUser(userSuccessfullyFound);
      console.log("User successfully found:", userSuccessfullyFound);

      authDispatch({ type: "LOGIN" });

      callNavigate("/greeting");
    } else {
      alert("Wrong Username or Password. Please try again");
    }
  };

  return (
    <div className="log-container">
      {isLogginClicked ? (
        <>
          <div>
            <form className="user-input" onSubmit={loginInfoForm}>
              <input type="email" name="email" placeholder="Email" required />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
              />
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
};

export default Login;
