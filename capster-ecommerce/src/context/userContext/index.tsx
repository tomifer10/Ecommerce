import { createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { dataUsers } from "../../interfaces/dataUsers";

export interface UserContextGreet {
  array: dataUsers;
  setArray: Function;
}

const users = createContext({} as UserContextGreet);

export const UserContextProvider = () => {
  const [array, setArray] = useState({} as dataUsers);

  return (
    <users.Provider value={{ array, setArray }}>{<Outlet />}</users.Provider>
  );
};

export const userGreetingContext = () => {
  const context = useContext(users);
  if (!context) {
    throw new Error("Error!");
  }
  return context;
};
