import { Link } from "expo-router";
import { ActivityIndicator, StyleSheet, Text, View , Image, ImageBackground} from "react-native";
const logoImg = require("../assets/images/react-logo.png")

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      {/* <Image source={logoImg} style={{width:300, height: 300}}/> */}
      {/* <Image source={{uri:"https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8="}} style={{width:300, height: 300}}/> */}
      {/* <ImageBackground source={logoImg}>
          <Text>Hello</Text>
      </ImageBackground> */}
      <Text style={styles.content}> Hello World</Text>
      <Link href={"/about"}>Visit about screen</Link>
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
      }
})