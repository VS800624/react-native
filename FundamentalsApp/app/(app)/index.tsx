import { Text, View, Pressable, StyleSheet } from "react-native";
import ".././global.css"
import { Link } from "expo-router";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Home page</Text>
      <Link href="/about">About</Link>
      <Link href="/profile/index">Profile</Link>
      <Link href="/products">Products</Link>
      <Link href="/missing-routes">Missing Routes</Link>
      <Link href="/login">Login</Link>

      <Link href="/products/best-sellers/playstation" asChild>
      {/* asChild tells Link: Don’t render your own button, use my child component instead. This is why Pressable works perfectly with navigation.*/}
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Playstation</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ea5e9",
    padding: 12,
    borderRadius: 6
  },
  buttonText: {
    color: "white",
    fontSize: 16
  }
})