import { Platform } from "react-native";
import * as FileSystem from "expo-file-system/legacy";

// export const uriToBlob = async (uri: string): Promise<Blob> => {
//   // Read local file using fetch:
//   const res = await fetch(uri);
//   // Convert response to Blob:
//   return await res.blob();
// };

export const uriToBlob = async (
  uri: string,
  mimeType: string,
): Promise<Blob> => {
  // Web
  if (Platform.OS === "web") {
    const res = await fetch(uri);
    return await res.blob();
  }

  // Android / IOS
  const base64 = await FileSystem.readAsStringAsync(uri, {
    encoding: "base64",
  });

  // ✅ KEY FIX: create Blob via data URL
  const dataUrl = `data:${mimeType};base64,${base64}`;

  const res = await fetch(dataUrl);
  return await res.blob();
};
