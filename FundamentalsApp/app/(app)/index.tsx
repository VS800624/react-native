import { Text, View } from "react-native";
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
    </View>
  );
}
