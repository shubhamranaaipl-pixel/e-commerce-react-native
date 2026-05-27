import { Stack } from "expo-router";
import { ProductProvider } from "@/src/context/ProductContext";
import CartProvider from "@/src/context/CartContext";

export default function RootLayout() {
  return (
    <ProductProvider>
      <CartProvider>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </CartProvider>
    </ProductProvider>
  );
}
