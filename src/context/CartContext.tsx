import { useEffect, useState, createContext, useContext } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

const CartContext = createContext<any>(null);

interface ICart {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  price: number;
}

export default function CartProvider({ children }: any) {
  const [cart, setCart] = useState<ICart[]>([]);

  const loadCart = async () => {
    try {
      const data = await AsyncStorage.getItem("cart");
      if (data) {
        setCart(JSON.parse(data));
      }
    } catch (err) {
      console.log(err);
    }
  };
  const addProduct = async (product: any) => {
    try {
      const updatedCart = [...cart, product];
      setCart(updatedCart);

      await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
    } catch (err) {
      console.log(err);
    }
  };
  const deletedCart = async (id: any) => {
    try {
      const updatedCart = cart.filter((item) => item.id !== id);
      setCart(updatedCart);
      await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
    } catch (err) {
      console.log(err);
    }
  };
  const deleteAllData=async()=>{
    try{
      await AsyncStorage.removeItem("cart");
      setCart([]);

    }
    catch(err){
        console.log(err)
    }
  }
  useEffect(() => {
    loadCart();
  

  }, []);
  return (
    <CartContext.Provider value={{ cart, addProduct, deletedCart,deleteAllData }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("use Cart msut be used with the Cart Provider");
  }

  return context;
};

// export default CartContext;
