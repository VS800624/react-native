import { View, Text, Image, Button, StyleSheet, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
// import { PickedMedia } from "@/types/media";
// import { uploadToSupabase } from "@/services/uploadService";
import * as FileSystem from "expo-file-system";
import { PickedMedia } from "../../types/media";
import { supabase } from "../supabase/client";
import { uploadToSupabase } from "../services/uploadFile";
// import { supabase } from "@/supabase/client";
import { ResizeMode, Video } from "expo-av";

const MediaPicker = () => {
  const [media, setMedia] = useState<PickedMedia | null>(null);
  const [loading, setLoading] = useState<boolean>(false);


  useEffect(() => {
    const signIn = async() => {
      // const { data, error } = await supabase.auth.signInAnonymously();

      const { data, error } = await supabase.auth.signInWithPassword({
      email: "test@gmail.com",
      password: "password123",
    });

      if(error){
        console.log("Auth error: ", error)
      } else {
        console.log("Login Data: ", data.session)
      }
    }
    signIn()
  }, [])
  
  const pickMedia = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      // Opens phone gallery
      mediaTypes: ["images", "videos"], //images + videos
      // mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
    });

     const { data } = await supabase.auth.getSession();
      console.log("SESSION:", data);


    // await fetch("https://google.com");


    if (!result.canceled) {
      setMedia({
        uri: result.assets[0].uri,
        type: result.assets[0].type as "video" | "image",
        fileName: result.assets[0].fileName ?? `${Date.now()}`,
        mimeType: result.assets[0].mimeType!,
      });
    }
  };

  const handleUpload = async () => {
    if (!media) return;

    setLoading(true);
    try {
      const url = await uploadToSupabase(media); // Send media to Supabase
      console.log("Uploaded URL:", url);
    } catch (err) {
      console.log("Upload error", err);
    }
    setLoading(false);
  };

  return (
    <View style={{ padding: 20, flex:1, justifyContent: "center", alignItems: "center" }}>
      {/* Button to open gallery */}
      <Button title="Pick Image / Video" onPress={pickMedia} />

      {/* Show preview only if media is image */}
      {media?.type === "image" && (
        // Display selected image
        <Image
          source={{ uri: media.uri }}
          style={{ width: 200, height: 200, marginTop: 20,  }}
          resizeMode="cover"
        />
      )}

        {/* Show preview only if media is video */}
      {media?.type === "video" && (
        <Video
          source={{ uri: media.uri }}
          style={{ width: 200, height: 200, marginTop: 20 }}
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay={false}   // So it doesn’t auto-play
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
};

export default MediaPicker;

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
