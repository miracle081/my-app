import { View } from 'react-native';
import { LogIn } from './Screens/Login';
import { useCallback, useEffect, useState } from "react"
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { RubikWetPaint_400Regular } from "@expo-google-fonts/rubik-wet-paint"
import { RubikMaze_400Regular } from "@expo-google-fonts/rubik-maze"


// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({ RubikWetPaint_400Regular });
        await Font.loadAsync({ RubikMaze_400Regular });
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }


    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <LogIn />
    </View>
  );
}
