import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text className='flex-1 justify-center  items-center'>Profile</Text>
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