import { useEffect } from "react";
import Header from "../../components/Header";
import ProdCatalog from "../../components/ProdCatalog";
import { useProductContext } from "../../context/prodContext";

type Props = {};

export default function Catalog({}: Props) {
  const listOfProducts = useProductContext();

  const getProductData = async () => {
    try {
      const request = await fetch("src/data/products.json");
      const JSONrequest = await request.json();

      return JSONrequest;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getProductsDataResponse = async () => {
      const productDataResponse = await getProductData();
      listOfProducts.setArray(productDataResponse);
    };
    getProductsDataResponse();
  }, []);

  return (
    <>
      <Header />
      <ProdCatalog />
    </>
  );
}
