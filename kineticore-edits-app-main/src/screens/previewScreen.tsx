import { View, Image } from "react-native";
import { Video } from "expo-av";

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const BUCKET = "media";

export default function PreviewScreen({ route }: any) {
  const { name, folder } = route.params;

  const fileUrl = `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${folder}/${name}`;
  const isVideo = name.endsWith(".mp4");

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "center",
      }}
    >
      {isVideo ? (
        <Video
          source={{ uri: fileUrl }}
          style={{ width: "100%", height: 300 }}
          useNativeControls
          shouldPlay
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
