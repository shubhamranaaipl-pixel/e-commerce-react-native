import { useContext, useState, useEffect, createContext } from "react";

const ProductContext = createContext<any>(null);
interface IProduct {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  price: number;
}

export function ProductProvider({ children }: any) {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading,setLoading]=useState(false);
  const [page,setPage]=useState(1);
  const [data,setData]=useState<IProduct[]>([]);



  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");

      const data = await response.json();
      setProducts(data);

      setData(data.slice(0,6))
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContext;
