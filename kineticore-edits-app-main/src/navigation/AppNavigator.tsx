import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FilesStack from './FilesStack';
import SettingsStack from './SettingsStack';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="FilesTab"
        component={FilesStack}
        options={{ title: 'Files' }}
      />
      <Tab.Screen
        name="SettingsTab"
        component={SettingsStack}
        options={{ title: 'Settings' }}
      />
    </Tab.Navigator>
  );
}

// After login user sees: Files tab and Setting Tab