import "./prodcatalog.css";
import ProdCard from "../ProdCard";
import { useProductContext } from "../../context/prodContext";

type Props = {};

export default function ProdCatalog({}: Props) {
  const listOfProducts = useProductContext();
  return (
    <>
      <div className="page-container">
        <h2>Basketball Caps</h2>
        <div className="products-container">
          {listOfProducts.array.map((product) => {
            return (
              <ProdCard
                key={product.Name}
                id={product.Id}
                Image={product.Image}
                Name={product.Name}
                Price={product.Price}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
