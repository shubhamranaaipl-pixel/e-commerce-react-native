import {
  View,
  Text,
  FlatList,
  Pressable,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useCart } from "@/src/context/CartContext";

export default function Cart() {
  const { cart, deletedCart, deleteAllData } = useCart();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Cart 🛒</Text>

      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 120 }}
        renderItem={({ item }) => (
          <Pressable style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />

            <View style={styles.info}>
              <Text numberOfLines={2} style={styles.title}>
                {item.title}
              </Text>

              <Text style={styles.price}>₹ {item.price}</Text>

              <TouchableOpacity
                onPress={() => deletedCart(item.id)}
                style={styles.deleteBtn}
              >
                <Text style={styles.deleteText}>Remove</Text>
              </TouchableOpacity>
            </View>
          </Pressable>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>Your cart is empty 🛍️</Text>
        }
      />

      {cart.length !== 0 && (
        <TouchableOpacity
          onPress={deleteAllData}
          style={styles.orderBtn}
        >
          <Text style={styles.orderText}>Place Order</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fa",
    padding: 15,
  },

  header: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 10,
    color: "#111",
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 12,
    borderRadius: 12,
    elevation: 3,
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
    backgroundColor: "#eee",
  },

  info: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "space-between",
  },

  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },

  price: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1e90ff",
    marginTop: 5,
  },

  deleteBtn: {
    marginTop: 8,
    alignSelf: "flex-start",
    backgroundColor: "#ff4d4d",
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 8,
  },

  deleteText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 12,
  },

  orderBtn: {
    position: "absolute",
    bottom: 20,
    left: 15,
    right: 15,
    backgroundColor: "#2ecc71",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },

  orderText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },

  empty: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 16,
    color: "#888",
  },
});