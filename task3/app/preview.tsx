import { View, Image, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Video } from "expo-av";

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const BUCKET = "media";

export default function PreviewScreen() {
  const { name, folder } = useLocalSearchParams();

  const fileUrl = `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${folder}/${name}`;
  const isVideo = name?.toString().endsWith(".mp4");

  return (
    <View style={{ flex: 1, backgroundColor: "#000", justifyContent: "center" }}>
      {isVideo ? (
        <Video
          source={{ uri: fileUrl }}
          style={{ width: "100%", height: 300 }}
          useNativeControls
          shouldPlay={true}
        />
      ) : (
        <Image
          source={{ uri: fileUrl }}
          style={{ width: "100%", height: 400 }}
          resizeMode="contain"
        />
      )}
    </View>
  );
}
