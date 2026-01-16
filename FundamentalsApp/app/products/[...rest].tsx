import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

export default function CatchProductDetail() {
  const {rest} = useLocalSearchParams<{rest: string[]}>()
//   useLocalSearchParams() → gets values from the URL
// { rest } → extract the rest parameter
// rest: string[] → it is always an array
  
  return (
    <View style={styles.container}>
      <Text>Catch all product details</Text>
      <Text>Details about product at {rest.join("/")}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
  }
})

// Note: A catch-all route means: Catch any number of path segments after a route.
// A catch-all route in Expo Router allows one screen to handle multiple nested paths and returns all path segments as an array.