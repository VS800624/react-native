import { View, Button, Alert } from 'react-native';
import { supabase } from 'supabase/client';

const HomeScreen = () => {
  const signOut = async (): Promise<void> => {
    await supabase.auth.signOut();
    Alert.alert('Signed out');
  };

  return (
    <View style={{ padding: 20 }}>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
};

export default HomeScreen;
