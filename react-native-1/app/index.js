import { Link } from "expo-router";
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
} from "react-native";
const logoImg = require("../assets/images/react-logo.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Pressable onPress={() => console.log("Image pressed")}>
          <Image source={logoImg} style={{width:300, height: 300}}/>
        </Pressable>
        {/* <Image source={{uri:"https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8="}} style={{width:300, height: 300}}/> */}
        {/* <ImageBackground source={logoImg}>
          <Text>Hello</Text>
          </ImageBackground> */}
          <Pressable onPress={() => console.log("hello world")}>
            <Text style={styles.content}> Hello World</Text>
          </Pressable>
        <Link href={"/about"}>Visit about screen</Link>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptas cum, soluta doloribus repellendus impedit obcaecati blanditiis. Autem fugit soluta perspiciatis omnis aliquid possimus atque, doloribus molestiae sequi deserunt beatae, modi odit maxime tenetur recusandae! Minus sed alias vero eaque vitae, veritatis atque repellat? Magni repellat vel facilis? Quod laborum perferendis numquam facilis in quisquam vitae adipisci eaque quos eum? Reiciendis odit, aperiam omnis, magni dolores dicta ex eveniet aliquam numquam fugiat repellat dignissimos quasi laboriosam quod ratione modi natus deserunt mollitia architecto. Molestias ipsa est repudiandae ad? At vel delectus repellendus labore odit accusamus id, ad ab velit fugiat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos hic nostrum amet voluptatum sit, reiciendis soluta dicta incidunt nesciunt quis suscipit animi itaque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur accusamus impedit vel blanditiis voluptate laboriosam, debitis unde at sint veritatis!</Text>
        <Button title="press" onPress={() => console.log("Button pressed")} color="green"
        />
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
