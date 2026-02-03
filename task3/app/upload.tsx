import MediaPicker from "@/components/MediaPicker";
import { View } from "react-native";

export default function UploadScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <MediaPicker />
    </View>
  );
}
