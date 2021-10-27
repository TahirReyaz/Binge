import React from 'react'
import { View, Text, Button } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/CustomHeaderButton'
import defaultStyles from '../constants/default-styles'
import { ANIMES } from '../data/dummy-data'

const DetailScreen = props => {
  const animeId = props.navigation.getParam('animeId');
  const anime = ANIMES.find(anime => anime.id === animeId);

  return (
    <View style={defaultStyles.screen}>
      <Text>{anime.title}</Text>
      <Button title="Go back to Genres" onPress={() => {
        props.navigation.popToTop();
      }} />
    </View>
  );
}

DetailScreen.navigationOptions = navData => {
  const animeId = navData.navigation.getParam('animeId');
  const anime = ANIMES.find(anime => anime.id === animeId);

  return {
    headerTitle: anime.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title='Fav' iconName='ios-star' onPress={() => {
          console.log('Faved')
        }}/>
      </HeaderButtons>
    )
  }
}

export default DetailScreen;