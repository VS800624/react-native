import { View, Text, Pressable, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>

      {/* Upload Button */}
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.pressed,
        ]}
        onPress={() => navigation.navigate("Upload")}
      >
        <Text style={styles.buttonText}>Upload Media</Text>
      </Pressable>

      {/* Drive Button */}
      <Pressable
        style={({ pressed }) => [
          styles.button,
          styles.secondaryButton,
          pressed && styles.pressed,
        ]}
        onPress={() => navigation.navigate("Drive")}
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
    backgroundColor: "#2563eb",
    alignItems: "center",
    marginBottom: 16,
    elevation: 3,
  },

  secondaryButton: {
    backgroundColor: "#16a34a",
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
