import { Link } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  StatusBar,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const logoImg = require("../assets/images/react-logo.png");

export default function Index() {
  const [isVisibleStatus, setIsVisibleStatus] = useState(false)
  return (
    <View style={styles.container}>
      <Text></Text>
      {/* StatusBar is specially for android */}
       <StatusBar barStyle="dark-content" backgroundColor="midnightblue" hidden={isVisibleStatus}  /> 
       {/* <Button title="Press me" onPress={() => setIsVisibleStatus(!isVisibleStatus)}></Button> */}
        {/* <ActivityIndicator size="large"/> */}
        {/* <ActivityIndicator size="large" color="green" animating={isVisibleStatus}/> */}
        {/* <Button title="alert" onPress={() => Alert.alert("Invalid data!")}/> */}
        <Button title="alert 2" onPress={() => Alert.alert("Invalid data!", "DOB incorrect")}/>
        <Button title="alert 3" onPress={() => Alert.alert("Invalid data!", "DOB incorrect", [
         {
           text: "Cancel",
           onPress: () => console.log("Cancel pressed")
         },
         {
           text: "OK",
           onPress: () => console.log("Ok pressed")
         },
        ])}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  content: {
    fontSize: 30,
  },
});
