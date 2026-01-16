import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function about() {
  return (
    <View >
      <Text className='flex-1 justify-center items-center'>About</Text>
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