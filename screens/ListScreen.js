import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import defaultStyles from '../constants/default-styles'
import { GENRES } from '../data/dummy-data'

const ListScreen = props => {
  return (
    <View style={defaultStyles.screen}>
      <Button title="Details" onPress={() => {
        props.navigation.navigate({routeName: 'Details'})
      }} />
    </View>
  );
}

ListScreen.navigationOptions = navData => {
  const genreId = navData.navigation.getParam('genreId');
  const selectedGenre = GENRES.find(genre => genre.id === genreId);

  return {
    headerTitle: selectedGenre.title
  }
}

const styles = StyleSheet.create({
  
});

export default ListScreen;