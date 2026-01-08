import { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Pokemon from "../components/pokemon";
import "../global.css";

const App = () => {
  const [name, setName] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <TextInput
        className="m-4 h-12  border border-gray-300 rounded-lg text-base"
        onChangeText={setName}
        //or onChangeText={(text) => setName(text)}
        placeholder="email@example.com"
        // secureTextEntry   //used for password
        // keyboardType="numeric"
        // autoCorrect={false}
        // autoCapitalize="none"
      />
      <TextInput style={styles.input} className="mx-4 mt-10 min-h-[100px]  border border-gray-300 rounded-lg text-base"/>
      <Text className="text-lg  p-4">My name is {name}</Text>
      <View style={styles.switchContainer}>
        <Text className="text-lg">Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={() => setIsDarkMode((prevState) => !prevState)}
        trackColor={{false: "#767577", true: "lightblue"}}
        thumbColor="#f4f4f4"
          />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  input: {
    minHeight: 100
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10
  }
})
