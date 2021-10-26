import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Navigator from './navigation/Navigator';
import * as Fonts from 'expo-font';
import AppLoading from 'expo-app-loading';
import { enableScreens } from 'react-native-screens'

enableScreens();

const fetchFonts = () => {
  return Fonts.loadAsync({
    "open-sans": "../assets/fonts/OpenSans-Regular.ttf",
    "open-sans-bold": "../assets/fonts/OpenSans-Bold.ttf"
  });
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded) {
    return (
      <AppLoading 
        startAsync={fetchFonts} 
        onFinish={() => setFontLoaded(true)} 
        onError={(err) => console.log(err)} 
      />
    );
  }

  return (
    <Navigator />
  );
}
