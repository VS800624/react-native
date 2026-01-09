import { useEffect, useState } from "react";
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TextInput,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const logoImg = require("../assets/images/react-logo.png");
import "./global.css";
import CustomButton from "../components/CustomButton";
import axios from "axios";

export default function App() {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState("")

  const fetchData = async (limit = 10) => {
    try{
      const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_${limit}`
    );
    const data = await res.json();
    setPostList(data);
    setIsLoading(false);
    setError("")
    } catch(err){
      console.error("Error fetching data: ", err)
      setIsLoading(false)
      setError("Failed to fetch post list")
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    fetchData(15);
    setRefreshing(false);
  };

  // const addPost = async() => {
  //   setIsPosting(true)
  //   const res = fetch("https://jsonplaceholder.typicode.com/posts", {
  //     method: "post",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       title: postTitle,
  //       body: postBody
  //     })
  //   })
  //    const newPost = await res.json()
  //    setPostList([newPost, ...postList])
  //    setPostTitle("")
  //    setPostBody("")
  //    setIsPosting(false)
  // }

  const addPost = async () => {
    setIsPosting(true);
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title: postTitle,
          body: postBody,
        }
      );
      const newPost = res.data;
      setPostList([newPost, ...postList]);
      setPostTitle("");
      setPostBody("");
      setIsPosting(false);
      setError("")
    } catch (err) {
      console.error("Error adding new post: ",err);
      setError("Failed to add new post")
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView className="flex-1 bg-white justify-center items-center ">
        <ActivityIndicator size="large" color="0000ff" />
        <Text className="mt-2 text-base ">Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-[#f5f5f5]">
      {error ? (
        <View className="p-6 m-6 bg-red-300 rounded-lg border border-gray-500">
          <Text className="text-red-600 text-center text-2xl">{error}</Text>
        </View>
      ) :(
      <>
        <View className="bg-white p-4 border rounded-lg m-6">
          <TextInput
            className="bg-white p-4 border rounded-lg mx-4 mb-6"
            placeholder="Post title"
            value={postTitle}
            onChangeText={setPostTitle}
          />
          <TextInput
            className="bg-white p-4 border mb-6 rounded-lg mx-4"
            placeholder="Post body"
            value={postBody}
            onChangeText={setPostBody}
          />
          {/* <Button
          className=""
            title={isPosting ? "Adding..." : "Add Post"}
            // onPress={addPost}
            disabled={isPosting}
          /> */}
          <CustomButton
            title={isPosting ? "Adding..." : "Add Post"}
            onPress={addPost}
            disable={isPosting}
          />
        </View>
        <View className="flex-1 pt-8">
          <FlatList
            data={postList}
            renderItem={({ item }) => {
              return (
                <View className="bg-white p-6 rounded-lg border mx-4 shadow-xl">
                  <Text className="text-red-500 text-3xl">{item.title}</Text>
                  <Text className="text-[#666666] text-2xl">{item.body}</Text>
                </View>
              );
            }}
            ItemSeparatorComponent={() => <View style={{ height: 32 }}></View>}
            ListEmptyComponent={
              <Text className="text-center my-6 text-3xl font-bold">
                No Posts Found
              </Text>
            }
            ListHeaderComponent={
              <Text className="text-center my-6 text-3xl font-bold">
                Post List
              </Text>
            }
            ListFooterComponent={
              <Text className="text-center my-6 text-2xl">End of list</Text>
            }
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
        </View>
      </>)}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // gap: 10,
    backgroundColor: "",
    paddingTop: StatusBar.currentHeight,
  },
  content: {
    fontSize: 30,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWith: 1,
  },
  titleText: {
    fontSize: 30,
  },
  bodyText: {
    fontSize: 24,
    color: "#666666",
  },
});
