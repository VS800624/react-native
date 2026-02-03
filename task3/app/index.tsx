import { View, Text, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.pressed
        ]}
        onPress={() => router.push("/upload")}
      >
        <Text style={styles.buttonText}>Upload Media</Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          styles.secondaryButton,
          pressed && styles.pressed
        ]}
        onPress={() => router.push("/drive")}
      >
        <Text style={styles.buttonText}>Open Drive</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },

  button: {
    width: "70%",
    paddingVertical: 14,
    borderRadius: 10,
    backgroundColor: "#2563eb", // blue
    alignItems: "center",
    marginBottom: 16,
    elevation: 3, // Android shadow
  },

  secondaryButton: {
    backgroundColor: "#16a34a", // green
  },

  pressed: {
    opacity: 0.8,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
