import { View, Image, Button, Pressable } from "react-native";
import { useEffect, useState } from "react";
import { listFiles } from "@/services/storageService";
import { router } from "expo-router";

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const BUCKET = "media";

const folders = ["images", "videos"];

export default function DriveScreen() {
  // 1) STATE (WRITE THIS HERE)
  const [files, setFiles] = useState<any[]>([]);
  const [currentFolder, setCurrentFolder] = useState("images");

  // 2) LOAD FILES WHEN FOLDER CHANGES
  useEffect(() => {
    loadFolder(currentFolder);
  }, [currentFolder]);

  // 3) LOAD FOLDER FUNCTION (WRITE THIS HERE)
  const loadFolder = async (folder: string) => {
    const data = await listFiles(folder);
    console.log("FILES FROM SUPABASE:", data);
    setFiles(data);
  };


  // 4) UI
  return (
    <View style={{ flex: 1, padding: 10 }}>
      {/* Folder buttons */}
      <View style={{ flexDirection: "row", marginBottom: 10 }}>
        {folders.map((folder) => (
          <Button
            key={folder}
            title={folder}
            onPress={() => setCurrentFolder(folder)}
          />
        ))}
      </View>

      {/* Files grid */}
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {files.map((file) => (
          <Pressable
            key={file.name}
            onPress={() => {
              router.push({
                pathname: "/preview",
                params: {
                  name: file.name,
                  folder: currentFolder,
                },
              });
            }}
          >
            <Image
              source={{
                uri: `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${currentFolder}/${file.name}`,
              }}
              style={{
                width: 100,
                height: 100,
                margin: 8,
                borderRadius: 10,
              }}
            />
          </Pressable>
        ))}
      </View>
    </View>
  );
}
