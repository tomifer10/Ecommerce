import { createContext, useContext, useState } from "react";
import { dataProducts } from "../../interfaces/dataProducts";
import { Outlet } from "react-router-dom";

export interface ProductContextType {
  array: dataProducts[];
  setArray: Function;
}

const products = createContext({} as ProductContextType);

export const ProductContextProvider = () => {
  const [array, setArray] = useState([]);

  return (
    <products.Provider value={{ array, setArray }}>
      {<Outlet />}
    </products.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(products);
  if (!context) {
    throw new Error("Error");
  }
  return context;
};
