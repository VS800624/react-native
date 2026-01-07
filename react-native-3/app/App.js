import { StyleSheet, Text, View } from 'react-native'

const App = () => {
  return (
    // <View style={{flex:1,backgroundColor:"plum", padding:60}}>
    //   <Greet name="Vishal"/>
    //   <Greet name="Bruce"/>
    // </View>
    <View style={styles.container}>
      <View>
        <Text style={styles.darkMode}>Style Inheritance <Text style={styles.boldText}>in bold</Text></Text>
      </View>
        <View style={[styles.box, styles.lightblueBg, styles.boxShadow]}>
          <Text>Lightblue box</Text>
        </View>
        <View style={[styles.box, styles.lightgreenBg, styles.androidShadow]}>
          <Text>Lightgreen box</Text>
        </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "plum",
    padding: 60,
  },
  darkMode: {
    backgroundColor: "black",
    color: "white"
  },
  boldText: {
    fontWeight: "bold",
  },  
  box: {
    width: 200,
    height: 200,
    // padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    // margin:10,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "purple",
    borderRadius: 5,
  },
  lightblueBg: {
    backgroundColor: "lightblue"
  },
  lightgreenBg: {
    backgroundColor: "lightgreen"
  },
  // there are no common styles to apply shadows in both IOS and android this boxShadow styles is applied only in IOS, to add boxShadows in android we have to use the elevation property which internally utilizes the android elevation API 
  boxShadow: {
     shadowColor: "#333333",
     shadowOffset: {
      width: 6,
      height: 6
     },
     shadowOpacity: 0.6,
     shadowRadius: 4
  },
  androidShadow: {
    elevation: 20,
    // shadowColor: "333333",
  }
})

// Note: borderRadius is not applied when you give it to the Text in IOS so apply borderRadius in Text in IOS wrap Text component with View then apply it.