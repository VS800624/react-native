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
} from "react-native";
const logoImg = require("../assets/images/react-logo.png");

export default function Index() {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <View style={styles.container}>
      <ScrollView>
        <Pressable onPress={() => console.log("Image pressed")}>
          <Image source={logoImg} style={{width:300, height: 300}}/>
        </Pressable>
        {/* <ImageBackground source={logoImg}>
          <Text>Hello</Text>
          </ImageBackground> */}
          <Pressable onPress={() => console.log("hello world")}>
            <Text style={styles.content}> Hello World</Text>
          </Pressable>
        <Link href={"/about"}>Visit about screen</Link>
        <Button title="press" onPress={() => setIsVisible(true)} color="green"
        />
       <Modal visible={isVisible} onRequestClose={() => setIsVisible(false)} animationType="slide" presentationStyle="pageSheet">
        {/* presentationStyle only effect IOS not the android */}
        {/* onRequestClose is trigger when user press the back button on android or dismisses the modal with gesture in ios */}
        <View style={styles.container}>
          <Text>Modal</Text>
           <Image source={{uri:"https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8="}} style={{width:300, height: 300}}/>
          <Button title="close" color="midnightblue" onPress={() => setIsVisible(false)}/>
        </View>
       </Modal>
      </ScrollView>
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
