import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Header from "@/src/component/Header/header";
import { router } from "expo-router";

import { useProduct } from "@/src/hook/useProduct";

export default function Index() {
  const { products, addToCart, loading, fetchProducts,hasMore } = useProduct();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        padding: 10,
      }}
    >
      <Header />
      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => router.push(`/product/${item.id}`)}
            style={{
              backgroundColor: "#f5f5f5",
              width: "48%",
              marginBottom: 12,
              borderRadius: 10,
              padding: 10,
            }}
          >
            <Image
              source={{ uri: item.images[0] }}
              style={{
                width: "100%",
                height: 150,
                resizeMode: "contain",
              }}
            />

            <Text
              numberOfLines={1}
              style={{
                fontWeight: "bold",
                marginTop: 8,
              }}
            >
              {item.title}
            </Text>

            <Text
              style={{
                color: "gray",
                marginTop: 4,
              }}
            >
              {item.category}
            </Text>

            <Text
              style={{
                marginTop: 4,
                fontSize: 16,
                fontWeight: "600",
              }}
            >
              $ {item.price}
            </Text>

            <TouchableOpacity
              onPress={() => addToCart(item.id)}
              style={{
                backgroundColor: "black",
                marginTop: 10,
                padding: 10,
                borderRadius: 8,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#fff" }}>Add To Cart</Text>
            </TouchableOpacity>
          </Pressable>
        )}
        onEndReached={() =>{
          if(!loading && hasMore){
            fetchProducts()
          }
        }}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading ? (
            <Text style={{ textAlign: "center" }}>Loading...</Text>
          ) : null
        }
      />
    </View>
  );
}
