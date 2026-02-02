import { Stack } from 'expo-router';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import { StyleSheet, View } from 'react-native';
import { ScreenContent } from "../../components/ScreenContent"
import { useEffect, useState } from 'react';


export default function Home() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      setHasPermission(status === 'granted');
    })();
  }, []);

  const openGallery = async () => {
    if (!hasPermission) {
      alert('Permission required to access photos');
      return;
    }
    console.log(hasPermission)

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result.assets); // selected images
    }
  };
   
  return (
    <>
      <Stack.Screen options={{ title: 'Tab One' }} />
      <View style={styles.container}>
        <ScreenContent path="app/(tabs)/index.tsx" title="Tab One" />
      </View>
    </>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
});

