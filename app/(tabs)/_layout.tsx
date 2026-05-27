import { Tabs } from "expo-router";

import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ color, size }) => {
          let iconName: any;

          if (route.name === "index") {
            iconName = "home";
          } else if (route.name === "cart") {
            iconName = "cart";
          } else if (route.name === "orders") {
            iconName = "bag";
          } else if (route.name === "profile") {
            iconName = "person";
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
            />
          );
        },

        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
      })}
    />
  );
}