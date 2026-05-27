import { View, TextInput,Image,StyleSheet } from "react-native";

export default function Header() {
return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/7422/7422028.png",
        }}
        style={styles.icon}
      />

      <TextInput
        placeholder="Search..."
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    position: "relative",
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingLeft: 45,
    fontSize: 16,
  },

  icon: {
    width: 20,
    height: 20,
    position: "absolute",
    left: 15,
    top: 15,
    zIndex: 1,
  },
});

