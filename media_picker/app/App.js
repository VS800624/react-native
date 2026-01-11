import { useState } from "react";
import {
  Button,
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from 'expo-image-picker';
import "./global.css"

export default function App() {
  const [media, setMedia] = useState(null)
 

  const pickMedia = async() => {
    // Ask permission
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if(permission.status !== "granted"){
      alert("Permission is required")
      return 
    }

    // Open gallery
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'], //images + videos
      allowsMultipleSelection: true,   // ✅ important
      allowsEditing: true,
      quality: 1
    })

    if(!result.canceled){
      setMedia(result.assets[0])
      
    }
}

  return (
    <SafeAreaView className="flex-1 justify-center items-center ">
      <Button title="Pic image or video" onPress={pickMedia}/>
      {media && (
        <>
          <Text>
            Selected type: {media.type}
          </Text>
          {media.type === "image" && (
            <Image source={{uri: media.uri}} className="w-80 h-80 mt-10" resizeMode="cover"/>
          )}
        </>
      )}

    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "",
    paddingTop: StatusBar.currentHeight,
  },
});

// result will look like this
// {
//   canceled: false,
//   assets: [
//     {
//       uri: "file:///data/user/0/host.exp.exponent/cache/...",
//       type: "image",   // or "video"
//       width: 3024,
//       height: 4032,
//       fileName: "photo.jpg",
//       fileSize: 123456
//     }
//   ]
// }
