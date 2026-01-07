import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Dimensions, useWindowDimensions } from 'react-native'

const App = () => {

  // const [dimensions , setDimensions] = useState({
  //   window: Dimensions.get("window")
  // })

  // useEffect(() => {
  //   const subscription = Dimensions.addEventListener("change", ({window}) => {
  //     setDimensions({window})
  //   })
  //   return () => subscription?.remove()
  // }, [])
  
  // const {window} = dimensions
  // const windowWidth = window.width
  // const windowHeight = window.height

  const windowHeight = useWindowDimensions().height
  const windowWidth = useWindowDimensions().width
  
  return (
    <View style={styles.container}>
      <View style={[styles.box, {
         width: windowWidth > 500 ? "70%": "90%",
        height: windowHeight > 600 ? "60%": "90%",
      }]}>
        <Text style={{fontSize: windowWidth> 500? 50: 24}}>Welcome!</Text>
      </View>
    </View>
  )
}

export default App

// const windowWidth = Dimensions.get("window").width
// const windowHeight = Dimensions.get("window").height

// console.log({windowHeight, windowWidth})

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "plum",
    padding: 60,
    alignItems: "center",
    justifyContent: "center"
  }, 
  box: {
    // width: windowWidth > 500 ? "70%": "90%",
    // height: windowHeight > 600 ? "60%": "90%",
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    // fontSize: windowWidth > 500 ? 50 : 24,
  }
})