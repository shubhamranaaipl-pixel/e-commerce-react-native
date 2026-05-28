import { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { useCart } from "../context/CartContext";

export const useProduct = () => {
    const { products, fetchProducts,loading,hasMore } =
    useContext(ProductContext);
  const { addProduct } = useCart();

  const addToCart = (id: any) => {
    const updatedCart=products.find((item:any)=>item.id == id)

    if (updatedCart) {
      addProduct(updatedCart);
    }
  };

  return {
    products,
    addToCart,
    fetchProducts
    ,loading,
      hasMore

  };
};
