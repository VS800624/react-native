import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import FontAwesome from "@expo/vector-icons/FontAwesome"

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{flex:1}}>
      <Drawer screenOptions={{
    // headerTitle: "Recipe App",
    headerTintColor: "#22d3ee",
    drawerActiveTintColor: "#8b5cf6",
    drawerInactiveTintColor: "#64748b",
    drawerStyle:{
      backgroundColor: "#ffffff"
    },
    headerStyle: {
      backgroundColor: "#0f172a"
    },
      }}>
        <Drawer.Screen name="index" options={{
          title: "Home title",
          drawerLabel: "Home Label",
          drawerIcon: ({color}) => <FontAwesome name="home" size={24} color={color}/>
        }}/>
        <Drawer.Screen name="dashboard" options={{
          title: "Dashboard title",
          drawerLabel: "Dashboard Label",
          drawerIcon: ({color}) => <FontAwesome name="dashboard" size={24} color={color}/>
        }}/>
        <Drawer.Screen name="settings" options={{
          title: "Settings title",
          drawerLabel: "Settings Label",
          drawerIcon: ({color}) => <FontAwesome name="cog" size={24} color={color}/>
        }}/>
      </Drawer>
    </GestureHandlerRootView>
)
}
