import { StyleSheet, Text, View } from 'react-native'
import Greet from '../components/Greet'

const App = () => {
  return (
    // <View style={{flex:1,backgroundColor:"plum", padding:60}}>
    //   <Greet name="Vishal"/>
    //   <Greet name="Bruce"/>
    // </View>
    <View style={styles.container}>
        <View style={[styles.box, styles.lightblueBg]}>
          <Text>Lightblue box</Text>
        </View>
        <View style={[styles.box, styles.lightgreenBg]}>
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
    padding: 60
  },
  box: {
    width: 100,
    height: 100,
    padding: 10,
    margin:10,
  },
  lightblueBg: {
    backgroundColor: "lightblue"
  },
  lightgreenBg: {
    backgroundColor: "lightgreen"
  }
})