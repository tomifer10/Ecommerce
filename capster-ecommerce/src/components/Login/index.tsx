import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { dataUsers } from "../../interfaces/dataUsers";

type Props = {};

const Login = (_props: Props) => {
  const [isLogginClicked, setLogginClicked] = useState(false);

  const getUserData = async () => {
    try {
      const request = await fetch("src/data/users.json");
      const JSONrequest = await request.json();

      return JSONrequest;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getUserDataResponse = async () => {
      const userDataResponse = await getUserData();
      setJSONuser(userDataResponse);
    };
    getUserDataResponse();
  }, []);

  const [user, setUser] = useState([]);
  const [JSONuser, setJSONuser] = useState([] as dataUsers[]);

  const callNavigate = useNavigate();

  const loginInfoForm = (e: { preventDefault: () => void; target: any }) => {
    const userInfo = e.target;
    const userEmail = userInfo.email.value;
    const userPassword = userInfo.password.value;

    const userSuccesfullyFound = JSONuser.find(
      (element) =>
        element.email === userEmail && element.password === userPassword
    );

    if (userSuccesfullyFound) {
      setUser(user);
      //Aqui va el navigate a la pagina de productos
      callNavigate("/greeting");
    } else {
      alert("Wrong Username or Password. Please try again");
    }
  };

  return (
    //export default function Login({}: Props) {

    <div className="log-container">
      {isLogginClicked ? (
        <>
          <div>
            <form className="user-input" onSubmit={loginInfoForm}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
              ></input>
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
              ></input>
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
