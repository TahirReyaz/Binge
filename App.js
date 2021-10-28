import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Navigator from './navigation/Navigator';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { enableScreens } from 'react-native-screens'
import { createStore, combineReducers } from 'redux'
import animesReducer from './store/reducers/animes'
import { Provider } from 'react-redux'

enableScreens();

const rootReducer = combineReducers({
  animes: animesReducer
});
const store = createStore(rootReducer)

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

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
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
