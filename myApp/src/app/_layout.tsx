// import "./global.css";
import '@/global'; //  MUST be first
import { Slot } from "expo-router";
import 'react-native-url-polyfill/auto';
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Text, View, Image, Link } from "@/tw";

export default function Layout() {
  return (
    <View className="flex flex-1 bg-white">
      <Slot />
    </View>
  );
}


