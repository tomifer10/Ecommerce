import { createContext } from "react";

export const UserContext = createContext(null);

export const userProvider = ({ children }) => {
  const userData = {
    Name: "Lulu Stranululu",
    mail: "lulu@gmail.com",
  };
  return (
    <UserContext.Provider value={userData.Name}>
      {children}
    </UserContext.Provider>
  );
};
