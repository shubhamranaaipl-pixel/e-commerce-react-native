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
  const [loading, setLoading] = useState(false);
  const [skip,setSkip]=useState(0)
  const [hasMore, sethasMore] = useState(true);
  const LIMIT=6;


  const fetchProducts = async () => {
    if(loading || !hasMore) return true;

    try {

    setLoading(true);
      const response = await fetch(`https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`);

      const data = await response.json();

      setProducts((prev)=>[
        ...prev,
        ...data.products
      ]);

    setSkip((prev)=>prev+LIMIT);

    if(skip+LIMIT >= data.total){
      sethasMore(false)
    }
    } catch (err) {
      console.log(err);
    }
    finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{products,fetchProducts,loading,hasMore}}>{children}</ProductContext.Provider>
  );
}
export default ProductContext;
