import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, StyleSheet, Text, View } from "react-native";

export default function RootLayout() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
      source={require("../../assets/images/react-logo.png")}
      style={styles.logo}
      />
      <Slot />
    </SafeAreaView>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 20
  }
})
