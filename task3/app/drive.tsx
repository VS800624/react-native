import { View, Text, Image, Pressable, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { listFiles } from "@/services/storageService";
import { router } from "expo-router";

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const BUCKET = "media";

const folders = ["images", "videos"];

export default function DriveScreen() {
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
      <View
        style={{
          padding: 16,
          backgroundColor: "#fff",
          borderBottomWidth: 1,
          borderColor: "#ddd",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Drive</Text>

        {/* Tabs */}
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
                  color:
                    currentFolder === folder ? "#fff" : "#1A73E8",
                  fontWeight: "600",
                }}
              >
                {folder.toUpperCase()}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      {/* Files Grid */}
      <FlatList
        data={files}
        numColumns={3}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 12 }}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              router.push({
                pathname: "/preview",
                params: {
                  name: item.name,
                  folder: currentFolder,
                },
              })
            }
            style={{
              flex: 1,
              margin: 6,
              backgroundColor: "#fff",
              borderRadius: 10,
              padding: 6,
              elevation: 2,
            }}
          >
            <Image
              source={{
                uri: `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${currentFolder}/${item.name}`,
              }}
              style={{
                width: "100%",
                height: 100,
                borderRadius: 6,
              }}
              resizeMode="contain"
            />

            {/* File Name */}
            <Text
              numberOfLines={1}
              style={{
                marginTop: 6,
                fontSize: 12,
                color: "#333",
              }}
            >
              {item.name}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
}
