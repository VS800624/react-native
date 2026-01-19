import { View, Text, Image, Button, StyleSheet, StatusBar } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from "expo-image-picker";
import { PickedMedia } from '@/types/media';
import { uploadToSupabase } from '@/services/uploadService';


const MediaPicker = () => {

  const [media, setMedia] = useState<PickedMedia | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const pickMedia = async() => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'], //images + videos
      quality: 1,
    })

    if(!result.canceled){
      setMedia({
        uri: result.assets[0].uri,
        type: result.assets[0].type as "video" | "image"
      })
    }
  }

  const handleUpload = async() => {
    if(!media) return

    setLoading(true)
    try{
      const url = await uploadToSupabase(media)
      console.log("Uploaded URL:", url);
    } catch(err){
      console.log("Upload error", err);
    }
    setLoading(false)
  } 
  
   return (
    <View style={{ padding: 20 }}>
      <Button title="Pick Image / Video" onPress={pickMedia} />

      {media?.type === "image" && (
        <Image
          source={{ uri: media.uri }}
          style={{ width: 200, height: 200, marginTop: 20 }}
        />
      )}

       {/* UPLOAD BUTTON */}
      {media && (
        <Button
          title={loading ? "Uploading..." : "Upload to Supabase"}
          onPress={handleUpload}
          disabled={loading}
        />
      )}
    </View>
  );
}

export default MediaPicker

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