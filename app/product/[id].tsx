import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";

import { useLocalSearchParams } from "expo-router";
import { useProduct } from "@/src/hook/useProduct";

export default function ProductDetail() {
  const { ProductsData } = useProduct();

  const { id } = useLocalSearchParams();

  const productDetails = ProductsData.find(
    (item:any) => Number(item.id) === Number(id)
  );

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: productDetails?.image }}
          style={styles.image}
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.category}>
          {productDetails?.category}
        </Text>

        <Text style={styles.title}>
          {productDetails?.title}
        </Text>

        <Text style={styles.price}>
          ${productDetails?.price}
        </Text>

        <Text style={styles.description}>
          {productDetails?.description}
        </Text>

        <TouchableOpacity style={styles.cartButton}>
          <Text style={styles.buttonText}>
            Add To Cart
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buttonText}>
            Buy Now
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  imageContainer: {
    alignItems: "center",
    marginTop: 30,
  },

  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },

  content: {
    padding: 20,
  },

  category: {
    fontSize: 16,
    color: "gray",
    textTransform: "capitalize",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    color: "#000",
  },

  price: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 15,
    color: "#000",
  },

  description: {
    fontSize: 16,
    color: "#555",
    marginTop: 20,
    lineHeight: 24,
  },

  cartButton: {
    backgroundColor: "#000",
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 30,
    alignItems: "center",
  },

  buyButton: {
    backgroundColor: "orange",
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 15,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});