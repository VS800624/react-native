import { useContext } from "react";
import { AuthProvider, AuthContext } from "./src/context/AuthContext";
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from "./src/auth/AuthNavigator";
import AppNavigator from "./src/navigation/AppNavigator";

function Root() {
  const {session, loading} = useContext(AuthContext);
  
  if(loading) return null;

  // auth decides the app
  // return session ? <AppNavigator/> : <AuthNavigator/>;
  return <AppNavigator/>
}

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Root/>
      </NavigationContainer>
    </AuthProvider>
  )
}