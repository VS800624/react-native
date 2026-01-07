import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Dimensions, useWindowDimensions, Platform } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from '../components/customButtons/CustomButton';

const App = () => {

  
  return (
    <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>
          <View style={styles.box}>
            <Text style={styles.text}>Welcome!</Text>
            <CustomButton title="Press me" onPress={() => alert("Button pressed")}/>
          </View>
        </View>
    </SafeAreaView>
  )
}

export default App


const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "plum"
  },
  container: {
    flex:1,
    backgroundColor: "plum",
    paddingTop: Platform.OS === "android" ? 25 : 0  //this approach and Platform.select is appropriate when only small parts of a component are platform specific for e.g: one single style or a group of styles for more complex specific scenarios you should rely on Platform.select which is a platform specific extensions and in this approach you split your into separate files with .ios and .android extensions before the file's main extension react native detects detects  the extension and loads the relevant platform file when required by other components.  
    // paddingTop: Platform.OS === "ios" ? 20 : 0
  }, 
  box: {
    padding: 20,
  },
  text: {
     ...Platform.select({
      ios: {
        color: "red",
        fontSize: 24,
        fontStyle: "italic"
      },
      android: {
        color: "blue",
        fontSize: 30,
      },
    }),
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  }
})