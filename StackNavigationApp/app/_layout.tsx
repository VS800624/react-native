import { Stack } from "expo-router";
import { Pressable, Text, Image, StatusBar } from "react-native";

// function LogoTitle() {
//   return (
//     <Image
//       style={{ width: 30, height: 30 }}
//       source={{
//         uri: "https://i0.wp.com/everyday.codes/wp-content/uploads/2019/06/react-native-1024x631.png?resize=1024%2C631&ssl=1",
//       }}
//     />
//   );
// }

// export default function RootLayout() {
//   return (
//     <Stack
//       screenOptions={{
//         headerStyle: { backgroundColor: "#6a51ae" },
//         headerTintColor: "#fff",
//         headerTitleStyle: { fontWeight: "bold" },
//         headerRight: () => (
//           <Pressable onPress={() => alert("Menu button pressed!")}>
//             <Text style={{ color: "#fff", fontSize: 16, margin: 10 }}>
//               Menu
//             </Text>
//           </Pressable>
//         ),
//         headerTitle: (props) => <LogoTitle />,
//       }}
//     >
//       <Stack.Screen
//         name="index"
//         options={{
//           title: "Home",
//         }}
//       />
//       <Stack.Screen name="about" options={{ title: "About" }} />
//     </Stack>
//   );
// }


export default function RootLayout(){
  return(
  <>
  <StatusBar style="light"/>
   <Stack>
    <Stack.Screen name="(tabs)" options={{headerShown: false}} /> 
  </Stack>
  </>)
}