import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import defaultStyles from '../constants/default-styles'
import Colors from '../constants/Colors'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/CustomHeaderButton'

const FavsScreen = () => {

  return (
    <View style={defaultStyles.screen}>
      <Text>Favourites Screen</Text>
    </View>
  );
}

FavsScreen.navigationOptions = navData => {
  return {
    headerStyle: {
      backgroundColor: Colors.secondary
    },
    headerTintColor: '#FFF',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title='Fav' iconName='ios-menu' onPress={() => {
          navData.navigation.toggleDrawer();
        }}/>
      </HeaderButtons>
    )
  }
}

const styles = StyleSheet.create({
  
});

export default FavsScreen;