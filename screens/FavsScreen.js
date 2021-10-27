import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import defaultStyles from '../constants/default-styles'
import Colors from '../constants/Colors'

const FavsScreen = () => {

  return (
    <View style={defaultStyles.screen}>
      <Text>Favourites Screen</Text>
    </View>
  );
}

FavsScreen.navigationOptions = {
  headerStyle: {
    backgroundColor: Colors.secondary
  },
  headerTintColor: '#FFF'
}

const styles = StyleSheet.create({
  
});

export default FavsScreen;