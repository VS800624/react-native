import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function about() {
  return (
    <View style={styles.container}>
      <Text>about</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})