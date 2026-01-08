import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Dimensions, useWindowDimensions, Platform } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import Pokemon from '../components/pokemon';
import "../global.css"

const App = () => {

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <Pokemon />
    </SafeAreaView>
  )
}

export default App

