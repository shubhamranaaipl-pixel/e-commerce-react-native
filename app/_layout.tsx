import { Stack } from "expo-router";
import { ProductProvider } from "@/src/context/ProductContext";
import CartProvider from "@/src/context/CartContext";
import * as Notifications from "expo-notifications";

import { requestNotificationPermission } from "@/src/service/notification";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,

    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

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
