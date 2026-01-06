import { useEffect, useState } from "react";
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const logoImg = require("../assets/images/react-logo.png");

export default function Index() {

  const [postList, setPostList] = useState([])
  
  const fetchData = async(limit) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_${limit}`)
    const data = await res.json()
    setPostList(data)
  }

  useEffect(() => {
    fetchData()
  }, [])
  
  return (
     <SafeAreaView style={styles.container}>
        <View style={styles.listContainer}>
          <FlatList data={postList}
          renderItem= {({item}) => {
            return (
              <View style={styles.card}>
                <Text style={styles.titleText}>{item.title}</Text>
                <Text style={styles.bodyText}>{item.body}</Text>
              </View>
            )
          }}
          />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // gap: 10,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight
  },
  content: {
    fontSize: 30,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWith: 1
  },
  titleText: {
    fontSize: 30
  },
  bodyText: {
    fontSize: 24,
    color: "#666666"
  }
});
