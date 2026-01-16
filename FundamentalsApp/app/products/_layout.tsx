import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";

export default function ProductsLayout() {
  return (
    <SafeAreaView style={styles.container}>
      <Slot />
      <View style={styles.discountedProducts}>
        <Text>Discounted Products</Text>
      </View>
    </SafeAreaView>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center"
  },
 discountedProducts: {
  backgroundColor: "orange",
  padding: 20
 }
})
