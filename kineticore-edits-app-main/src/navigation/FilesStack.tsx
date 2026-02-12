import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FileListScreen from '../screens/FileListScreen';
import PreviewScreen from '../screens/previewScreen';
import MediaPicker from '../components/MediaPicker';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

/**
 * It is now like a folder - otherwise tab will have just a single screen
 * <Stack.Navigator>
      <Stack.Screen name="FileList" component={FileListScreen} />
      <Stack.Screen name="FileDetails" component={FileDetailsScreen} />
      <Stack.Screen name="UploadFile" component={UploadFileScreen} />
    </Stack.Navigator>
 */

export default function FilesStack() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home" }}
      />

      <Stack.Screen
        name="Upload"
        component={MediaPicker}
        options={{ title: "Upload" }}
      />

      <Stack.Screen
        name="Drive"
        component={FileListScreen}
        options={{ title: "Drive" }}
      />

      <Stack.Screen
        name="Preview"
        component={PreviewScreen}
        options={{ title: "Preview" }}
      />

    </Stack.Navigator>
  );
}

// This allows future screens like: File details, Upload file and folder View 
