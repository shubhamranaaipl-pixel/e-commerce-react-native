import { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { useCart } from "../context/CartContext";

export const useProduct = () => {
  const ProductsData = useContext(ProductContext);
  const { addProduct } = useCart();

  const addToCart = (id: any) => {
    const Product = ProductsData?.find((item: any) => item.id === id);
    console.log("The Product is", Product);
    if (Product) {
      addProduct(Product);
    }
  };

  return {
    ProductsData,
    addToCart,
  };
};
