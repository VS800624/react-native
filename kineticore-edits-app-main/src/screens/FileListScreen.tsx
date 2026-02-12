import { useEffect, useState } from "react";
import { View, Text, Image, FlatList, Pressable } from "react-native";
import { Video } from "expo-av";
import { listFiles } from "../services/storageServices";

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const BUCKET = "media";

const folders = ["images", "videos"];

export default function FileListScreen({ navigation }: any) {
  const [files, setFiles] = useState<any[]>([]);
  const [currentFolder, setCurrentFolder] = useState("images");

  useEffect(() => {
    loadFolder(currentFolder);
  }, [currentFolder]);

  const loadFolder = async (folder: string) => {
    const data = await listFiles(folder);
    setFiles(data);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#F8F9FA" }}>
      {/* Header */}
      <View style={{ padding: 14, backgroundColor: "#fff" }}>
        {/* <Text style={{ fontSize: 20, fontWeight: "bold" }}>Drive</Text> */}

        {/* Folder Tabs */}
        <View style={{ flexDirection: "row", marginTop: 12 }}>
          {folders.map((folder) => (
            <Pressable
              key={folder}
              onPress={() => setCurrentFolder(folder)}
              style={{
                paddingVertical: 6,
                paddingHorizontal: 16,
                borderRadius: 20,
                marginRight: 10,
                backgroundColor:
                  currentFolder === folder ? "#1A73E8" : "#E8F0FE",
              }}
            >
              <Text
                style={{
                  color: currentFolder === folder ? "#fff" : "#1A73E8",
                  fontWeight: "600",
                }}
              >
                {folder.toUpperCase()}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      {/* Grid */}
      <FlatList
        data={files}
        numColumns={3}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 12 }}
        renderItem={({ item }) => {
          const fileUrl = `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${currentFolder}/${item.name}`;
          const isVideo = item.name.endsWith(".mp4");

          return (
            <Pressable
              onPress={() =>
                navigation.navigate("Preview", {
                  name: item.name,
                  folder: currentFolder,
                })
              }
            >
              <View
                style={{
                  flex: 1,
                  margin: 6,
                  backgroundColor: "#fff",
                  borderRadius: 10,
                  padding: 6,
                  elevation: 2,
                }}
              >
                {isVideo ? (
                  <Video
                    source={{ uri: fileUrl }}
                    style={{ width: "100%", height: 100 }}
                    useNativeControls
                    shouldPlay={false}
                  />
                ) : (
                  <Image
                    source={{ uri: fileUrl }}
                    style={{ width: "100%", height: 100 }}
                    resizeMode="contain"
                  />
                )}

                <Text numberOfLines={1} style={{ marginTop: 6, fontSize: 12 }}>
                  {item.name}
                </Text>
              </View>
            </Pressable>
          );
        }}
      />
    </View>
  );
}
