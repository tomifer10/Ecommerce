import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import { dataUsers } from "../../interfaces/dataUsers";

export interface UserContextGreet {
  user: dataUsers;
  setUser: Function;
}

const users = createContext({} as UserContextGreet);

export const UserContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState({} as dataUsers);

  return <users.Provider value={{ user, setUser }}>{children}</users.Provider>;
};

export const userGreetingContext = () => {
  const context = useContext(users);
  if (!context) {
    throw new Error("Error!");
  }
  return context;
};
