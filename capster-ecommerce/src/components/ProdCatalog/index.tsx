import "./prodcatalog.css";
import ProdCard from "../ProdCard";
import { useProductContext } from "../../context/prodContext";
import { Link } from "react-router-dom";

type Props = {};

export default function ProdCatalog({}: Props) {
  const listOfProducts = useProductContext();
  return (
    <div className="page-container">
      <h2>Basketball Caps</h2>
      <div className="products-container">
        {listOfProducts.array.map((product, index) => {
          return (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/${product.id}`}
              key={index}
            >
              <ProdCard
                key={product.id}
                id={product.id}
                Image={product.Image}
                Name={product.Name}
                Price={product.Price}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
