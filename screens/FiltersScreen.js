import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import defaultStyles from '../constants/default-styles'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/CustomHeaderButton'
import Colors from '../constants/Colors'

const FiltersScreen = () => {

  return (
    <View style={defaultStyles.screen}>
      <Text>Filters Screen</Text>
    </View>
  );
}

FiltersScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Filter Animes',
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

export default FiltersScreen;