import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import { dataProducts } from "../../interfaces/dataProducts";

export interface ProductContextType {
  array: dataProducts[];
  setArray: Function;
}

const products = createContext({} as ProductContextType);

export const ProductContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [array, setArray] = useState([]);

  return (
    <products.Provider value={{ array, setArray }}>
      {children}
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
